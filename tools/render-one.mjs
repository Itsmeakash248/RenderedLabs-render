#!/usr/bin/env node
import { existsSync, statSync, mkdirSync, readdirSync } from "node:fs";
import path from "node:path";
import os from "node:os";
import { spawn } from "node:child_process";

const ROOT = process.cwd();
const VIDEOS_DIR = path.join(ROOT, "videos");
const OUTPUT_DIR = path.join(ROOT, "output");

function getArg(flag) {
  const idx = process.argv.indexOf(flag);
  return idx !== -1 ? process.argv[idx + 1] : null;
}

const targetSlug = getArg("--slug") || process.argv[2];
const quality = getArg("--quality") || "high";
const cpuCount = os.cpus()?.length || 4;
const workers = getArg("--workers") || process.env.RENDER_WORKERS || String(cpuCount);

if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function renderProject(slug) {
  const projectDir = path.join(VIDEOS_DIR, slug);
  const indexPath = path.join(projectDir, "index.html");

  if (!existsSync(indexPath)) {
    throw new Error(`Project ${slug} not found or index.html missing at ${indexPath}`);
  }

  const outputPath = path.join(OUTPUT_DIR, `${slug}.mp4`);
  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`🚀 Starting HyperFrames Render: ${slug}`);
  console.log(`   Source:  ${projectDir}`);
  console.log(`   Output:  ${outputPath}`);
  console.log(`   Quality: ${quality}`);
  console.log(`   Workers: ${workers} (hardware concurrency: ${cpuCount} vCPUs)`);
  console.log(`   Memory:  High-throughput (--no-low-memory-mode)`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);

  const startTime = Date.now();
  const args = [
    "render",
    projectDir,
    "--workers", String(workers),
    "--no-low-memory-mode",
    "--quality", quality,
    "-o", outputPath
  ];

  await new Promise((resolve, reject) => {
    const child = spawn("hyperframes", args, {
      cwd: ROOT,
      stdio: "inherit",
      env: {
        ...process.env,
        PRODUCER_LOW_MEMORY_MODE: "false"
      }
    });

    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`hyperframes render exited with code ${code}`));
    });
  });

  if (!existsSync(outputPath)) {
    throw new Error(`Expected output file was not created: ${outputPath}`);
  }

  const stat = statSync(outputPath);
  const sizeMB = (stat.size / (1024 * 1024)).toFixed(1);
  const elapsedMinutes = ((Date.now() - startTime) / 60000).toFixed(1);

  console.log(`\n🎉 Render Completed Successfully!`);
  console.log(`   File:     ${outputPath}`);
  console.log(`   Size:     ${sizeMB} MB`);
  console.log(`   Elapsed:  ${elapsedMinutes} min\n`);
}

async function main() {
  if (targetSlug && targetSlug !== "all") {
    await renderProject(targetSlug);
    return;
  }

  if (!existsSync(VIDEOS_DIR)) {
    console.log("No videos/ directory found.");
    return;
  }

  const entries = readdirSync(VIDEOS_DIR, { withFileTypes: true });
  const slugs = entries
    .filter(e => e.isDirectory() && existsSync(path.join(VIDEOS_DIR, e.name, "index.html")))
    .map(e => e.name);

  if (slugs.length === 0) {
    console.log("No renderable video projects found in videos/ (must have index.html).");
    return;
  }

  console.log(`Found ${slugs.length} renderable video project(s): ${slugs.join(", ")}`);
  for (const s of slugs) {
    await renderProject(s);
  }
}

main().catch(err => {
  console.error("Error:", err.message);
  process.exit(1);
});
