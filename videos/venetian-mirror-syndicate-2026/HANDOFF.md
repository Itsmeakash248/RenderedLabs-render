# HANDOFF - venetian-mirror-syndicate-2026

> Living state log for **Amber Margins · The Venetian Mirror War That Built the Hall of Mirrors**.
> New entries go at the **top**. `pipeline.yaml` is the machine state; this file is the narrative record.

---

## S6 — Storyboard (2026-11-12)

**Stage:** S6 · **Gate:** G6B → **PASS** · **Owner:** art-director
**Board:** 27 scenes · 520.989s · avg 19.296s · 1,492/1,492 words · 9 worlds · 29 plate mounts · 34 SFX · 5 heavy seams · 90 BPM

### What was produced

- `STORYBOARD.md` — canonical 27-row board. Every boundary is a measured sentence onset from `transcript.json`; first start 0.000, last end 520.989, zero gaps/overlaps. Each row carries hero + mechanism, FG/MG/BG depth, light source, four internal beats, the four-phase progressive-construction blueprint, coupled 2D/3D motion, and chunky volumetric craft.
- `timeline.beats.json` — 90 BPM (beat 0.666667s, 781.484 beats), 27 scene spans, 34 SFX cues, act/mid-roll/climax/outro marks, and 8 world-crossfade marks.
- `cues.json` — 34 cues written by `node ../../tools/sync-cues.mjs` (exit 0), min gap 8.113s, all gains ≤0.35.
- `pipeline.yaml` — rebuilt from `assets/brand/pipeline.template.yaml` with S0–S6 done and S7 pending.
- `_invalid_concurrent/` — the 18 invalid compositions moved out of `compositions/` with a README.

### Recovery note

The previous concurrent run left an 18-scene / ~324s / 120 BPM board and 18 stub compositions built on the retired 513.242s schedule. Its board was overwritten by the 27-scene S6 board; its compositions are quarantined in `_invalid_concurrent/` and must not be read or reused. Its `timeline.beats.json` stored seconds where beats were expected, its `cues.json` carried 18 measured cues against the old master, and its `pipeline.yaml` claimed `s7_builder_done` with 18/18 scenes. All three were regenerated from the new board. The two 4-line `## S6 — Storyboard` blocks and both `## S7 — Builder` blocks in `LEARNINGS.md` are marked or identified as invalid history.

If resuming after a crash: rebuild with

```bash
cd videos/venetian-mirror-syndicate-2026
node ../../tools/sync-cues.mjs          # regenerates cues.json + audio_meta.sfx.cues_ref
python3 -c "import yaml; yaml.safe_load(open('pipeline.yaml'))"
```

### Verification

| Check | Result |
|---|---|
| Scene count 24–30 | 27 — PASS |
| Sum of durations | 520.989s — PASS |
| Word coverage | 1,492 / 1,492 contiguous — PASS |
| Average scene duration | 19.296s (15–25 band) — PASS |
| On-screen text ceiling | max 3 words — PASS |
| SFX cues / min gap | 34 / 8.113s (≥8s) — PASS |
| Heavy seams / min spacing | 5 / 85.258s (≥75s) — PASS |
| Worlds | 9 persistent 2D worlds — PASS |
| Plate mounts | 29 from 23 plates + 2 detail crops, every act — PASS |
| `timeline.beats.json` parses | yes, 90 BPM, 34 cues — PASS |
| `sync-cues.mjs` | exit 0, 34 cues, nominal grid — PASS |
| `pipeline.yaml` parses | yes, S6 done, S7 pending — PASS |

### Next dispatch

- **Current stage:** `s6_storyboard_done`
- **Next stage:** `s7_builder`
- **Plan:** 7 blocks — 4/4/4/4/4/4/3 scenes across S01–S27.
- **S7 must read:** `STORYBOARD.md`, `timeline.beats.json`, `cues.json`, `plates/plates.json`, `preset.json`, `STYLE_GUIDE.md`, and `assets/brand/stages/s7-builder.md`.
- **S7 must not read:** `_invalid_concurrent/` (18 stale stubs), the two invalid S6 blocks in `LEARNINGS.md`, or the old 18-scene `data-start` values.

---

## S1 - Research & Fact Ledger (2026-11-12)

**Stage:** S1 · **Gate:** G1 · **Owner:** researcher · **Model:** inherit  
**Status:** complete - **G1 PASS**  
**Artifacts:** `video-dossiers/venetian-mirror-syndicate-2026-dossier.md` · `video-dossiers/venetian-mirror-syndicate-2026-ledger.md`  
**Benchmark:** `kurzgesagt` · **Sources:** 21 verified (10 T1 / 0 T2 / 8 T3 / 3 T4) · **Stated unknowns:** 5 · **Contested claims:** 11

### What was produced

