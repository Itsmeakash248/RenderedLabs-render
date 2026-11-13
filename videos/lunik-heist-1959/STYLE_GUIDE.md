# STYLE GUIDE — `videos/lunik-heist-1959/`

**Video:** The CIA's Heist: Stealing a Soviet Spacecraft Overnight
**Realm:** `cosmic-ember` · **Format:** deep-dive · **Runtime target:** 8:30
**Benchmark:** `reference-studios/kurzgesagt` (grammar only, never content)
**Stage initialized:** S2 Packaging · **Builders:** S6 author against this file, never by hand-guessing tokens.

Constitution remains `assets/brand/BRAND.md` + `assets/brand/CONSTANTS.yaml` + `preset.json`. This file records the per-video **decisions** so every builder resolves the same values.

---

## 1. Palette (measured from `preset.json` + plates)

Source of truth: `videos/lunik-heist-1959/preset.json` (`cosmic-ember`), resolved at S0. Values below are the measured preset tokens. S3 must re-sample any hero plate and record a delta here before building that block; S2 has no plate-derived shifts to record yet.

| Token | Hex | Role in this film | Source |
|---|---|---|---|
| `core-black` | `#050814` | Hero outlines, text outline, bottom-right dead-zone shield | preset |
| `void-indigo` | `#0A0E24` | Base ground, deep night yard, crate cavities | preset |
| `panel-navy` | `#151B3B` | Crate shell, hardware panels, glassmorphism mounts | preset |
| `starlight` | `#F4EFE3` | Labels (≤3 words), primary type fills, specular rims | preset |
| `moon-dust` | `#B8C0D8` | Secondary metal, bolt heads, wood seams, cold rim | preset |
| `ember` | `#FF7A1A` | **Realm lead** — payoff moments, heat, the opened crate | preset |
| `solar-gold` | `#FFD23F` | Metric accents, inspection-window light, the seal stamp | preset |
| `nebula-violet` | `#8E5FD9` | Mystery, scale, second rim tone, pre-dawn sky | preset |

**Rules:** ember leads every payoff frame; violet carries uncertainty and scale; gold is reserved for measured proof (bolts, clocks, seals). White `#FFFFFF` is allowed only as a specular highlight on a solid mass — never as type fill. Signal-red is not a realm token: if an alarm beat needs red, use `ember`, one element maximum per frame. Grays come from `moon-dust` / `panel-navy` only; never invent an off-palette gray.

**Contrast targets:** text and hero silhouettes must clear the 120px feed test used in S2 (`thumb-01..03-120.png`): grayscale stddev ≥30, hero saliency mass ≥0.45 in the right 65%, bottom-right saliency ≤0.06.

---

## 2. Type (Max 3 Words On Screen)

- **Display:** Archivo Black — packaging/thumbnail overlays and hero numbers; in-video callouts strictly ≤3 words, 96–180px at 1080p, always with a dark outline (`stroke:#050814; stroke-width:8–14; paint-order:stroke fill` at video scale; packaging uses 26–28px).
- **Body/docs:** Nunito — packaging and release prose only. **Zero on-screen sentences.**
- **Labels:** Quicksand 500–700 — kickers, units, badges, timestamps on screen; ≤3 words.
- **Number rule:** clock times and counts are the film's proof language (`7:30 p.m.`, `4:00 a.m.`, `7:00 a.m.`, `130`, `2-inch`, `5-inch`, `8.5`). Set them in Display/Quicksand, gold or starlight, never as body prose.
- **Thumbnail overlays:** `130 BOLTS` / `FAKE SEAL` / `ROOF PRIED OPEN` — each 2–3 words, 148–152px, zero overlap with its paired title.

---

## 3. Rhythm & Progressive Construction Lifecycle

Reference cadence (Kurzgesagt grammar, `studio-profile.md` §3 and §6; the profile has no §8, so the CL-047 fallback applies — `thumbnail.png` + profile + the locked S2 spec govern): a new visual state every **2.5–3 s**, hard cuts on narrative beats, scenes **5–7 s**, the hook lands by **0:30**, and the end card runs **≤2 s** and is never static.

This film follows the dossier's five-act arc — terrifying question → grounding (the 1959 tour) → the turn (access is forced) → the night (mechanism under a clock) → synthesis (silence, then the record). Pacing tightens as the clock advances; long living holds belong in the yard, not in the exhibition.

Every scene runs the 4-phase volumetric construction lifecycle across its full slot:

