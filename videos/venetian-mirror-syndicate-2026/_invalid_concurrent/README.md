# Invalid concurrent output — do not reuse

These files came from a second session that built a fixed 18×18s board (324s) against a
520.989s narration, with a dark cosmic palette that violates the Amber Margins skin.

- All `01…18-*.html` scenes: wrong durations, wrong scene IDs, wrong palette, opacity pop-ins.
- `01-venice-harbor-LATE-1043.html`: written 2026-11-12 10:43, after the first quarantine.
  Old ID `s01-venice-harbor`, `data-duration="18.00"`, `#070A12` ground, "VENICE 1600",
  `from()` pop-ins. Does not match canonical `s01-gilded-tally` (18.993s, parchment `#F5EFEB`).
- `STORYBOARD.md`, `EVAL_LOG.md`, `generate_storyboard.mjs`, `timeline.beats.json`,
  `cues.json`, `snapshots/`: superseded by the S6 rebuild of 2026-11-12 10:52.

Never copy from this directory into `compositions/`.
