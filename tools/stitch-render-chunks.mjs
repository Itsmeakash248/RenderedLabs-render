#!/usr/bin/env node
/**
 * RenderedLabs — Render Chunk Stitcher & Concatenator
 * ----------------------------------------------------
 * Downloads and stitches rendered MP4 chunks produced by parallel
 * GitHub Actions runner jobs into a single broadcast MP4 file.
 *
 * Usage:
 *   node tools/stitch-render-chunks.mjs <project> <chunk_count> <chunks_dir> <output_file>
 */

import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const project = process.argv[2];
const chunkCount = parseInt(process.argv[3] || "1", 10);
const chunksDir = process.argv[4] || "chunks_download";
const outputFile = process.argv[5] || `renders/${project}.mp4`;

if (!project) {
  console.error("Usage: node tools/stitch-render-chunks.mjs <project> <chunk_count> <chunks_dir> <output_file>");
  process.exit(1);
}

function findChunkFile(dir, id) {
  // Direct candidates
  const candidates = [
    path.join(dir, `chunk_${id}.mp4`),
    path.join(dir, `chunk-${id}.mp4`),
    path.join(dir, `chunk_${project}_${id}.mp4`),
    path.join(dir, `chunk-${project}-${id}.mp4`),
    path.join(dir, `chunk_${id}`, `chunk_${id}.mp4`),
    path.join(dir, `chunk-${id}`, `chunk_${id}.mp4`),
    path.join(dir, `chunk-${id}`, `chunk-${id}.mp4`),
    path.join(dir, `chunk-${project}-${id}`, `chunk_${project}_${id}.mp4`),
    path.join(dir, `chunk_${project}_${id}`, `chunk_${project}_${id}.mp4`),
  ];

  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }

  // Recursive search: match any .mp4 ending in _${id}.mp4 or -${id}.mp4
  function search(current) {
    if (!fs.existsSync(current)) return null;
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        const found = search(full);
        if (found) return found;
      } else if (
        entry.name.endsWith(`_${id}.mp4`) ||
        entry.name.endsWith(`-${id}.mp4`)
      ) {
        return full;
      }
    }
    return null;
  }

  return search(dir);
}

function runCommand(cmd) {
  console.log(`[EXEC] ${cmd}`);
  return execSync(cmd, { stdio: "inherit" });
}

function main() {
  const outDir = path.dirname(path.resolve(outputFile));
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Single chunk: just copy the file
  if (chunkCount === 1) {
    console.log(`Single chunk detected. Locating chunk 0...`);
    const single = findChunkFile(chunksDir, 0);
    if (!single) {
      throw new Error(`Could not find single chunk file (chunk 0) in ${chunksDir}`);
    }
    console.log(`Copying ${single} -> ${outputFile}`);
    fs.copyFileSync(single, outputFile);
    verifyOutput(outputFile);
    return;
  }

  // Multiple chunks: assemble concat list
  console.log(`Assembling ${chunkCount} chunks from ${chunksDir}...`);
  const chunkPaths = [];
  for (let i = 0; i < chunkCount; i++) {
    const chunkFile = findChunkFile(chunksDir, i);
    if (!chunkFile) {
      throw new Error(`Missing chunk ${i} in ${chunksDir}!`);
    }
    const stat = fs.statSync(chunkFile);
    console.log(`  - Chunk ${i}: ${chunkFile} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
    chunkPaths.push(chunkFile);
  }

  const concatListPath = path.join(chunksDir, "concat_manifest.txt");
  const concatContent = chunkPaths
    .map((p) => `file '${path.resolve(p).replace(/'/g, "'\\''")}'`)
    .join("\n");
  fs.writeFileSync(concatListPath, concatContent, "utf8");
  console.log(`Concat manifest written to ${concatListPath}`);

  // Multi-tier concat execution
  let stitched = false;

  // Tier 1: Lossless stream copy (-c copy)
  try {
    console.log(`Attempting Tier 1: Lossless stream copy...`);
    runCommand(
      `ffmpeg -y -f concat -safe 0 -i "${concatListPath}" -c copy -movflags +faststart "${outputFile}"`
    );
    stitched = true;
    console.log(`✓ Tier 1 lossless stream copy succeeded.`);
  } catch (err) {
    console.warn(`Tier 1 failed (${err.message}). Falling back to Tier 2...`);
  }

  // Tier 2: Video stream copy + AAC audio re-encode (fixes any audio packet seam jitter)
  if (!stitched) {
    try {
      console.log(`Attempting Tier 2: Video stream copy with audio re-encode...`);
      runCommand(
        `ffmpeg -y -f concat -safe 0 -i "${concatListPath}" -c:v copy -c:a aac -b:a 320k -movflags +faststart "${outputFile}"`
      );
      stitched = true;
      console.log(`✓ Tier 2 copy + audio re-encode succeeded.`);
    } catch (err) {
      console.warn(`Tier 2 failed (${err.message}). Falling back to Tier 3...`);
    }
  }

  // Tier 3: Full re-encode (absolute fallback guarantee)
  if (!stitched) {
    console.log(`Attempting Tier 3: Full re-encode fallback...`);
    runCommand(
      `ffmpeg -y -f concat -safe 0 -i "${concatListPath}" -c:v libx264 -preset fast -crf 17 -c:a aac -b:a 320k -movflags +faststart "${outputFile}"`
    );
    console.log(`✓ Tier 3 full transcode succeeded.`);
  }

  verifyOutput(outputFile);
}

function verifyOutput(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Output file ${filePath} does not exist!`);
  }
  const stat = fs.statSync(filePath);
  if (stat.size === 0) {
    throw new Error(`Output file ${filePath} is 0 bytes!`);
  }
  console.log(`✓ Stitched output verified: ${filePath} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);

  try {
    const probe = execSync(
      `ffprobe -v error -show_entries format=duration,size,bit_rate -of default=noprint_wrappers=1 "${filePath}"`,
      { encoding: "utf8" }
    );
    console.log(`ffprobe metadata:\n${probe.trim()}`);
  } catch (probeErr) {
    console.warn(`Warning: ffprobe check failed: ${probeErr.message}`);
  }
}

try {
  main();
} catch (err) {
  console.error(`FATAL: ${err.message}`);
  process.exit(1);
}