- **Phase 1 (0–30%)** — Vector origin and path growth: thick hero strokes (6–8px at video scale), seed anchors, radial node births.
- **Phase 2 (25–60%)** — Volumetric fill bloom and articulation: clip-path unmask, gradient bloom, glass mount, cel-shaded mass resolving.
- **Phase 3 (50–85%)** — Mechanical socketing and living hold: bolts seating, planks levering, orb threading, gauge needles, seeded micro-drift.
- **Phase 4 (80–100%)** — Climax payoff and velocity-matched seam handoff.

Record the measured mark table from `timeline.beats.json` here once S3 locks it. Do not estimate beats.

---

## 4. Transitions (two tiers, bespoke within tier)

- **`swift` (default):** 0.2–0.3 s per half — beat-to-beat cuts inside an act (exhibition → manifest → street).
- **`heavy` (rationed):** 0.6–0.9 s per half — act breaks, the truck turn-off, the roof opening, the seal reveal, the 7:00 a.m. return. ≤1 per 75 s, slots ≥3.5 s, every heavy mapped to an SFX hit.
- **Vocabulary for this film:** plank-lift wipe; canvas pull; crate-lid iris; yard-gate push; torch-beam sweep; bolt-ring rotate; seal-wire snap; clock-hand sweep; match-cut on a circular form (bolt ring → clock face → seal stamp).
- Every seam unique in ≥2 dimensions, velocity-matched, GPU-only. **Never:** crossfades, spins, glitches, light leaks, fade-as-transition.

---

## 5. Camera

Constant micro-push on holds (1.00 → 1.03–1.05, seeded `noise1` drift). Punch-ins on plates and on the crate interior. 3D perspective tilts over evidence are faked in 2D where determinism demands it; worlds stay strictly 2D (≥3 parallax planes). Scale dives are earned by the subject: exhibition hall → crate exterior → crate interior → base-cap bolt ring → the plastic seal.

---

## 6. Texture & finish

Glassmorphism mounts: `panel-navy` + 1px `starlight` border + specular sweep. Warm grade on plates (R +1.5%, B −1.5%). Deep soft shadows for depth; **never** glow on UI chrome. Cel-shaded hero masses with organic Bézier curvature — zero wireframes, zero hairlines below 6px at video scale. Canvas texture: starlight particles and 4-point glints at low opacity; wood grain only on crate surfaces; metal gets `moon-dust` highlights, not bloom.

---

## 7. Progressive Generative Construction & Visual In / Out

- **Mandate:** every scene must read as drawing, creating, or assembling from start to end. Volumetric vector craft: solid fills, rich gradients, hero strokes ≥6px at video scale, optical glass mounts, ≥3 depth planes.
- **Forbidden:** finished cards/illustrations/plates that fade or slide in whole and freeze; thin 1–2px wireframes; pencil outlines without mass.
- **Enter:** path-stroke drawing + volumetric clip bloom / mask expansion + mechanical socketing (springs).
- **Exit:** bespoke velocity seam / push past camera / collapse / wipe under cover. Never a fade. Swaps sequential (≤1 frame overlap).
- **On-screen text:** strictly ≤3 words per scene (labels and badges only).

---

## 8. Sound

Epic Mountain 4-movement arc: **wonder → tension → scale → resolution**. Bed nominal **0.34** (ceiling 0.4) with a VO carve; SFX ceiling **0.35**, ≤1 per 8 s, cued on `timeline.beats.json` and snapped to the measured beat grid.

Signature palette for this film: low string drone for the yard, a brittle plastic **seal click**, a ratcheting **bolt-run** that accelerates with the clock, a distant rail-yard shunt, and a deliberate **silence** after the 7:00 a.m. check-in. The seal is the smallest object and the last sound; do not score over the silence — let it carry the ending.

---

## 9. Thumbnail / packaging visual grammar (locked at S2)

- Three archetypes, never one template: inverted stage (`thumb-01`), center radial split (`thumb-02`), asymmetric scale HUD (`thumb-03`).
- One dominant hero mass per frame, 2–3 word overlay in Archivo Black at 148–152px with a 26–28px `core-black` outline, one thick metric badge, bottom-right dead-zone held dark.
- Hero strokes: structural 20–32px, rims 10–18px, dual-tone (violet/ember or ember/gold), double-pass `feGaussianBlur`.
- Masters are hand-authored SVG in `thumbs/`; render only through `tools/render-thumbs.sh`. No procedural thumbnail scripts.

---

## 10. Downstream handoff

- **S3:** re-measure any plate colours against §1 and append a delta row; keep the dossier's U1–U5 hedges visible in art direction (no fabricated faces, no "flight-ready" imagery, no archival dressing on reconstruction).
- **S6:** resolve every colour and font from this file; the thumbnail palette and the film palette are the same eight tokens. Max 3 words on screen. Thick strokes, solid masses.
- **S7:** sound plan in §8 is binding; the seal click and the post-7:00 a.m. silence are story beats, not garnish.
