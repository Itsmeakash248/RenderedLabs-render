# PACKAGING — The CIA's Heist: Stealing a Soviet Spacecraft Overnight

**Slug:** `lunik-heist-1959` · **Stage:** S2 Packaging · **Gate:** G2P
**Realm:** `cosmic-ember` · **Format:** deep-dive · **Runtime target:** 8:30
**Benchmark:** `reference-studios/kurzgesagt/thumbnail.png` (single dominant hero, 2–4 word overlay, jewel glow on dusk-cosmic void, bottom-right dead-zone shielded)

---

## 1. Titles (locked — 3 variants)

| # | Angle | Title | Chars |
|---|---|---|---|
| T1 | Curiosity question | "How Did the CIA Borrow a Soviet Moon Rocket?" | 44 |
| T2 | Bold claim | "The CIA Took Apart a Soviet Moon Rocket in One Night" | 52 |
| T3 | Dramatic-SEO hybrid | "Lunik Heist 1959: The CIA's 8-Hour Space Race Theft" | 51 |

**Keyword-first audit (primary keyword in first 50 chars of ≥2):**
- T1 — `CIA` begins at char 13. Primary keyword front-loaded.
- T2 — `CIA` begins at char 5. Primary keyword front-loaded.
- T3 — `Lunik` begins at char 1 (`Lunik Heist 1959`). Primary keyword front-loaded.

**Angle separation:** T1 asks the correction question (borrow, not steal); T2 states the action as a bold claim; T3 pairs the searchable proper noun + year + time pressure for feed and search. No ALL-CAPS strings, no listicle format.

**Pairing:** T1 → `thumb-01` · T2 → `thumb-02` · T3 → `thumb-03`.

---

## 2. Thumbnails (3 hand-authored SVG masters)

All masters live in `thumbs/` as `thumb-01.svg`, `thumb-02.svg`, `thumb-03.svg`, rendered by `tools/render-thumbs.sh` to 1920×1080 PNG plus 120px proxy and CVD previews. Built from the `assets/brand/thumb-kit/template.svg` scaffold with the cosmic-ember ground, glows, badge pills and dead-zone shield.

| # | Archetype | Hero focal | Overlay (2–4 words) | Badge | Paired title |
|---|---|---|---|---|---|
| 01 | Inverted Stage | Crate + Luna upper stage, Left (`x≈450,y≈540`) | `130 BOLTS` | Right (`≈1300,780`) | T1 |
| 02 | Center Radial Split | Exploded payload sphere over a radial bolt-ring, Center (`x≈960,y≈590`) | `FAKE SEAL` | Bottom-Left (`≈120,880`) | T2 |
| 03 | Asymmetric Scale HUD | Colossal Luna nose cone, Lower-Right (`x≈1100,y≈570`), diagonal torch-beam split | `ROOF PRIED OPEN` | Mid-Left (`≈120,630`) | T3 |

**Strict non-redundancy audit (per pair, title words vs. every token in the SVG master):**
- `thumb-01` overlay tokens `130`, `bolts` share zero meaningful tokens with T1 (`how/did/the/cia/borrow/soviet/moon/rocket`).
- `thumb-02` overlay tokens `fake`, `seal` share zero meaningful tokens with T2 (`the/cia/took/apart/soviet/moon/rocket/in/one/night`).
- `thumb-03` overlay tokens `roof`, `pried`, `open` share zero meaningful tokens with T3 (`lunik/heist/1959/the/cia/8/hour/space/race/theft`).
- The `1959` token is deliberately absent from `thumb-03.svg` (including comments and aria labels) to keep the non-redundancy check clean; the year lives in the title, not the art.

**Craft doctrine applied:** no hero stroke below 6px; structural silhouettes 20–32px; dual-tone rim light 10–18px with double-pass `feGaussianBlur`; Archivo Black overlay at 140–148px with a 26–28px `#050814` outline and `paint-order="stroke fill"`; solid cel-shaded masses with Bézier curvature; badge pills at 8–10px borders; bottom-right `x:1440–1920, y:860–1080` held in dark cosmic void.

**Iteration evidence:** each master is re-rendered and re-read after any geometry fix (CL-039). 120px proxy legibility, contrast stddev ≥30, saliency balance and dead-zone clearance are recorded in §6.

---

## 3. Description

In 1959 the CIA borrowed a Soviet moon rocket for one night — and returned it before anyone noticed. What they actually took apart was stranger.

The Soviet Exhibition of Science, Technology and Culture opened at the Auditorio Nacional in Mexico City on 21 November 1959, and among the displays was a Luna upper stage in a cabin-sized crate. The popular version says the CIA stole a flight-ready moon rocket. The declassified record says something harder and more interesting: the Agency borrowed a stripped display article for roughly eight and a half hours, lifted only its roof, and measured what the Soviets had left inside.

This film reconstructs that night from the primary documents. Working from about 7:30 p.m. to a 4:00 a.m. pickup, a small team pried up 2-inch tongue-and-groove roof planks nailed with 5-inch spikes, broke roughly 130 square-headed bolts on the engine-compartment base cap, and spent almost an hour re-threading a payload orb onto a rod they could not see. To free the orb they cut a wire sealed in plastic bearing a Soviet stamp — and a duplicate seal arrived before they finished. The truck was back in the rail yard, canvas re-spread, before the Soviet checker arrived at 7:00 a.m. He showed no surprise.

The value was not a flyable rocket. It was industrial intelligence: factory markings, structural measurements, propellant-tank weights, supplier identifications, and that this stage was the fifth produced. The CIA's own account, written by Sydney W. Finer for Studies in Intelligence and released in sanitized form on 18 September 1995, is the spine of the episode, cross-checked against the Soviet exhibition administration's own 1959 report and later investigative work.

