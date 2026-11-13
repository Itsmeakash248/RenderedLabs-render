# PLATE MAP — canonical asset per scene

Supersedes the plate column in `STORYBOARD.md`. The board still owns timing, beats and seam moves.
This file owns **which image** is mounted and **how**. All paths are relative to the project root and
all IDs are listed in `plates/plates.json` (v4).

**Mount law.** A hero plate is the scene's world, not a postcard on a blank page. Mount it at 75–100%
of canvas, grade it warm, and animate vector architecture over it. A document plate may sit in a mat,
but it must be legible at 120px and must never show browser chrome, cookie banners or navigation.

| # | Scene | Asset | Mount | Width/height | Crop / focus | Spoken lock |
|---|---|---|---|---|---|---|
| 01 | `s01-gilded-tally` | `art-hall-wide` | A framed hero | 100% bleed behind 5-arch window | full hall, vanishing point right of centre | "Stand inside the Hall of Mirrors" 0.095 |
| 02 | `s02-bought-people` | `art-colbert` | D split | 58% height, right third | head + document, dark cloak | "They bought people" 24.719 |
| 03 | `s03-three-documents` | `art-patent` | A portrait mat | 82% height, left-of-centre | top two-thirds of the printed page | "customs ledgers" 39.104 |
| 04 | `s04-zero-masters` | `art-hall-detail` | C HUD | 66% | ceiling medallion, square crop | "zero master mirror" 68.180 |
| 05 | `s05-eight-hundred-days` | `art-glassworks` | D split | 62% | full engraving, workshop interior | "roughly eight hundred artisan workdays" |
| 06 | `s06-customs-hemorrhage` | `art-lagoon-map` | C HUD | 70% | lagoon + mainland roads | "one hundred twenty thousand livres" |
| 07 | `s07-mercury-mirror` | `art-mirror-design` | C HUD | 66% | ornament drawing, full object | "a toxic amalgam of tin and mercury" |
| 08 | `s08-golden-cage` | `art-murano-tower` | A portrait hero | 84% height, left | lighthouse + waterfront | "The island of Murano was a golden cage" |
| 08b | `s08-golden-cage` | `art-murano-skyline` | E callout | 42% | canal frontage strip | "married into the Venetian nobility" |
| 09 | `s09-ten-seals` | `art-council` | A framed hero | 78% | full painting, dark chamber | "execute defectors abroad" |
| 10 | `s10-gold-instead` | `art-gondola` | D split | 70% height, left | gondola + water, vertical | "He sent gold instead" |
| 11 | `s11-three-masters` | `art-canaletto` | C HUD | 70% | Grand Canal, full width | "slipped out of the lagoon" |
| 12 | `s12-before-dawn` | `art-versailles-silvestre` | A framed hero | 78% | palace + avenue, full engraving | "fled before dawn" |
| 13 | `s13-payroll-foundry` | `art-furnace` | A framed hero | 78% | furnace mouth, square crop | "twelve hundred livres" |
| 14 | `s14-first-mirror` | `art-blowing` | A framed hero | 78% | glassblower + gather | "first flawless mirror" |
| 15 | `s15-forged-replies` | `art-mirror-gilt` | E callout | 58% height, right | mirror + gilt frame | "the wives vanished" |
| 16 | `s16-matchlock-street` | `art-paris-map` | A framed hero | 76% | Rue de Reuilly quarter, tight crop | "a street shootout erupted" |
| 17 | `s17-january-1667` | `art-blowing-hands` | E callout | 64% | hands + pipe + bench | "Domenico Morasse died in agony" |
| 18 | `s18-no-proof` | `art-mirror-gilt` | C HUD reuse | 56% | frame detail, cool grade | "no physical proof of foul play" |
| 19 | `s19-terror-won` | `art-doge` | C HUD | 64% height | stone inscription, tight | "Terror won" |
| 20 | `s20-tacit-knowledge` | `art-glassworks` | A framed hero reuse | 78% | bench + furnace, different crop | "The tacit knowledge had transferred" |
| 21 | `s21-paper-chain` | `art-patent` | C HUD reuse | 64% height | seal + privilege clause | "a total embargo" |
| 21b | `s21-paper-chain` | `art-versailles-court` | D split | 62% | courtyard engraving | "September sixteen seventy-two" |
| 22 | `s22-counting-room` | `art-hall-wide` | C HUD reuse | 70% | mirrored arcade, left bays | "Seventeen arches" |
| 23 | `s23-assembled-mosaic` | `art-hall-bw` | A framed hero | 78% | full B&W hall print | "it was an assembled mosaic" |
| 24 | `s24-open-questions` | `art-hall-bw` | C HUD reuse | 62% | two adjacent bays, tight | "remains unknown" |
| 25 | `s25-inverted-flow` | `art-canaletto` | D split reuse | 62% | canal + shipping | "the trade flow had inverted" |
| 26 | `s26-still-gilded` | `art-chandelier` | B full-bleed | 100% | chandelier + vault | "beneath the gilded trim" |
| 27 | `s27-human-hands` | `art-blowing-hands` | A framed hero reuse | 78% | hands + glass, warm | "It captured the men who did" |