- **Dossier** (`video-dossiers/venetian-mirror-syndicate-2026-dossier.md`): frontmatter, G1 table, one-line misconception, labeled teaching analogy, quantified payoff, narrative spine, key figures, timeline, three-act beats, visual motifs, five stated unknowns (U1-U5), five time anchors with a three-stage escalating cost, an eleven-item contested-claims register (C1-C11), a 21-source list with access caveats, downstream green/amber/red notes, and a G1 self-audit.
- **Atomic ledger** (`video-dossiers/venetian-mirror-syndicate-2026-ledger.md`, 64 rows F001-F064): `Fact ID | Assertion | Source Tier | Primary URL / Citation | Corroborating Citation | Quote / Data Excerpt`, plus a contested-claims index and a per-source verification log.

### The verified spine

1664 Colbert formalizes the mercantilist plan and tasks Ambassador Pierre de Bonzi with recruiting Murano workers → summer 1665 the first three masters (La Motta, Pietro Rigo, Zuane Dandolo) reach Paris → October 1665 the second party under Antonio della Rivetta arrives and the royal letters patent create the manufacture → 22/26 February 1666 the first flawless mirror → January 1667 two Venetian workers die in suspicious circumstances → spring 1667 Giustiniani forces the return of Rivetta and colleagues → 1669-1670 Colbert refuses a second recruitment → September 1672 France bans Venetian mirror imports → 1678-1684 the Hall of Mirrors is built.

### Gate G1 evidence

| Check | Command / method | Result |
|---|---|---|
| Dossier exists | `test -f video-dossiers/venetian-mirror-syndicate-2026-dossier.md` | PASS |
| Ledger exists | `test -f video-dossiers/venetian-mirror-syndicate-2026-ledger.md` | PASS |
| Frontmatter parses | Python YAML parse of dossier frontmatter | PASS |
| Ledger row count | `grep -c '^\| F[0-9]'` | 64 rows |
| >=12 verified sources | Dossier §12 + ledger count | 21 |
| >=1 Tier-1 per core claim | Dossier §14 claim audit | 10 T1 sources |
| >=2 stated unknowns | Dossier §9 | 5 (U1-U5) |
| Zero Tier-4 asserted as fact | Ledger tier audit | 3 T4 sources / 4 T4 rows, all DO NOT USE / hypothesis |
| "18 glassmasters" not asserted | `grep` audit | Appears only as contested tradition (F022, C1) |
| Poison hedged | `grep` audit | "suspected/contested" throughout; never "proven" |
| Saint-Gobain 403 disclosed | Dossier §12, ledger S9/F032 | PASS - caveat explicit |
| Learnings appended | `grep '## S1 - Research'` | PASS |
| Pipeline valid YAML | `python3 -c "import yaml; yaml.safe_load(...)"` | PASS |

### Source audit

| Tier | Count | Sources |
|---|---|---|
| T1 | 10 | Versailles; BnF Passerelles; Hamon, *Versalia* 20; Maitte, EFR 447; Scuro, Amsterdam UP 2025; Letters patent 1665; Colbert 13 Jun 1670; Colbert 16 Aug 1669; Saint-Gobain archive (403, not fetch-verified); Depping, *Correspondance administrative* |
| T2 | 0 | No investigative-journalism layer exists for a 17th-century archive topic; T1 carries the load |
| T3 | 8 | Melchior-Bonnet; Ecole des chartes thesis; McElheny, *Cabinet*; Guitard review; Historia; Areion24; Kovesi/NGV; Geo.fr |
| T4 | 3 | Lefebvre 1887; Futura-Sciences 2018; Athanassiadis blog |

**Access caveats:** Saint-Gobain returns HTTP 403 to automated fetchers and is excluded from fetch-verified claims. The Ecole des chartes page returned title/metadata on direct fetch; its content was read through the indexed full text. Historia is paywalled/region-gated and is used only for the contested poison-inquiry claim. All other sources were fetched and read directly.

### Contested points carried forward (do not resolve in narration)

1. **Defector count** - 3 initial masters, then a party of 4, then a workshop team of about 20. The "18" figure is a 19th-century popular tradition (Lefebvre 1887), repeated by Guitard 1926 and Futura 2018 (which dates it 1660); no primary tally exists. Ledger F022 / T4 / DO NOT USE.
2. **First flawless mirror** - 22 February 1666 (Melchior-Bonnet, Historia) vs 26 February 1666 (Ecole des chartes). Hamon/BnF/Versailles give only 1666. Use "February 1666."
3. **Cause of the 1667 deaths** - French autopsy reportedly natural; Venetian ambassador's first report noncommittal; poison is a contemporary accusation and later interpretation. Never "proven."
4. **Venetian assassination enforcement** - 1271/1295 statutes and 1547/1705/1762 decrees authorize killing defectors; a specific Paris operation in 1667 is a secondary claim only (McElheny). The threat system is documented; the hit is not.
5. **Wives' escape** - night-time departure after a police search is supported; "midnight" is an unsourced embellishment. The men's 4 a.m. embarkation is a separate event.
6. **Hall mirror count** - official 357 mirrors / 21 per arch / 17 arches; Melchior-Bonnet and Browne give 306 panes / 18 per arch. Dossier uses the official count and discloses the variant.
7. **Hall completion** - partially unveiled 1682; completed November 1684, last mirrors installed the night before inauguration.
8. **Lyon hotel murder** - Historia claim, not corroborated; Melchior-Bonnet has the workers detained and returned instead. Not tabulated as fact.
9. **"Kidnapping" framing** - recruitment/extraction with pay, contracts and naturalization; "kidnapping" is a later characterization.
10. **"Murano as prison"** - legal ban real and draconian; recent peer-reviewed work stresses high mobility in practice. Legally a fortress, practically porous.
11. **"18" as conflation with 18 mirrors per arch** - analytical hypothesis only; no source states it. Recorded to prevent the error, not to assert its origin.

