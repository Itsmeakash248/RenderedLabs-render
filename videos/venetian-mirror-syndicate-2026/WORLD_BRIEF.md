# WORLD-BG BRIEF — Amber Margins persistent environments

You are building **persistent world backgrounds** for an existing 27-scene film. A world is not a
scene: it is the room the scenes happen inside. It sits behind every composition, dimmed and
blurred, and it must never compete with the foreground.

- Project root: `/home/akash/Studio/RenderedLabs/videos/venetian-mirror-syndicate-2026`
- Film: *The Venetian Mirror War That Built the Hall of Mirrors*, 520.989 s, 1920×1080.
- Canonical table: `STORYBOARD.md` §2 "Persistent World Backgrounds".
- Read `LEARNINGS.md` line ~572 for the world rule, and `assets/brand/stages/world-bg.md`.

---

## 1. Non-negotiables

### Palette — "Warm Claude Editorial"
- parchment / vellum / ivory ≥ 70 % of canvas.
- terracotta `#C2593F` + amber `#E89A3C` together < 10 %.
- no pure black, no pure white. Darkest ink `#1E1813`; lightest paper `#FFFDF6`.
- **no cool / cosmic colours** — no blue, teal, violet, magenta, navy.
- tokens: paper `#FFFCF2 #FBF1DA #F6E6C6 #E9D4AF #DCC29B`,
  wood `#C99A67 #A97445 #8A5F36 #6E4826 #4A2E1C`,
  brass `#FCEBB8 #E3BB64 #C89D42 #9E742A`, ink `#2B1F17 #3A2A1E #5C3A20`, accent `#C2593F`.

### Strictly 2D
- Slow multi-plane **2D parallax** only: flat SVG planes drifting on X/Y at different rates.
- Zero 3D camera, zero `rotateX` / `rotateY`, zero `translate3d`, zero perspective transforms.

### Deterministic and seek-safe
- No `Math.random`, no `Date.now`, no `repeat: -1`.
- Use finite `repeat: N` / `yoyo: true` for living holds.
- Optional seeded noise: `<script src="../../assets/brand/lib/motion.js"></script>` gives
  `window.RLMotion.noise1(seed)`.

### Center-quiet
- Detail, light sources and geometry live at the **edges**.
- The centre ~46 % (x 518–1402, y 291–789) must stay calm: ≤ 15 geometry tags starting there,
  no thin bright strokes.
- Never use `stroke-width` of 2 or less anywhere (the backdrop rubric penalises thin strokes).
  Minimum stroke-width **3**.

### Assembly dimming
Worlds are authored rich but displayed by the assembler with
`filter: brightness(0.55) saturate(0.82) blur(1.5px)`. Author calm, not loud.

### No text, no heroes
- No `<text>` elements at all.
- No `class` containing `hero`, no `data-hero`, no `data-stat`.
- No data, no numbers, no captions.

---

## 2. File contract

Every world is one self-contained file, hand-authored:

```
<template id="wbgNN-template">
<style>
@font-face … (not needed — no text)
#root{position:absolute;inset:0;width:1920px;height:1080px;overflow:hidden;background:transparent;}
[data-composition-id="wbg-NN-slug"] .w-stage{position:absolute;inset:0;}
[data-composition-id="wbg-NN-slug"] .w-plane{position:absolute;inset:0;width:1920px;height:1080px;display:block;}
[data-composition-id="wbg-NN-slug"] .w-p1{z-index:1;} … .w-p4{z-index:4;}
[data-composition-id="wbg-NN-slug"] .w-haze{position:absolute;inset:0;z-index:5;pointer-events:none;
  background:linear-gradient(…); }
</style>

<div id="root" data-composition-id="wbg-NN-slug" data-width="1920" data-height="1080"
     data-start="0" data-duration="60.000">
  <div class="w-stage" id="wbgNN-stage">
    <svg class="w-plane w-p1" id="wbgNN-bg" viewBox="0 0 1920 1080"> … </svg>
    <svg class="w-plane w-p2" id="wbgNN-mg" viewBox="0 0 1920 1080"> … </svg>
    <svg class="w-plane w-p3" id="wbgNN-fg" viewBox="0 0 1920 1080"> … </svg>
    <div class="w-haze"></div>
  </div>
</div>

<script>
(function initWbgNN(){
  var ID = "wbg-NN-slug";
  var tl = gsap.timeline({ paused: true });
  tl.to({}, { duration: 60.000 }, 0);
  … drift tweens …
  window.__timelines = window.__timelines || {};
  window.__timelines[ID] = tl;
})();
</script>
</template>
```

