# SUBAGENT BRIEF — Amber Margins scene production

You are building **one scene** of an existing 27-scene video. Do not start a new topic, do not
restructure the project, do not touch other scenes.

- Project root: `/home/akash/Studio/RenderedLabs/videos/venetian-mirror-syndicate-2026`
- Video: *The Venetian Mirror War That Built the Hall of Mirrors*, 520.989 s, 27 scenes, 1920×1080.
- Your scene spec is in `STORYBOARD.md` (one table row) and `transcript.json` (word objects with
  `start`/`end`). Read both before designing.

---

## 1. Read these first

1. `STORYBOARD.md` — find your row: start, end, duration, word range, narration line, tag, seam.
2. `transcript.json` — slice the words in your range; they tell you what the narration says and
   when. Use `w["start"] - sceneStart` for beat timing.
3. `compositions/s19-terror-won.html` — the canonical recent scene. Copy its skeleton: CSS tag
   block, three SVG planes, grain, vignette, timeline wrapper. Same conventions.
4. `compositions/s17-january-1667.html` — reference for layered props, a wall clock, seam craft.

---

## 2. Non-negotiables

### Palette — "Warm Claude Editorial"
- parchment / vellum / ivory must cover **≥70 %** of the canvas.
- terracotta `#C2593F` + amber `#E89A3C` together **<10 %** of the canvas.
- no pure black, no pure white. Darkest ink is `#1E1813`; lightest paper is `#FFFDF6`.
- no cool / cosmic colours (no blue, teal, violet, magenta).
- use the established tokens:
  paper `#FFFCF2 #FBF1DA #F6E6C6 #E9D4AF #DCC29B`, wood `#C99A67 #A97445 #8A5F36 #6E4826 #4A2E1C`,
  brass `#FCEBB8 #E3BB64 #C89D42 #9E742A`, ink `#2B1F17 #3A2A1E #5C3A20`, accent `#C2593F`.

### Text ceiling — hard error
- **Maximum 3 words on screen in the whole scene.** Normally that is only the scene tag.
- The tag is a pill, top-left at `left:86px; top:92px`, mono 23 px, letter-spacing .16em,
  border `#C89D42`, dot `#C2593F`, plus a 5 px `#C2593F` rule under it.
- Copy the tag CSS + markup verbatim from `s19-terror-won.html` and rename `s19-` → your prefix.

### File shape
```
<template id="sNN-template">
  <style> … @font-face ×3, #root, stage, ground, planes z-index, grain, vignette, tag, rule … </style>
  <div id="root" data-composition-id="sNN-slug" data-width="1920" data-height="1080"
       data-start="0" data-duration="D.DDD">
    <div class="sNN-stage" id="sNN-stage">
      <div class="sNN-ground"></div>
      <svg class="sNN-plane sNN-p-bg" id="sNN-bg" viewBox="0 0 1920 1080"> … </svg>
      <svg class="sNN-plane sNN-p-mg" id="sNN-mg" …> … </svg>
      <svg class="sNN-plane sNN-p-fg" id="sNN-fg" …> … </svg>
      <div class="sNN-grain"></div><div class="sNN-vignette"></div>
      <div class="sNN-tag" id="sNN-tag">…</div><div class="sNN-rule" id="sNN-rule"></div>
    </div>
  </div>
  <script> … </script>
</template>
```
- The `<script>` **must stay inside `</template>`** or nothing animates.
- Fonts: `assets/fonts/InstrumentSerif-normal-400.woff2`, `EBGaramond-normal-400.woff2`,
  `mono-archive-500.woff2` (relative URLs, exactly as in s19).
- Timeline: `var tl = gsap.timeline({ paused: true }); tl.to({}, { duration: D }, 0);`
  then register `window.__timelines[ID] = tl;`.

---

## 3. Technical rules that will silently break your scene

1. **Never tween `x` / `y` / `scale` / `rotation` on an element that carries
   `transform="translate(…)"`.** GSAP parses the translate as x/y and then snaps it to whatever
   you passed. Instead wrap the content in an inner `<g id="sNN-thing-in">` with no transform
   attribute and animate the inner group.
2. **Duplicate SVG ids break selectors silently.** A `<linearGradient id="X">` in `<defs>`
   shadows a later `<g id="X">`. Always suffix gradients: `id="sNN-wallgrad"`.
3. **Never put a gradient stroke on a zero-height horizontal line.** The degenerate bbox kills the
   gradient and it renders as a hairline. Use a `<rect>` body with a height.
