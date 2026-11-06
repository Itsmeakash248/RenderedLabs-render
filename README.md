# RenderedLabs — Cloud Render Runner & Video Distribution Hub

> **Public Render Pipeline & Delivery Hub for RenderedLabs.**  
> Powered by GitHub Actions (unlimited free compute), HyperFrames, and automated release packaging.

---

## 1. Architecture & Purpose

This repository operates in tandem with the private **RenderedLabs** production repository:
- **Private Source (`RenderedLabs`):** All research dossiers, scripts, art direction, audio masters, and intellectual property remain private.
- **Public Render Engine (`RenderedLabs-render`):** Mounted as a git submodule at `renders/` inside `RenderedLabs`. Staged video composition directories are rendered in the cloud via GitHub Actions using free, unlimited runner minutes.
- **Delivery & Distribution:** Rendered `.mp4` master deliverables are uploaded as GitHub Actions artifacts and published as GitHub Releases with direct, high-bandwidth download links.

```
┌─────────────────────────────────┐
│     RenderedLabs (Private)      │
│  - Research, Scripts, Voice     │
│  - Master Compositions          │
└────────────────┬────────────────┘
                 │ git submodule (renders/)
                 ▼
┌─────────────────────────────────┐
│   RenderedLabs-render (Public)  │
│  - videos/<slug>/ (staged)      │
│  - .github/workflows/render.yml │
│  - GitHub Actions Free Runners  │
└────────────────┬────────────────┘
                 │
       ┌─────────┴─────────┐
       ▼                   ▼
 Artifact Download   GitHub Release
 (MP4 Deliverable)  (Permanent Host)
```

---

## 2. Cloud Render Workflow

### Automatic Render on Push
When a video directory is staged under `videos/<slug>/` and pushed to the `main` branch, the `.github/workflows/render.yml` workflow automatically starts rendering the newly added or updated video.

### Manual Dispatch via GitHub Actions UI
1. Navigate to **Actions** → **Render Video**.
2. Click **Run workflow**.
3. Enter:
   - **Video slug**: The folder name under `videos/` (e.g. `baltic-gps-blackout-2026`), or `all`.
   - **Quality**: `high` (broadcast master) or `draft` (rapid preview).
   - **Create Release**: `true` (attaches the `.mp4` directly to a GitHub Release).

### Dispatch via GitHub CLI (`gh`)
From within `RenderedLabs`:
```bash
# Render specific video in cloud
gh workflow run render.yml -R Itsmeakash248/RenderedLabs-render -f slug=baltic-gps-blackout-2026 -f quality=high

# Check status of cloud runs
gh run list -R Itsmeakash248/RenderedLabs-render

# Watch current run live
gh run watch -R Itsmeakash248/RenderedLabs-render

# Download the rendered video once finished
gh run download <RUN_ID> -R Itsmeakash248/RenderedLabs-render -d output/
```

### Integrated CLI Runner
Inside `RenderedLabs`, use the companion tool:
```bash
# 1. Stage a video into the submodule and push
node tools/cloud-render.mjs stage <slug>

# 2. Trigger cloud render
node tools/cloud-render.mjs dispatch <slug>

# 3. Check progress
node tools/cloud-render.mjs status

# 4. Download deliverable to videos/<slug>/renders/
node tools/cloud-render.mjs download <slug>
```

---

## 3. Directory Layout

```
.
├── .github/
│   └── workflows/
│       └── render.yml       # GitHub Actions cloud rendering pipeline
├── output/                  # Local and artifact staging for rendered MP4s
├── tools/
│   └── render-one.mjs       # Execution and verification harness
├── videos/                  # Staged video project bundles
└── package.json
```