- **`data-duration` must be `"60.000"` for every world** (the rubric requires ≥ 59.5 s; the
  assembler trims to the real slot).
- The `<script>` must stay **inside** `</template>`.

---

## 3. What makes a world good

- **A visible light source.** One warm source per world (a window, a furnace mouth, a candle, a
  shaft) rendered as a gradient wash plus a soft halo. No unstructured gradient fields.
- **Three to four depth planes** drifting at different rates:
  far plane 0.15–0.3 px/s, mid 0.5–0.9, near 1.2–2.0. Use `x` and `y` tweens with long
  durations (30–60 s), `sine.inOut`, `yoyo: true`, finite `repeat`.
- **A living hold** that never freezes: dust motes rising, embers drifting, vapour curling,
  a flame breathing, crystals glinting, haze bands sliding.
- **Asymmetry.** Do not centre the composition; put the light off to one third.
- **Edge weight.** A dark or detailed band at the very bottom and/or one side so the frame has
  a frame.

### The backdrop rubric (must score `w ≥ 0.700`)
Run `node tools/rank-videos.mjs --project venetian-mirror-syndicate-2026 --json` and read the
`worlds[]` entry for your file. Score is:
- `calmCenter` 0.35 — ≤ 4 thin strokes total, ≤ 15 centre geometry tags, no bright thin strokes.
- `dimReadiness` 0.25 — many `opacity` tokens (25+ gives the max), layered translucent fills.
- `ambientMotion` 0.25 — ≥ 2 distinct non-zero `{ x: N }` drift values, a living hold, full 60 s.
- `quietCompliance` 0.15 — no `<text>`, no hero classes, and at least one
  `linear-gradient` / `radial-gradient` in the file.

Target `w` 0.82–0.88.

---

## 4. Build loop

Run from `/home/akash/Studio/RenderedLabs`.

```bash
# render a frame at any local time
node tools/probe-frame.mjs videos/venetian-mirror-syndicate-2026 wbg-01-gilded-gallery.html 12 /tmp/opencode/w01-a.png
node tools/probe-frame.mjs videos/venetian-mirror-syndicate-2026 wbg-01-gilded-gallery.html 44 /tmp/opencode/w01-b.png

# score
node tools/rank-videos.mjs --project venetian-mirror-syndicate-2026 --json \
  | python3 -c "import json,sys; d=json.load(sys.stdin)[0]; [print(w['filename'], w['w'], w['thin_strokes'], w['drift_rates'], w['living_hold'], w['full_slot']) for w in d['worlds']]"

# determinism (worlds included)
node tools/determinism-check.mjs videos/venetian-mirror-syndicate-2026
```

Do **not** run `snapshot-harness`, do **not** run `eval-block`, do **not** create snapshots —
worlds are excluded from snapshot coverage. Do **not** edit scenes, `index.html`,
`pipeline.yaml`, `HANDOFF.md`, `LEARNINGS.md` or `STORYBOARD.md`.

---

## 5. Report back

≤ 8 lines:
- world ids + file names
- one sentence each on the light source and the drift
- `w` score for each, plus `thin_strokes` / `drift_rates` / `full_slot`
- anything the assembler must know (which plane is the darkest, where the light sits)