4. Vertical-stroke gradients need `gradientUnits="userSpaceOnUse"`.
5. `transform-box: fill-box; transform-origin: 50% 50%` is required in CSS for HTML elements that
   scale; SVG groups accept `transformOrigin` in the tween options.
6. Avoid `opacity`-only plate reveals (a whole layer fading in). Elements may fade as they move,
   but the reveal must be a movement, a wipe, a draw-on, or a scale.
7. **No fade-to-nothing exits.** The scene must hand off with a bespoke seam: a mass that travels
   across and past the frame (a wipe, iris, flood, beam, curl, curtain). The seam mass must have
   its leading edge **past the frame on every side** at the end.

---

## 4. Quality gate (must pass before you report done)

Per scene: **q_code ≥ 0.900, q_vis ≥ 0.850, composite Q ≥ 0.900** — target q_code 0.94.

### q_code recipe (from `tools/rank-videos.mjs`)
- ≥ 35 textual `tl.*` calls (real tweens, not loops)
- ≥ 60 SVG primitives in the markup
- ≥ 280 lines in the file
- ≥ 4 CSS gradients, ≥ 4 SVG filters, ≥ 8 distinct SVG gradients
- 40+ `opacity` tokens
- 15+ micro elements (motes, glints, sparks, studs, stitches, hatch marks)
- ≥ 8 distinct fills, ≥ 60 strokes, 1+ dashed stroke, 8+ SVG transforms, several parallax rates
- long "living hold": breathing, drift, flicker, shimmer — not a static frame

### q_vis recipe (`tools/eval-visual-benchmark.py`)
- contrast std ≥ 40 with `mid_ratio ≥ 0.35`
- vibrant pixels (chroma > 0.35) ≥ 8 %
- edge density 0.015 – 0.18, strong centre detail
- keep `dark_ratio` low (< 0.05) at the sampled frame; the snapshot is taken at **80 %** of the
  scene, so the seam must not have started by then.

---

## 5. Build loop

Run everything from `/home/akash/Studio/RenderedLabs` (that is where Playwright resolves).

```bash
# render any local time of your comp
node tools/probe-frame.mjs videos/venetian-mirror-syndicate-2026 <file>.html 6.0 /tmp/opencode/<n>-a.png
# look at the image, fix, repeat at 2–3 times: early layout, mid hold, seam end
node tools/probe-frame.mjs … 14.0 /tmp/opencode/<n>-b.png
node tools/probe-frame.mjs … <duration-0.4> /tmp/opencode/<n>-c.png

# gate
node tools/snapshot-harness.mjs videos/venetian-mirror-syndicate-2026 --range N-N
cd videos/venetian-mirror-syndicate-2026 && python3 ../../tools/eval-visual-benchmark.py \
  snapshots/sNN-venetian-mirror-syndicate-2026-80pct.png --json
cd ../.. && node tools/eval-block.mjs videos/venetian-mirror-syndicate-2026 --range N-N
```

`eval-block.mjs` prints a table and says PASS. Iterate until it passes.
If it reports a brand-guard text error, remove words; if q_vis is low, add contrast, edge detail
and warm saturated accents; if q_code is low, add real tweens and micro elements.

**Do not** run `hyperframes check`, do not create `index.html`, do not render the video, do not
edit `pipeline.yaml`, `HANDOFF.md`, `LEARNINGS.md` or other scenes. Only your own composition file
(plus `EVAL_LOG.md` via the eval tool, which appends automatically).

---

## 6. Scene-craft expectations

- Hand-authored SVG only. No generator scripts, no external images.
- Compose in depth: BG wall/architecture with parallax, MG props, FG occluders + grain + vignette.
- Every prop needs a dark outline (`stroke="#3A2A1E"` 3–6 px), a highlight, and a cast shadow
  (`filter` blur ellipse). Flat shapes read as clip-art.
- Motion must be motivated: a hand places, a beam swings, a page turns, a weight drops.
  No element "just fades in" where it could be placed, drawn, poured or pressed.
- The tag enters with a clip-path wipe plus a 2–4 px translate, and its rule draws out.
- Seam: 0.9–2.2 s, eased `power2.in` / `power3.inOut`, with the leading edge carrying a warm
  rim light so the sweep reads as a physical object, not a black card.
- Give the frame a lived-in hold: dust in the light, a clock escapement, a flame flicker, a
  pendulum, cloth breathing. The audience should feel the room is still running.

---

## 7. Report back

Reply with, in ≤8 lines:
- scene id + duration
- the seam you built (one sentence)
- final `q_code`, `q_vis`, composite Q from the eval table
- anything the next scene must continue from (e.g. the final colour of the seam)
