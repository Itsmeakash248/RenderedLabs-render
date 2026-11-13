# Local Fonts Assets

This directory contains local WOFF2 web fonts for offline rendering and consistent typography.

Brand roles are defined in [`brand/BRAND.md`](../brand/BRAND.md) §3: **Archivo Black** = display,
**Nunito / Outfit** = body, **Quicksand** = labels. JetBrains Mono, Share Tech, and Space
Grotesk are banned (enforced by `tools/brand-guard.mjs`).

## Fonts Included

### 1. Nunito — body role
- **Weights**: 400 (Regular), 700 (Bold), 800 (ExtraBold)
- **Files**:
  - `Nunito-Regular.woff2` (400)
  - `Nunito-Bold.woff2` (700)
  - `Nunito-ExtraBold.woff2` (800)

### 2. Quicksand — label role
- **Weights**: 500 (Medium), 600 (SemiBold), 700 (Bold)
- **Files**:
  - `Quicksand-Medium.woff2` (500)
  - `Quicksand-SemiBold.woff2` (600)
  - `Quicksand-Bold.woff2` (700)

### 3. Outfit — alternate body role (data-dense frames)
- **Weights**: 400 (Regular), 600 (SemiBold), 700 (Bold)
- **Files**:
  - `Outfit-Regular.woff2` (400)
  - `Outfit-SemiBold.woff2` (600)
  - `Outfit-Bold.woff2` (700)

### Archivo Black — display face

**Archivo Black** (`archivo-black-400-normal.woff2`, 400) is NOT shipped in this
directory — the former shared copy under the deleted component library is gone.
Each video project vendors the woff2 files it needs into its own `assets/fonts/`
(download Archivo Black 400 once from Google Fonts) and declares them with local
`@font-face` (`font-display: block`) for deterministic rendering. Several existing
projects already carry their own vendored copies under their local `assets/`.

## Usage in CSS

Import or link `fonts.css`:

```css
@import "./assets/fonts/fonts.css";

/* Example Usage */
h1, h2 {
  font-family: 'Archivo Black', sans-serif;
  font-weight: 400;
}

body, p {
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
}

.label, .tag, .stat-value {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
}
```