### Deviations / limits

- **No subagent dispatch.** S1 executed as a single researcher pass per the operator constraint.
- **No work in `/tmp`.** All artifacts written directly to the project and `video-dossiers/`.
- **No script, storyboard, thumbnails, plates, audio, compositions or renders produced.** S1 stops at research; S2 owns packaging.
- **No other `videos/` project inspected.** Only this project's S0 files and the shared brand/benchmark contracts were read.
- **Playwright not used.** All URL verification went through direct fetch/Exa; `curl` returns `000` in this environment.
- **T2 = 0 is intentional and honest.** For a 1664-1667 archival topic there is no credible investigative-journalism tier; inventing one would be worse than declaring the gap.

### Current state / next dispatch

- **Current stage:** S1 complete · **Next stage:** **S2 - Packaging**
- **Next dispatch:** `packager` with `BENCHMARK=kurzgesagt`, `SLUG=venetian-mirror-syndicate-2026`, `REALM=terra-rose`
- **S2 must read:** this HANDOFF, `BRIEF.md`, the dossier (§3 payoff, §9 unknowns, §11 contested register, §13 downstream notes), the ledger's contested-claims index, and `LEARNINGS.md` `## S1 - Research`.
- **S2 hard constraints:** do not use "18 glassmasters"; do not assert poisoning; do not assert a proven Paris assassination; use 357/21/73 m/1678-1684 for the payoff; keep "February 1666" unless explicitly framing the date dispute; rework any S0 title angle that implies a proven hit or a precise defector count.
- **Blockers:** none.

---

## S0 - Setup & Topic Lock (2026-11-11)

**Stage:** S0 · **Gate:** G0 · **Owner:** producer · **Model:** inherit  
**Status:** complete - **G0 PASS**  
**Project:** `videos/venetian-mirror-syndicate-2026/`  
**Realm mechanics:** `terra-rose` · **Skin:** Amber Margins "Warm Claude Editorial" · **Benchmark:** `kurzgesagt`

### Human operator mandate - Rule 21 exception (RECORDED)

The human operator has explicitly ordered a **brand-new ~8-9 minute fast-paced video for the Amber Margins channel using the RenderedLabs harness**. This explicit instruction overrides the Rule 21 completion-priority hold for this run.

- We are **not** aborting because `videos/project-azorian-k129-2026` is in progress.
- The override is intentional, documented here, and applies to this run's S0 scaffold decision.
- Azorian remains a live project; this exception does not mark it shipped, paused, or abandoned.

### Rule 21 completion audit (pre-scaffold scan)

| Project | `project.status` | Classification | Action under this mandate |
|---|---|---|---|
| `project-azorian-k129-2026` | `in_progress` | Active uncompleted production | Proceed under explicit human override; do not touch |
| `antwerp-diamond-heist-2026` | `ready_for_export` | Production complete, awaiting export (legacy status value) | Not an active build; do not touch |
| `mirror-life-2026` | `paused` | Explicitly paused, not viable/unblocked | Not an active build; do not touch |

All other projects report `shipped`. The only active uncompleted build is Azorian, and the operator mandate names it directly. **Exception logged and accepted.**

### Topic lock

**The Venetian Mirror Syndicate / The Venetian Mirror War That Built the Hall of Mirrors.**  
1664-1667: Jean-Baptiste Colbert's covert operation to pull Murano glassmasters into France, the Venetian Council of Ten's lethal glass monopoly, the royal manufactory of October 1665, the first flawless mirror of 1666, the counter-espionage reprisals, and the Hall of Mirrors (1678-1684) as the public trophy.

**Why this topic survives verification:**
- The core spine is documented in peer-reviewed and institutional sources, not just popular retellings.
- It has a clean, visual, high-stakes conflict: a luxury technology treated as a state secret, with defection punished by family imprisonment and suspected assassination.
- It fits `intelligence_and_espionage` squarely: covert recruitment, diplomatic cover, forged letters, counter-intelligence, agents abroad.
- It supports a strong three-angle packaging pack (monument / heist / reprisal) without repeating a single promise.
- Audience demand is live: recent YouTube treatments cover the mirror's general history, but none gives the 1664-1667 operation an archival, source-forward Amber Margins treatment.
- It is **not** the Library of Alexandria and no existing `videos/` slug covers it.

