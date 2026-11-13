# Style Guide — `videos/venetian-mirror-syndicate-2026/STYLE_GUIDE.md`

Working style decisions for *The Venetian Mirror War That Built the Hall of Mirrors* (`venetian-mirror-syndicate-2026`).  
Skin: **Amber Margins ("Warm Claude Editorial")** over `terra-rose` scaffold mechanics.  
Authority: `BRAND.md` + `CONSTANTS.yaml` + `preset.json` + `BRIEF.md`. Take reference grammar from `kurzgesagt` (rhythm, volumetric construction, scale dynamics, sound-picture lock), but execute strictly in the warm archival editorial skin.

---

## 1. Palette (Measured from `preset.json` & Historical Plates)

| Token | Hex | Semantic Role in Scene Compositions |
|---|---|---|
| `parchment` | `#F5EFEB` | Default canvas ground, archival folio folios, primary backdrop |
| `vellum` | `#EAE0D0` | Inserted archival documents, evidence cards, passport placards |
| `ivory` | `#FAF7F0` | High-contrast matting, passe-partout borders, text contrast pills |
| `ink` | `#1E1813` | Primary structural linework, typography, silhouettes — never pure black `#000000` |
| `sepia` | `#5C5248` | Secondary linework, cartographic graticules, citations, rulers |
| `umber` | `#2B1F17` | Deep nocturnal shadows, lagoon vignettes, workshop floors |
| `terracotta` | `#C2593F` | Primary narrative accent, escape routes, wax seals, danger marks |
| `amber` | `#D9822B` | Furnace glow, lamplight focal pools, molten gather radiance |
| `brass` | `#C89D42` | Gilt mirror frames, compass needles, pins, metallic bevel rules |

**Color Laws:**
1. At least 70% of every scene canvas is `parchment` (`#F5EFEB`), `vellum` (`#EAE0D0`), or `ivory` (`#FAF7F0`).
2. Cosmic void indigo (`#0A0E24`), neon cyan, and electric violet are strictly banned in this film.
3. Pure black (`#000000`) and pure white (`#FFFFFF`) are prohibited; contrast derives from rich warm ink on luminous parchment.
4. Terracotta (`#C2593F`) and amber (`#D9822B`) together command under 10% of frame area to preserve editorial restraint.

---

## 2. Typography & On-Screen Text Ceiling (Strict Max 3 Words)

| Role | Font Family | Weight | Size at 1080p | Compositional Usage |
|---|---|---|---|---|
| **Display / Title** | `Instrument Serif` | 400 | 104–128px (video) · 130–268px (packaging) | Act titles, major thematic reveals, packaging hero text |
| **Editorial Body** | `EB Garamond` | 400, 600 | 36–56px | Documentary callouts, on-screen evidence labels (strictly ≤3 words) |
| **Archival Label** | `JetBrains Mono` | 500, 700 | 22–26px | Dates, accession stamps, ledger accounts, coordinates |

**Text Laws:**
- **Max 3 Words On Screen:** Video compositions strictly enforce a ceiling of $\le 3$ words per scene (labels, metrics, badges only; zero sentences, zero paragraphs). Prose narrative belongs exclusively to voiceover. Packaging is governed separately by §2 of `PACKAGING.md`: 2–4 word overlays plus compact metric badges.
- Minimum rendered text floor: 14px (JetBrains Mono floor 22px).

---

## 3. Rhythm & Progressive Volumetric Construction Lifecycle

Cadence benchmark: `kurzgesagt` rhythm adapted to 180 WPM editorial pacing. New visual state every 2.5–3.0s; scene durations 5–8s; total runtime 8:30 (20–35 scenes).
Every scene composition implements the 4-phase volumetric construction lifecycle across its slot:
- **Phase 1 (0–30%): Vector Origin & Path Growth:** Chunky structural strokes (4–8px ink contours, seed anchors, furnace arch growth).
- **Phase 2 (25–60%): Volumetric Fill Bloom & Shading:** Warm gradient blooms (`amber` furnace glow, `terracotta` wax spreads, brass frame bevels).
- **Phase 3 (50–85%): Mechanical Socketing & Living Hold:** Micro-dolly drift (scale 1.000 → 1.030), paper grain shimmer, floating smoke motes, archival badges locking in place.
- **Phase 4 (80–100%): Climax Payoff & Velocity Seam Handoff:** Decisive motion vector handing momentum to the succeeding scene.

---

## 4. Transitions (Two Tiers, Bespoke Execution)

- **`swift` (Default, Beat-to-Beat Cuts):** 0.25–0.30s per half. Camera pushes through archival folios, lateral paper pans, or clean velocity handoffs within acts.
- **`heavy` (Impact Seams, Rationed):** 0.60–0.80s per half. Reserved for act boundaries, mid-roll cliffhangers, and the Hall of Mirrors reveal ($\le 1$ per 75s of runtime). Every heavy seam maps to an explicit procedural audio hit (`impact`, `sub`, or `whoosh`).
- **Forbidden Transitions:** Digital crossfades, 3D cube spins, video glitches, flash transitions, fade-as-exit.

---

## 5. Camera & Kinematics

- **Constant Micro-Push:** Subtle continuous camera scale on holds (1.000 → 1.025 to 1.035 via seeded deterministic noise).
- **Spatial Depth:** Multi-plane parallax separation (Background folio grid, Midground furnace/apparatus, Foreground passe-partout matting and accession badge).
- **Macro-Dolly Motion:** Smooth cinematic glides without snap zooms or synthetic camera shake.

---

## 6. Texture & Archival Finish

- **Paper Grain:** Continuous subtle multiply noise (4–6% opacity) simulating seventeenth-century rag paper and vellum.
- **Warm Radial Vignette:** Soft umber perimeter vignetting (`#2B1F17` at 8–18% opacity) keeping visual focus inside the golden ratio center.
- **Plate Integration:** Primary source documents from `plates/processed/` mounted in framed passe-partout mats (`vellum` card with 2px `sepia` border and 1px inner `brass` rule).

---

## 7. Visual In / Out & Progressive Construction

- **Mandate:** every scene must look like it is being drawn, assembled or revealed — path growth, volumetric fill bloom, mechanical socketing. No finished illustration may simply fade or slide in as a sticker and freeze.
- **Enter:** dynamic path stroke draw → vellum clip bloom / mask expansion → brass or wax element sockets into place with a spring settle.
- **Exit:** bespoke velocity seam, push past the folio edge, collapse or wipe under cover. Never a fade-out.
- **Text:** on-screen labels enter after the visual state is legible, hold for at least 1.2s, and leave with the seam. Strictly ≤3 words per scene.
- **Forbidden:** thin 1–2px wireframes, whiteboard scribbles, opacity-only plate reveals, whole-frame slide-ins.

---

## 8. Sound Design Architecture

- **Voice:** `en-US-ChristopherNeural` @ `+11%` calibrated to ~180 WPM, mastered to -14.0 LUFS (true peak $\le -1.0$ dBTP).
- **Bed:** Procedural synth orchestral suite, nominal volume 0.34 (ceiling 0.40) with 6-band VO carve notch.
- **SFX:** Procedural DSP hits ceiling $\le 0.35$, frequency $\le 1$ hit per 8 seconds of runtime, mapped 1:1 to `timeline.beats.json` marks.
