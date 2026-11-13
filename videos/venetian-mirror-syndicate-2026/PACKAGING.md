# PACKAGING — The Venetian Mirror Syndicate (1664–1667)

**Slug:** `venetian-mirror-syndicate-2026`
**Stage:** S2 · Packaging Lock (Gate G2P)
**Primary keyword:** Venetian mirror / Murano glass
**Skin:** Amber Margins — "Warm Claude Editorial" (terra-rose mechanics, parchment/ink/terracotta world)

---

## 1. Titles

| # | Angle | Title | Chars |
|---|---|---|---|
| T1 | The monument | The Venetian Mirror War That Built the Hall of Mirrors | 54 |
| T2 | The heist | How France Stole the Venetian Mirror Secret | 43 |
| T3 | The reprisal | The Law That Let Venice Kill Its Glassmakers | 44 |

**Keyword check.** `Venetian Mirror` begins at character 5 in T1 and character 17 in T2 — both inside the first 50 characters. T3 leads with the legal mechanism instead, so the pack keeps three distinct openings rather than three keyword clones.

**Angle separation.**

- **T1 (monument).** The payoff the audience already recognises — the Hall of Mirrors — reframed as war trophy. Searchable noun first, consequence second.
- **T2 (heist).** The operation itself: France, a theft, a secret. Short, verb-led, curiosity gap without a question mark.
- **T3 (reprisal).** The cost of defection. "Law", "kill" and "glassmakers" are all supported by the ledger's statute rows (F044, F046, F047) and avoid the unproven "assassin in Paris" claim.

No ALL CAPS, no listicle, no colon, no episode number. All three read cleanly beside their thumbnail without repeating it.

---

## 2. Thumbnails

Three hand-authored SVG masters, rendered only through `tools/render-thumbs.sh` (rsvg-convert + fontconfig pinned to `assets/fonts/`). No Python, Pillow or canvas generation anywhere in the pipeline.

### 2.1 120px feed verdicts

| # | Archetype | Overlay | Badge | 120px stddev | Hero mass (right 65%) | Dead-zone mass | Dead-zone max luminance | Verdict |
|---|---|---|---|---|---|---|---|---|
| 01 | Inverted stage | `357 PANES` | `VERSAILLES 1684` | 75.93 | 0.657 | 0.009 | 59 (120px) · 53 (1080p) | **pass** |
| 02 | Center radial-horizon | `A TALENT RAID` | `1,200 LIVRES A YEAR` | 77.66 | 0.731 | 0.012 | 61 (120px) · 54 (1080p) | **pass** |
| 03 | Asymmetric scale | `HOSTAGE FAMILIES` | `COUNCIL OF TEN` | 57.00 | 0.465 | 0.009 | 97 (120px) · 81 (1080p) | **pass** |

All three clear the 30.0 contrast floor, the 0.45 hero-mass floor, the 0.06 dead-zone saliency ceiling and the 130 luminance ceiling. Thumb 03 carries the intended 0.15 text-mass penalty (left type block reads 0.54, just over 0.50) — a scoring deduction, not a gate failure; the type stays at the 130px floor with a 14px ivory keyline, and a right-edge rim light plus the seal's mass lift hero dominance to 0.47.

### 2.2 Direction per thumbnail

**Thumb 01 — Inverted stage.** A baroque brass looking-glass stands on a dark walnut ledge against warm linen. Inside the plate: the lagoon at furnace dusk, a gondola and the skyline, so the object contains the origin story. Ink display type (`357` / `PANES`) sits upper-right with an ivory keyline and a terracotta/brass rule; the accession tag reads `1664`. The dead zone is the ledge itself, not a pasted rectangle.

**Thumb 02 — Center radial-horizon.** A glassmaster stands in a stone arch, silhouetted against the furnace mouth, a glowing gather on the end of his blowpipe. Drafting arcs radiate from the arch centre. The headline `A TALENT` / `RAID` runs as a centred banner across the top, with the salary badge at bottom-left clear of the timestamp corner. The dark floor plane doubles as the dead zone.

**Thumb 03 — Asymmetric scale.** A colossal terracotta wax seal stamped with a Roman `X`, pierced by a brass stiletto, fills the centre-right, dwarfing three tiny family silhouettes at its lower edge. Text stacks top-left (`HOSTAGE` / `FAMILIES`), badge mid-left (`COUNCIL OF TEN`). A diagonal brass rule splits the folio; a warm gradient shield — not a pasted box — clears the bottom-right corner.

### 2.3 Non-redundancy audit (title ↔ every SVG text node)

| Pair | Title tokens | SVG text tokens | Intersection | Result |
|---|---|---|---|---|
| T1 ↔ thumb-01 | venetian, mirror, war, built, hall, mirrors | 357, panes, versailles, 1684, 1664 | — | **clean** |
| T2 ↔ thumb-02 | france, stole, venetian, mirror, secret | a, talent, raid, 1,200, livres, year | — | **clean** |
| T3 ↔ thumb-03 | law, let, venice, kill, glassmakers, its | hostage, families, council, ten, consiglio, dei, dieci | — | **clean** |

The audit reads every `<text>` node, including badges and micro-labels, not just the overlay.

