#!/usr/bin/env node
/**
 * RenderedLabs — GitHub Actions Render Matrix Planner
 * ----------------------------------------------------
 * Analyzes video projects and creates an execution plan for parallel
 * chunked rendering in GitHub Actions.
 *
 * Usage:
 *   node tools/plan-render-chunks.mjs <project> [chunks] [quality]
 */

import fs from "node:fs";
import path from "node:path";

const projectArg = process.argv[2] || "hyperframes-launch";
const chunksArg = parseInt(process.argv[3] || "8", 10);
const qualityArg = process.argv[4] || "draft";

function getProjectDuration(projectDir) {
  const indexPath = path.join(projectDir, "index.html");
  if (!fs.existsSync(indexPath)) {
    throw new Error(`index.html not found in ${projectDir}`);
  }
  const content = fs.readFileSync(indexPath, "utf8");
  const m =
    content.match(/id=["']root["'][^>]*data-duration=["']([0-9.]+)["']/i) ||
    content.match(/data-duration=["']([0-9.]+)["'][^>]*id=["']root["']/i) ||
    content.match(/data-duration=["']([0-9.]+)["']/i);
  if (!m) {
    throw new Error(`Could not find data-duration in ${indexPath}`);
  }
  return parseFloat(m[1]);
}

function planChunks() {
  const repoRoot = process.cwd();

  if (projectArg === "all") {
    const videosDir = path.join(repoRoot, "videos");
    const subdirs = fs.readdirSync(videosDir);
    const projects = [];
    for (const d of subdirs) {
      const p = path.join(videosDir, d);
      if (fs.statSync(p).isDirectory() && fs.existsSync(path.join(p, "index.html"))) {
        projects.push(d);
      }
    }
    if (projects.length === 0) {
      throw new Error("No projects found with index.html under videos/");
    }
    const matrix = projects.map((slug, idx) => ({
      id: idx,
      project: slug,
      start: "",
      end: "",
      is_whole: "true",
    }));
    return {
      project: "all",
      quality: qualityArg,
      is_chunked: false,
      chunk_count: matrix.length,
      matrix: { include: matrix },
    };
  }

  const projectDir = path.join(repoRoot, "videos", projectArg);
  if (!fs.existsSync(projectDir)) {
    throw new Error(`Project directory not found: videos/${projectArg}`);
  }

  const duration = getProjectDuration(projectDir);
  const numChunks = Math.max(1, isNaN(chunksArg) ? 8 : chunksArg);

  // If only 1 chunk requested or duration is very short (<= 30s)
  if (numChunks <= 1 || duration <= 30) {
    const matrix = [
      {
        id: 0,
        project: projectArg,
        start: "",
        end: "",
        is_whole: "true",
      },
    ];
    return {
      project: projectArg,
      quality: qualityArg,
      is_chunked: false,
      chunk_count: 1,
      matrix: { include: matrix },
    };
  }

  // Integer-second intervals align cleanly with 30fps whole frames
  const step = Math.floor(duration / numChunks);
  const matrix = [];
  for (let i = 0; i < numChunks; i++) {
    const start = i * step;
    const isLast = i === numChunks - 1;
    const end = isLast ? "" : (i + 1) * step;
    matrix.push({
      id: i,
      project: projectArg,
      start: start.toString(),
      end: end.toString(),
      is_whole: "false",
    });
  }

  return {
    project: projectArg,
    quality: qualityArg,
    is_chunked: true,
    chunk_count: numChunks,
    matrix: { include: matrix },
  };
}

try {
  const plan = planChunks();
  console.log(`project=${plan.project}`);
  console.log(`quality=${plan.quality}`);
  console.log(`is_chunked=${plan.is_chunked}`);
  console.log(`chunk_count=${plan.chunk_count}`);
  console.log(`matrix=${JSON.stringify(plan.matrix)}`);
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