**Deliberately not locked at S0 (S1 must reconcile):**
- Exact count of defecting masters (sources vary: three initial masters, a second party under Antonio della Rivetta, a workshop team of about twenty Italians; the dossier's "18" is not treated as verified).
- Exact date of the first flawless mirror (22 vs 26 February 1666 in secondary accounts).
- Cause of the 1667 deaths (French autopsy said natural; Venetian and later accounts suspect poison). Narration must say "suspected/contested", never "proven".

### Hero sources (verified accessible)

1. **Château de Versailles - The Hall of Mirrors**  
   https://en.chateauversailles.fr/discover/estate/palace/hall-mirrors  
   Official primary for the room: 73 m, 17 windows / 17 mirrored arches, 357 mirrors, 1678-1684, built to rival the Venetian monopoly.

2. **Maurice Hamon, "La Manufacture royale des glaces et Versailles aux XVIIe et XVIIIe siècles," *Versalia* 20 (2017), 135-156**  
   https://www.persee.fr/doc/versa_1285-8412_2017_num_20_1_1170 · DOI 10.3406/versa.2017.1170  
   Peer-reviewed; letters patent of October 1665; Colbert's mercantilist program; import statistics (120,000 livres in Q1 1660; 216 crates in 1665; 62 in Q1 1666).

3. **Josiah McElheny, "A Short History of the Glass Mirror," *Cabinet* 14 (2004)**  
   https://cabinetmagazine.org/issues/14/mcelheny.php  
   Reputable cultural history; Murano cristallo and tin-mercury technique; the Council of Ten "rewarded the Venetian traitors with assassination in Paris in 1667."

**Supporting:** BnF Passerelles (357 mirrors / 21 per arch; Colbert's 1665 manufacture); Saint-Gobain corporate archive (public page, 403 to automated fetchers - cite with that caveat); Università di Padova thesis on Venetian industrial espionage and the "War of the Mirrors 1664-1667"; Corine Maitte (École française de Rome, 2011) on glass-secret transmission and coercive mobility law.

### Three title / thumbnail angles

1. **The monument** - *The Venetian Mirror War That Built the Hall of Mirrors* (54 ch). Ornate mirror on parchment; Venice lagoon and furnace glow in the reflection; brass tag "1664".
2. **The heist** - *How France Stole Venice's Mirror Secret* (39 ch). Split archival folio: Murano furnace / Versailles arcade; terracotta route line across the gutter; wax seal.
3. **The reprisal** - *Venice Sent Assassins After Its Own Glassmakers* (47 ch). Sealed Council of Ten letter on umber; amber lamp; gondola silhouette; brass vial detail; no faces, no gore.

No thumbnails rendered at S0. S2 owns packaging and rendering.

### Artifacts created

- `BRIEF.md` - locked frontmatter + topic brief + palette/typography records + 3 title angles
- `HANDOFF.md` - this entry
- `LEARNINGS.md` - seeded from `assets/brand/CHANNEL_LEARNINGS.md` + S0 block
- `pipeline.yaml` - instantiated from `assets/brand/pipeline.template.yaml`; S0 marked done; G0 passed
- `hyperframes.json` - registry paths (`compositions`, `compositions/components`, `assets`)
- `preset.json` - terra-rose mechanics, overridden with the Amber Margins palette/type skin
- Directories: `assets/fonts`, `assets/voice`, `assets/bgm`, `compositions/components`, `plates/raw`, `plates/processed`, `thumbs`, `snapshots`, `renders`

### Gate G0 evidence

| Check | Command | Result |
|---|---|---|
| Directory exists | `test -d videos/venetian-mirror-syndicate-2026` | PASS |
| Preset resolved | `node tools/apply-preset.mjs assets/brand/presets/terra-rose.jsonc videos/venetian-mirror-syndicate-2026` | `preset.json` written; realm patched |
| Learning seed | `node tools/seed-learnings.mjs videos/venetian-mirror-syndicate-2026` | `## Channel Context Applied` present |
| State machine parses | `python3 -c "import yaml; yaml.safe_load(open('videos/venetian-mirror-syndicate-2026/pipeline.yaml'))"` | PASS |
| Brief frontmatter parses | `python3` YAML frontmatter parse | PASS |
| Benchmark lock | `grep` in BRIEF + pipeline | `kurzgesagt` in both |
| Hero sources accessible | Web fetch: Château de Versailles / Persée / Cabinet | All three returned live page text |
| Niche fit | `BRIEF.md` frontmatter | `intelligence_and_espionage` |
| Three title angles | `BRIEF.md` §8 + `title_angles` | 3 distinct angles (54 / 39 / 47 chars) |
| Palette skin | `grep` in `preset.json` | parchment / ink / terracotta / amber / brass present |
| Stage-file linter | `node tools/lint-stages.mjs` | PASS (repo-wide stage contracts) |

### Deviations

- **Preset skin override (intentional).** Terra-rose is used for mechanics only. Its dark `void-indigo` / `panel-navy` colors and Archivo/Nunito/Quicksand fonts are replaced by the Amber Margins parchment/ink/terracotta/amber/brass palette and Instrument Serif / EB Garamond / JetBrains Mono type system. The preset's timeline/audio/packaging mechanics are retained, with scene band corrected to the harness 20-35.
- **Saint-Gobain archive fetch.** The public archive page returns HTTP 403 to automated fetchers. It is listed as supporting, not as a hero fetch-verified source; S1 may use the search-indexed text with the caveat or substitute the Persée/Hamon peer-reviewed record.
- **Dossier's "18 glassmasters"** is not locked. S1 must reconcile the count against primary/peer-reviewed accounts.

### Current state / next dispatch

- **Current stage:** S0 complete · **Next stage:** **S1 - Research & Fact Ledger**
- **Next dispatch:** `researcher` with `BENCHMARK=kurzgesagt`, `SLUG=venetian-mirror-syndicate-2026`, `REALM=terra-rose`
- **S1 must read:** this HANDOFF, `BRIEF.md`, `LEARNINGS.md`, `reference-studios/kurzgesagt/meta.json` + `studio-profile.md` §2, and the Amber Margins dossiers (especially 02).
- **S1 deliverables:** `video-dossiers/venetian-mirror-syndicate-2026-dossier.md` + `-ledger.md`, 12+ primary sources, 2+ stated unknowns, claim x source table, no invented numbers.
- **Blockers:** none.

---

## 2026-11-12 - Stage S2: Packaging & Metadata Lock

- **Stage:** S2 - Packaging
- **Owner:** packager
- **Gate G2P:** PASS (Evaluator `q_pkg = 0.993`, Tier A++)
- **Primary Keyword:** `Venetian mirror` (in first 50 chars of T1 at char 5 and T2 at char 17; T3 deliberately leads with the legal mechanism)

### Artifacts Created & Verified

- `PACKAGING.md` — 3 titles ($\le 60$ch), 3 thumbnails, description (316 body words; evaluator counts 369 including source lines), 12 tags (<500 chars), upload settings
- `STYLE_GUIDE.md` — initialized with Amber Margins tokens, Instrument Serif/EB Garamond/JetBrains Mono type, and volumetric lifecycle
- `thumbs/thumb-01.svg`, `thumb-02.svg`, `thumb-03.svg` — hand-authored vector SVG masters (3 distinct archetypes)
- `thumbs/thumb-01.png`, `thumb-02.png`, `thumb-03.png` — 1920×1080 renders via `rsvg-convert`
- `thumbs/thumb-01-120.png`, `thumb-02-120.png`, `thumb-03-120.png` — 120px mobile proxies
- `thumbs/*-deutan.png`, `thumbs/*-protan.png` — CVD color-blindness simulation previews

### Gate G2P Evidence

| Check | Requirement | Result |
|---|---|---|
| Titles count & length | Exactly 3 titles, each $\le 60$ch | 3 titles (54ch, 43ch, 44ch) — PASS |
| Primary keyword placement | In first 50ch of $\ge 2$ titles | 2/3 titles (T1 char 5, T2 char 17) — PASS |
| Thumbnail renders | 3 PNGs @ 1920×1080 from vector SVGs | 3 renders verified on disk — PASS |
| 120px proxy contrast | Stddev $\ge 30.0$ | 75.93, 77.66, 57.00 — PASS |
| Timestamp dead-zone | Max luminance $< 130$, saliency $\le 0.06$ | Max lum $\le 97$ (120px) / $\le 81$ (1080p), mass $\le 0.012$ — PASS |
| Saliency hierarchy | Hero mass $\ge 0.45$, text mass $\le 0.50$ | Mean hero 0.617, dead 0.010; thumb-03 text 0.54 = 0.15 deduction, not a gate — PASS |
| CVD accessibility | Deutan/Protan stddev $\ge 24.0$ | Deutan $\ge 52.98$, Protan $\ge 54.17$ — PASS |
| Title/Thumbnail Non-Redundancy | 0 shared meaningful tokens | All 3 pairs clean (0 shared) — PASS |
| Description length & cleanliness | $\ge 200$ words, $<5,000$ chars, zero leaks | 369 words, 2,098 chars, clean — PASS |
| Tags count & length | 8–15 tags, 1–3 words, $<500$ chars | 12 tags, 196 chars total — PASS |
| Style guide initialized | `test -f videos/<slug>/STYLE_GUIDE.md` | PASS |
| Evaluator score | $q_{\text{pkg}} \ge 0.900$ | $q_{\text{pkg}} = 0.993$ — PASS |

### Next Dispatch

- **Current stage:** `s2_packaging_done`
- **Next stage:** `s3_evidence`
- **Next dispatch:** `plate-scout`

---

## 2026-11-12 - Stage S3: Evidence Scouting & Plate Forge

- **Stage:** S3 - Evidence
- **Owner:** plate-scout
- **Gate G3E:** PASS (Evaluator `q_plates = 1.000`, Tier A++)
- **Contract Version:** C8a (Scout Manifest), C8b v3 (Plates Manifest)

### Artifacts Created & Verified

- `plates/scout-manifest.json` — C8a manifest logging 23 primary captures, source URLs, publication dates, licenses, selectors, and evidence rationales.
- `plates/plates.json` — C8b v3 manifest with 100% triage coverage (23 approved, 0 conditional, 0 killed, 6 detail crops, 29 total assets).
- `plates/raw/raw-seg-01-01.png` through `raw-seg-10-02.png` (23 raw captures @ 1400×1000px).
- `plates/processed/pl-seg-01-01.png` through `pl-seg-10-02.png` (23 warm-graded processed plates, longest edge $\le 1920$px).
- `plates/processed/*-detail-a.png` (6 warm-graded detail crops for dense archival passages).
- `plates/processed/*.png.json` (21 quote coordinate bounding box JSON files for animated SVG highlighting).

### Gate G3E Evidence

| Check | Requirement | Result |
|---|---|---|
| Manifest validation | `scout-manifest.json` (C8a) & `plates.json` (v3, C8b) valid | PASS |
| Plate count per segment | 2–4 plates per segment (target 3, cap 6) | 2–3 plates across all 10 segments (total 23) — PASS |
| Total processed count | Total plates $\le 25\text{--}30$ | 23 plates + 6 detail crops = 29 assets — PASS |
| Single Chromium instance | Exactly 1 opened browser instance used across entire stage | Sequential execution, 0 concurrent instances — PASS |
| File existence on disk | 100% referenced files present in `plates/processed/` | 23/23 plates + 6/6 detail crops verified — PASS |
| Resolution / Frame fit | Native resolution $\ge 800\times 400$, max edge $\le 1920$px | All 1400×1000px native, scale factor 1.000 — PASS |
| Warm grade applied | `R+1.5%`, `B-1.5%` per-channel gain | Applied to 100% of processed plates & detail crops — PASS |
| Triage coverage | Strictly 100% approved/conditional/killed | 100% (23 approved, 0 conditional, 0 killed) — PASS |
| Anti-outdated audit | Zero outdated or superseded assets | All canonical primary sources verified — PASS |
| Evaluator score | $q_{\text{plates}} \ge 0.900$ | $q_{\text{plates}} = 1.000$ (Tier A++) — PASS |
| Living learnings block | `grep -q "## S3 — Evidence" LEARNINGS.md` | Verified — PASS |

### Next Dispatch

- **Current stage:** `s3_evidence_done`
- **Next stage:** `s4_script`
- **Next dispatch:** `writer`
- **S4 must read:** `BRIEF.md`, `video-dossiers/venetian-mirror-syndicate-2026-dossier.md` + `-ledger.md`, `PACKAGING.md`, `STYLE_GUIDE.md`, and `plates/plates.json`.
- **Target runtime / word count:** ~8:30 at ~180 WPM / 1,440–1,620 words, 20–35 scenes, $\le 3$ words on screen per scene.

---

## 2026-11-12 — S4 Script (Forensic Scriptwriting & Anti-Slop Linter)

- **Stage:** S4 Script
- **Owner:** writer
- **Gate:** G4S → **PASS**
- **Artifacts:** `videos/venetian-mirror-syndicate-2026/SCRIPT.md`
- **Evaluator:** `q_script = 1.000` (Tier A++)

### Gate G4S Evidence

| Check | Requirement | Result |
|---|---|---|
| Word count | 1,440–1,620 words | 1,491 words (~8:17 @ 180 WPM) — PASS |
| Exclamation mark ban | 0 exclamation marks (`!`) | 0 found — PASS |
| AI slop blacklist | 0 banned buzzwords | 0 found — PASS |
| Sentence cadence | Median 10–14 words, fragments 15%–25% | Median 12.0 words, 21.5% fragments $\le 6$ words, 0 overlong ($>32$w) — PASS |
| Conversational quotas | $\ge 8$ direct address, $\ge 5$ rhetorical Qs | 11 direct address beats, 7 rhetorical questions — PASS |
| Objection anticipations | $\ge 3$ anticipations resolved with facts | 3 verified ("You are probably thinking...", "You might wonder...", "You might ask...") — PASS |
| Comment prompt | Exactly 1 pre-peak audience prompt | 1 verified in Act IV — PASS |
| Power words | $\ge 8$ approved data-tethered awe words | 10 occurrences (*breathtaking, colossal, extraordinary, menacing, staggering, relentless, devastating, extreme, phenomenal, epic*) — PASS |
| Attributions density | $\ge 2.0$/min | 2.1 to 2.7/min (17 attributions) — PASS |
| Stated unknowns | $\ge 2$ acknowledged uncertainties | 5 acknowledged (artisan deaths, poison vs mercury, Council of Ten orders, defector tally, pane count variant) — PASS |
| Mid-roll cues | Exactly 3 tension-break markers | `[MID-ROLL CUE 1 ~2:00]`, `[MID-ROLL CUE 2 ~4:10]`, `[MID-ROLL CUE 3 ~6:20]` — PASS |
| Clean opening | First 30s clean of demonetization terms | Verified — PASS |
| Outro binge loop | Explicit bridge to recently published video | Bridges to `videos/lunik-heist-1959/` — PASS |
| Programmatic linter | `node tools/lint-script.mjs` exits 0 | 0 fails, 0 warnings — PASS |
| Evaluator engine | `node tools/eval/eval-s4-script.mjs` $\ge 0.900$ | $q_{\text{script}} = 1.000$ (Tier A++) — PASS |
| Living learnings | `grep -q "## S4 — Script" LEARNINGS.md` | Verified — PASS |

### Next Dispatch

- **Current stage:** `s4_script_done`
- **Next stage:** `s5_voice`
- **Next dispatch:** `voice`
- **S5 must read:** `SCRIPT.md`, `preset.json`, `LEARNINGS.md`, and `assets/brand/stages/s5-voice.md`.
- **Target voice parameters:** `en-US-ChristopherNeural` at `+11%` rate, pause optimization via `tools/optimize-pauses.py`, silence ceiling $\le 1.0$s.

---

## 2026-11-12 — S5 Voice (Voice Synthesis, Pause Optimization & Word Timestamps)

- **Stage:** S5 Voice
- **Owner:** voice
- **Gate:** G5V → **PASS**
- **Artifacts:**
  - `videos/venetian-mirror-syndicate-2026/assets/voice/narration.mp3` (513.242s, 24 kHz master stitch)
  - `videos/venetian-mirror-syndicate-2026/assets/voice/narration.optimized.mp3` (513.242s, 48 kHz broadcast delivery)
  - `videos/venetian-mirror-syndicate-2026/assets/voice/chunks/` (121 chunk MP3s + wordbounds JSONs)
  - `videos/venetian-mirror-syndicate-2026/assets/voice/pauses_report.json`
  - `videos/venetian-mirror-syndicate-2026/transcript.json` (1,491 words with word/text keys)
  - `videos/venetian-mirror-syndicate-2026/audio_meta.json` (schema-validated metadata)
- **Evaluator:** `q_voice = 1.000` (Tier A++)

### Gate G5V Evidence

| Check | Requirement | Result |
|---|---|---|
| Runtime conformance | 8:00–9:00 (480.0s–540.0s) | 513.242s (08:33.24, ~8:30 planned target) — PASS |
| Voice model lock | `en-US-ChristopherNeural` | `en-US-ChristopherNeural` verified — PASS |
| Speaking rate lock | `+11%` (~180 WPM calibrated) | `+11%` locked, measured 174.3 WPM (170–190 band) — PASS |
| Pause optimization | `tools/optimize-pauses.py` documentary profile | Applied; 126 pauses audited (median 0.35s, max 0.40s <= 1.15s thr) — PASS |
| Silence gap discipline | $\le 1.0$s hard ceiling (target $\le 0.8$s) | Max silence gap 0.293s — PASS |
| Intelligibility & ASR | faster-whisper ASR round-trip verification | 1,452 spoken tokens recovered across 513s, 0 dropped lines — PASS |
| Word timestamp coverage | Full word-level timings, 0 missing lines | 1,491 words mapped with `word` + `text` keys — PASS |
| Loudness normalization | -14.0 LUFS (±0.5 LUFS), true peak $\le -1.0$ dBFS | -13.99 LUFS integrated, -1.00 dBFS true peak — PASS |
| Mid-roll wall-clock anchors | Retimed to exact narrative break moments | Break 1: 188.97s, Break 2: 295.93s, Break 3: 406.88s — PASS |
| Schema validation | Validates against `audio-meta.schema.json` | 100% valid — PASS |
| Evaluator score | $q_{\text{voice}} \ge 0.900$ | $q_{\text{voice}} = 1.000$ (Tier A++) — PASS |
| Living learnings block | `grep -q "## S5 — Voice" LEARNINGS.md` | Verified — PASS |

### Next Dispatch

- **Current stage:** `s5_voice_done`
- **Next stage:** `s6_storyboard`
- **Next dispatch:** `art-director`
- **S6 must read:** `transcript.json`, `audio_meta.json`, `plates/plates.json`, `preset.json`, `STYLE_GUIDE.md`, and `assets/brand/stages/s6-storyboard.md`.
- **Target scene count:** 20–35 scenes spanning the 513.24s timeline (~15–25s per scene), $\le 3$ words on-screen per scene.




## S6 Handoff
- Storyboard, beats, and cues finalized for Venetian Mirror Syndicate.
- Ready for S7 builder dispatch.

## S6 Handoff
- Storyboard, beats, and cues finalized for Venetian Mirror Syndicate.
- Ready for S7 builder dispatch.

---

## 2026-11-12 — S4/S5 Revision: Outro Brand Fix & Voice Re-Synthesis

- **Stage:** S4 Script revision → S5 Voice re-synthesis
- **Owner:** S4/S5 revision subagent
- **Gate:** G4S re-pass + G5V re-pass
- **Reason:** the locking CTA recommended `lunik-heist-1959`, a RenderedLabs video, inside an Amber Margins film. Every other S4/S5 metric was already 1.000. This entry supersedes the S4 gate-table row that recorded the Lunik-heist binge loop.

### CTA change (only narrative edit)

**Old (removed):**
> If you want to explore another audacious covert mission where a superpower stole an adversary's prize in total secrecy, watch our deep dive into the Lunik heist next. We will see you there.

**New (shipped):**
> If you want to explore another story where an empire tried to own knowledge itself, our archival investigations are waiting on the channel. Start there, and we will see you in the next one.

**Why not the suggested Library of Alexandria line:** `BRIEF.md` §11 lists `library-of-alexandria` as Amber Margins episode 01, but no project exists under `videos/` and no Amber Margins title is in the published registry. Recommending it by name would tease an unreleased video, which S4 forbids. The shipped outro keeps the binge loop inside the channel without naming an unproduced title.

### Artifacts

| Artifact | Value |
|---|---|
| `SCRIPT.md` | 1,492 spoken words (was 1,491) · ~8:17 @ 180 WPM |
| `assets/voice/narration.mp3` | 520.989s · 24 kHz · −14.46 LUFS · −1.79 dBTP |
| `assets/voice/narration.optimized.mp3` | 520.989s · 48 kHz · −14.01 LUFS · −1.46 dBTP |
| `assets/voice/chunks/` | 121 chunk MP3s + 121 wordbounds JSONs |
| `assets/voice/pauses_report.json` | documentary profile · 125 pauses · 0 cuts |
| `transcript.json` | 1,492 words · last end 520.789s |
| `audio_meta.json` | duration 520.989s · 171.8 WPM · max gap 0.295s · mid-rolls 189.868 / 303.122 / 414.549 |

### Gate Evidence

| Check | Command | Result |
|---|---|---|
| Script lint | `node tools/lint-script.mjs videos/venetian-mirror-syndicate-2026/SCRIPT.md` | exit 0 · 1,492 words · **0 fails, 0 warnings** · 0 exclamation marks · 0 slop |
| S4 evaluator | `node tools/eval/eval-s4-script.mjs videos/venetian-mirror-syndicate-2026` | `q_script = 1.000` · cadence 1.000 · hook 1.000 · dialogue 1.000 · attributions 1.000 · purity 1.000 |
| Voice synthesis | `python3 tools/generate-voice.py --script ... --output-dir ... --transcript ... --audio-meta ... --voice en-US-ChristopherNeural --rate +11% --pitch +0Hz --target-lufs -14.0` | 121 chunks · 520.99s · 1,492 words · 171.8 WPM · −14.00 LUFS · −1.00 dBFS sample peak |
| Pause optimization | `python3 tools/optimize-pauses.py --video videos/venetian-mirror-syndicate-2026 --apply` | 125 pauses (median 0.35s, max 0.41s) · **0 cuts** · no dead air over 1.15s |
| True-peak mastering | `loudnorm I=-14:TP=-1.5` one pass on both masters | −14.01 LUFS / **−1.46 dBTP** (48 kHz) · onset 0.1786s and 520.989s duration unchanged |
| Whisper alignment | faster-whisper `base.en` word timestamps on `narration.optimized.mp3` | 1,471 ASR tokens · new outro recovered verbatim · last word 520.66s ≤ 520.989s |
| Transcript completeness | `transcript.json` vs SCRIPT.md token count | 1,492 / 1,492 words · last end 520.789s ≤ 520.989s · max gap 0.295s |
| S5 evaluator | `python3 tools/eval/eval-s5-voice.py videos/venetian-mirror-syndicate-2026` | `q_voice = 1.000` · duration 1.000 · gaps 1.000 · WPM 1.000 · coverage 1.000 |
| Cross-channel residue | `grep -i "lunik\|renderedlabs" SCRIPT.md transcript.json` | 0 matches |
| ffprobe duration | `ffprobe -show_entries format=duration` | 520.989s (08:41.0) — inside 8:00–9:00 |

### Deviations

- **True-peak fix outside the tool.** `generate-voice.py` normalizes to −1.0 dBFS **sample** peak; the fresh masters measured +0.44 dBTP (24 kHz) and +0.20 dBTP (48 kHz). A single loudnorm pass brought both inside the −1.0 dBTP delivery ceiling without touching duration or onset. Tool defect logged in `LEARNINGS.md` for S5 tooling.
- **`voiceover_raw.wav` removed.** `optimize-pauses.py --apply` writes an in-place backup whose `.wav` extension contains MP3 bytes; deleted after confirming 0 cuts so S8 cannot ingest it as a stem.
- **Mid-roll anchors re-measured.** Re-synthesis drifted +7.75s; anchors moved to 189.868s / 303.122s / 414.549s. Any asset timed to the old 188.97/295.93/406.88 marks is stale.

### Next Dispatch

- **Current stage:** `s5_voice_done` (revision)
- **Next stage:** `s6_storyboard`
- **S6 owns the `pipeline.yaml` rebuild.** The on-disk file is a partial concurrent rewrite (`current_stage: s7_builder_done`, S2 record only) and must be rebuilt at S6, not hand-patched here.
- **S6 must re-derive every `data-start` / `data-duration`** from the new `transcript.json` (520.989s), remap the three mid-roll anchors, and keep the ≤3-word on-screen ceiling.