### 2.4 Craft notes

- **Type.** Instrument Serif, 130–268px, ink fill with an ivory keyline via `paint-order="stroke fill"` — the inverted-polarity equivalent of the dark-outline doctrine on a parchment ground.
- **Stroke law.** Structural contours 7–46px; no hero element below 6px. Every rim light is a double-pass blur.
- **Fonts.** Instrument Serif, EB Garamond and JetBrains Mono copied into `assets/fonts/` as woff2 **and** converted TTF. rsvg/pango resolves TTF reliably; woff2 alone silently fell back to DejaVu. Only the TTFs are installed into the repo-level `assets/fonts/` that `render-thumbs.sh` scans. No missing-glyph boxes in any render.
- **Texture.** One `feTurbulence` paper layer per master at 0.34 opacity, plus a warm vignette — the same physical paper stock across the 3-pack.

---

## 3. Description

> In 1664, France set out to steal the Venetian mirror — and the men who knew how to make it.
>
> A Venetian mirror was not glassware. It was a state secret: two centuries of furnace craft on Murano, a lagoon republic that forbade its masters from leaving, and a Council of Ten ready to reach across borders after anyone who carried the recipe out. Then Jean-Baptiste Colbert sent a quiet instruction to France's ambassador in Venice, and the most valuable trade secret in Europe acquired a price.
>
> This essay follows the operation from the furnaces of Murano to the Hall of Mirrors at Versailles. Three glassmasters leave the lagoon. A royal patent promises a fortune. A Venetian ambassador intercepts the letters, the wives disappear at night, and the wages are counted in livres a year. We separate what the archive proves from what the legend supplies, because the documents authorize more than they record.
>
> What the record shows: the October 1665 letters patent, the 1,200 livres a year paid to the senior master, the twenty-man Venetian team in Paris, the intercepted correspondence, the families used as leverage, and the 357 panes that turned a French palace into a trophy case.
>
> CHAPTERS
> [TIMESTAMPS TBD]
>
> SOURCES & FURTHER READING
> Louis XIV, Letters patent for the Manufacture royale des glaces de miroirs, October 1665 (Wikisource, ed. Cochin, 1865).
> Sabine Melchior-Bonnet, The Mirror: A History, trans. Katharine Jewett (Routledge, 2001/2014).
> Corine Maitte, Les verriers de Murano et l'Europe, École française de Rome 447 (2011).
> Château de Versailles, The Hall of Mirrors (official room history).
> Florence Vidal, L'affaire des miroirs de Venise, Areion24 (2025).
>
> —
> Amber Margins · Notes from the edges of history.
>
> Full series: https://www.youtube.com/@AmberMargins/playlists
> Watch next: The Library of Alexandria — https://www.youtube.com/@AmberMargins
> Subscribe: https://www.youtube.com/@AmberMargins
> Inquiries: theambermargins@gmail.com
>
> Every image is drawn in code — engravings, maps, coins and manuscript plates. No stock footage, no AI images.
>
> #History #VideoEssay #AmberMargins

**Checks.** 316 words · 2,098 characters (ceiling 5,000) · hook 91 characters, keyword in the first 50 · zero internal voice engine leaks or private repository URLs · Watch Next points only to Amber Margins episode 01 and the channel page · chapters held at `[TIMESTAMPS TBD]` until S9 locks real times.

---

## 4. Tags

```text
Venetian mirror, Murano glass, Hall of Mirrors, Versailles history, history of mirrors, glassmaking history, Louis XIV, Colbert, industrial espionage, 17th century history, history documentary, Amber Margins
```

12 tags · longest 3 words (`17th century history`, `industrial espionage`) · combined string 195 characters (ceiling 500) · primary keyword first.

---

## 5. Upload preset

| Field | Value |
|---|---|
| Category | Education |
| Video language | English |
| Title & description language | English |
| License | Standard YouTube License |
| Embedding | On |
| Audience | No, it's not made for kids |
| Visibility | Private |
| Comments | On |
| Altered content | No — stylized code-drawn illustration; narrator is synthetic |
| Playlist | Amber Margins — History Essays |

---

## 6. Commands and evidence

```bash
# masters -> 1920x1080 PNG + 120px proxy + CVD previews
bash tools/render-thumbs.sh videos/venetian-mirror-syndicate-2026 --cvd

# packaging evaluator
python3 tools/eval/eval-s2-packaging.py videos/venetian-mirror-syndicate-2026
```

Observed after the final render:

- `identify` on all three PNGs: 1920×1080.
- `thumb-01/02/03-120.png`: 120×68.
- Evaluator: 3 titles, 3 SVGs, 3 PNGs, 3 proxies, mean 120px contrast 70.20, mean hero mass 0.617, mean dead-zone mass 0.010.
- `q_pkg` ≥ 0.900 with zero gate failures.

**Metric exemption.** None requested. All three thumbnails pass every numeric floor without a waiver. The 10% accent-coverage rule in `amber-margins/STYLE.md` is a motion rule for inside-film frames; thumb 03's macro wax seal is a packaging-only prop and is documented as such in `STYLE_GUIDE.md` §1.