We also keep the record's open questions open. The full intelligence yield remains classified. Sources disagree about whether the toured article was a mock-up, a training item, or a stripped production item. And "the Soviets never noticed" is the CIA's assessment, not something the documents can prove. That uncertainty is part of the story, not a footnote.

0:00 — cold open: the crate in Chapultepec
0:47 — the 1959 exhibition and the Luna tour
2:02 — why the CIA had to borrow, not steal
2:55 — the hijack at the last turn-off
3:26 — the salvage yard, the roof, and the streetlights
4:23 — 130 bolts and the seal
5:17 — the orb that would not re-thread
5:56 — 7:00 a.m. and the silence after
6:34 — what the markings actually revealed
7:49 — the unresolved record

**Primary sources**
- Sydney W. Finer, "The Kidnapping of the Lunik," Studies in Intelligence 11:1 (Winter 1967), CIA Historical Review Program, sanitized 18 September 1995: https://www.cia.gov/resources/csi/static/Kidnapping-of-the-Lunik.pdf
- "Report on the Work of the Soviet Exhibition in Mexico, Year 1959," Soviet exhibition administration (English translation), Wilson Center Digital Archive: https://digitalarchive.wilsoncenter.org/document/report-work-soviet-exhibition-mexico-year-1959
- CIA, "The Real Star Wars? A Cosmic Race and a Spacecraft Heist," 20 May 2026: https://www.cia.gov/stories/story/the-real-star-wars-a-cosmic-race-and-a-spacecraft-heist/
- Jeff Maysh, "Lunik: Inside the CIA's audacious plot to steal a Soviet satellite," MIT Technology Review, 28 January 2021: https://www.technologyreview.com/2021/01/28/1016867/lunik-cia-heist-steal-russian-satellite-space-us-ussr/

**Watch next (already live on the channel)**
- "How One Anchor Can Kill the Internet" — undersea cable sabotage and the infrastructure war.
- "Fast Radio Burst From 10 Billion Years Ago?" — a cosmic signal we could not explain.
- "What Is Still Sealed in the Baker Street Heist?" — a file that stays closed until 2071.
- "What Are These Ghost Particles Passing Through You?" — invisible physics at human scale.

All four are available now at https://www.youtube.com/@RenderedLabs

#ColdWar #CIA #SpaceRace #Lunik #Espionage #History

---

## 4. Tags

```
Lunik heist, CIA Lunik, Lunik 1959, CIA heist, Cold War space, Soviet moon rocket, space race history, declassified CIA, covert operation, Cold War history, Auditorio Nacional, Mexico City 1959
```

**Tag audit:** 12 tags · every tag 1–3 words · combined string well under 500 characters · primary keyword first · no sentence-length or zero-volume phrases.

---

## 5. Upload presets

| Setting | Value |
|---|---|
| Category | Science & Technology |
| Language | English (`en`) |
| License | Standard YouTube License |
| Made for Kids | No |
| Visibility | Unlisted until Test & Compare is loaded, then Public |
| Comments | Allow all |
| Thumbnail | Test `thumb-01.png` first, then rotate `thumb-02.png` / `thumb-03.png` through Test & Compare |
| End screen | Flexible "Best for viewer" (never pin an unreleased video) |

---

## 6. G2P verification log

- Titles: exactly 3, all ≤60 chars, primary keyword in first 50 chars of all 3.
- Description: ≥200 words and <5,000 characters; 150-char hook on line 1; `[TIMESTAMPS TBD]` chapter placeholders; primary sources with public URLs; hashtags; Watch Next limited to already-published channel videos.
- Metadata hygiene: zero internal voice-engine strings, zero private repository links, zero temporary-directory paths.
- Tags: 12 locked, 8–15 band, each 1–3 words, total <500 chars.
- Thumbnails: 3 canonical SVG masters + 3 1080p PNG + 3 120px proxies; distinct archetypes; bottom-right dead-zone shielded.
- Evaluator: `python3 tools/eval/eval-s2-packaging.py videos/lunik-heist-1959` must return `passed: true` with `q_pkg >= 0.900` before G2P is declared.

---

## 7. Release Record (appended at S10)

- **Date:** 2026-11-11
- **Stage:** S10 Release Packaging & Channel Wisdom · **Gate:** G10R (Pass)
- **Master Runtime:** 521.655 s (08:41.655)
- **Titles Shipped Unchanged:** Yes (3 locked titles: T1 Curiosity Question, T2 Bold Claim, T3 Dramatic-SEO Hybrid)
- **Thumbnails Shipped Unchanged:** Yes (3 rendered 1920×1080 PNG masters + 120px feed proxies in `thumbs/`)
- **Resolved Chapters:** 10 timestamps derived from `transcript.json` word telemetry (0:00, 0:47, 2:02, 2:55, 3:26, 4:23, 5:17, 5:56, 6:34, 7:49)
- **Description Hygiene:** 666 words / 4,598 characters (< 5,000 platform ceiling); 0 internal voice engine specs, 0 private repo links
- **Tags Hygiene:** 12 locked tags, 193 total characters (< 500 ceiling), each 1–3 words
- **End Screen Wiring:** Flexible "Best for viewer" across channel catalog (never hard-pinned)
- **Watch Next Wiring:** Points strictly to verified already-published channel videos (Subsea Cables, Fast Radio Burst, Baker Street, Neutrino Ghost Ocean)
- **Shorts Planned:** 4 vertical cutdown blueprints (SH-01 through SH-04)
- **Delivery Render:** Deferred to GitHub Actions cloud matrix per Universal Rule 20 awaiting explicit human operator approval
- **YouTube Status:** `waiting_to_be_published`