## Asset inventory (art)

| ID | File | Native px | License |
|---|---|---|---|
| `art-hall-wide` | `plates/processed/hall-wide.jpg` | 1600×1062 | CC BY-SA 3.0 |
| `art-hall-ceiling` | `plates/processed/hall-ceiling.jpg` | 900×1200 | CC BY-SA 3.0 |
| `art-hall-detail` | `plates/processed/hall-detail.jpg` | 1564×1200 | CC0 |
| `art-hall-bw` | `plates/processed/hall-bw.jpg` | 1600×1009 | CC BY 2.0 |
| `art-louis` | `plates/processed/louis.jpg` | 861×1200 | Public domain |
| `art-colbert` | `plates/processed/colbert.jpg` | 918×1200 | Public domain |
| `art-patent` | `plates/processed/patent.jpg` | 660×1200 | Public domain |
| `art-versailles-silvestre` | `plates/processed/versailles-silvestre.jpg` | 1600×1200 | Public domain |
| `art-versailles-court` | `plates/processed/versailles-court.jpg` | 1004×650 | Public domain |
| `art-paris-map` | `plates/processed/paris-map.jpg` | 1600×1155 | Public domain |
| `art-venice-plan` | `plates/processed/venice-plan.jpg` | 1600×1056 | CC BY-SA 4.0 |
| `art-lagoon-map` | `plates/processed/lagoon-map.jpg` | 1600×1040 | Public domain |
| `art-canaletto` | `plates/processed/canaletto.jpg` | 1600×1015 | Public domain |
| `art-gondola` | `plates/processed/gondola.jpg` | 747×1200 | Public domain |
| `art-murano-tower` | `plates/processed/murano-tower.jpg` | 1600×1068 | CC BY-SA 4.0 |
| `art-murano-skyline` | `plates/processed/murano-skyline.jpg` | 1600×624 | CC BY-SA 4.0 |
| `art-furnace` | `plates/processed/furnace.jpg` | 1600×1200 | CC BY-SA 3.0 |
| `art-blowing` | `plates/processed/blowing.jpg` | 1600×1200 | CC BY-SA 3.0 |
| `art-blowing-hands` | `plates/processed/blowing-hands.jpg` | 1600×1200 | CC BY-SA 3.0 |
| `art-glassworks` | `plates/processed/glassworks.jpg` | 1543×1200 | Public domain |
| `art-mirror-design` | `plates/processed/mirror-design.jpg` | 1600×1067 | CC0 |
| `art-mirror-gilt` | `plates/processed/mirror-gilt.jpg` | 1419×1200 | CC BY-SA 4.0 |
| `art-council` | `plates/processed/council.jpg` | 1230×827 | CC BY-SA 4.0 |
| `art-doge` | `plates/processed/doge.jpg` | 1089×1200 | CC BY-SA 4.0 |
| `art-goblet` | `plates/processed/goblet.jpg` | 1600×653 | CC BY 4.0 |
| `art-chandelier` | `plates/processed/chandelier.jpg` | 1387×1200 | CC BY-SA 4.0 |
| `art-saintgobain` | `plates/processed/saintgobain.jpg` | 1379×850 | CC BY-SA 2.0 de |

## Rules

- No plate may show a cookie banner, browser chrome, site navigation or a URL bar.
- Document screenshots (`pl-seg-*`) are **not** used in any scene in this map. They stay in the manifest
  for evidence-crop reference only.
- Portrait plates mount by height (78–86% of 1080), not by width. Do not stretch or letterbox them.
- Reuse is deliberate: `hall-wide`, `hall-detail`, `hall-bw`, `patent`, `glassworks`, `canaletto`,
  `mirror-gilt` and `blowing-hands` each appear twice with a different crop and grade.
- Credit the source on screen only in the end card / description; no plate-credit text inside scenes.
