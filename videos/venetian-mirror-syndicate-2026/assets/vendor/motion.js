// RenderedLabs — Closed-form spring library (allowlisted shared lib, NOT a generator).
// ----------------------------------------------------------------------------
// Ported from motion-reel-kit `engine/lib/motion.js` (MIT-style studio kit).
// Every function is a pure function of time (seconds): no integration, no state,
// so any frame can be painted in any order — deterministic under HyperFrames.
//
// ALLOWED USE (BRAND §11.13 compliant):
//   - Import ONLY in hand-authored compositions: `import { step, track, ... }`
//     or classic `<script src="../../assets/brand/lib/motion.js">` -> `window.RLMotion`.
//   - Drive GSAP timelines / per-frame `onUpdate` values with these springs.
//   - NEVER use a script to batch-write `compositions/*.html` — every scene stays
//     100% hand-authored by the owning builder subagent. This file generates nothing.
//
// PRESETS (SwiftUI-style response/damping):
//   - snappy  (0.22s / 0.8)  ~1.5% overshoot — buttons, pills, indicators, hits with SFX
//   - default (0.40s / 0.86) ~0.5% overshoot — cards, panels, containers, camera
//   - heavy   (0.50s / 1.0)  none (critical) — big type, logo lockups, data heroes
//   - playful (0.50s / 0.45) ~20% overshoot  — mascots ONLY, never UI or type
//
// RULES (from motion-reel-kit RULES.md, adapted to 2D/3D mandate; worlds strictly 2D):
//   - Enters use springs, never pure opacity fades or bouncy easing on UI.
//   - Multi-target values use track(): one spring per change, never restart a spring.
//   - Text inside a morphing box uses swapAlpha(): enters after morph starts,
//     leaves before the next morph (≤1 frame overlap, outgoing ≥95% gone).
//   - Visual hits that carry SFX lead the beat so they READ on it (see spHit lead
//     pattern in docs: lead = max(3 frames, half-travel time)).
//   - Seeded randomness only in compositions (mulberry32) — never Math.random
//     (enforced by brand-guard §11.5).
//
// Loads as a classic <script> (window.RLMotion + window.Motion alias) or via require().
(function (root, factory) {
  const M = factory();
  if (typeof module === 'object' && module.exports) module.exports = M;
  else { root.RLMotion = M; root.Motion = M; }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  // response: seconds for one undamped period (SwiftUI-style); damping: ratio.
  // Overshoot of a step = exp(-PI*z / sqrt(1-z^2)) for z < 1.
  const PRESETS = {
    snappy:  { response: 0.22, damping: 0.8 },   // ~1.5% overshoot · buttons, toggles, leading edges
    default: { response: 0.4,  damping: 0.86 },  // ~0.5% overshoot · cards, containers, camera
    heavy:   { response: 0.5,  damping: 1.0 },   // none (critical)  · big type, logo lockups
    playful: { response: 0.5,  damping: 0.45 },  // ~20% overshoot   · mascots only
  };

  function resolve(p) {
    if (p == null) return PRESETS.default;
    if (typeof p === 'string') {
      const r = PRESETS[p];
      if (!r) throw new Error(`motion: unknown preset "${p}"`);
      return r;
    }
    return p;
  }

  /** Unit step response of a spring released tau seconds ago. 0 for tau <= 0. */
  function step(tau, preset) {
    if (!(tau > 0)) return 0;
    const { response, damping: z } = resolve(preset);
    const w = (2 * Math.PI) / response;
    if (z < 1) {
      const wd = w * Math.sqrt(1 - z * z);
      return 1 - Math.exp(-z * w * tau) * (Math.cos(wd * tau) + ((z * w) / wd) * Math.sin(wd * tau));
    }
    if (z === 1) return 1 - Math.exp(-w * tau) * (1 + w * tau);
    const wd = w * Math.sqrt(z * z - 1);   // overdamped
    return 1 - Math.exp(-z * w * tau) * (Math.cosh(wd * tau) + ((z * w) / wd) * Math.sinh(wd * tau));
  }

  /** Seconds until the response stays within eps of its target for good. */
  const settleCache = new Map();
  function settle(preset, eps = 0.01) {
    const p = resolve(preset);
    const key = `${p.response}/${p.damping}/${eps}`;
    if (settleCache.has(key)) return settleCache.get(key);
    let last = 0;
    for (let tau = 0; tau < 20 * p.response; tau += 0.001) {
      if (Math.abs(1 - step(tau, p)) >= eps) last = tau;
    }
    settleCache.set(key, last);
    return last;
  }

  /** One spring from `from` to `to`, released at t0. */
  function spring(t, t0, from, to, preset) {
    return from + (to - from) * step(t - t0, preset);
  }

  /**
   * A value with several targets: the sum of one spring per change, each released at
   * its own time. Springs are never restarted, so a new target mid-flight keeps the
   * velocity of the ones still settling (superposition of a linear system).
   *
   * keys: [[t, value, preset?], ...] sorted by t. The first key is the initial value
   * (its time is ignored). preset per key overrides the default.
   */
  function track(t, keys, preset) {
    let v = keys[0][1];
    for (let i = 1; i < keys.length; i++) {
      const [ti, vi, pi] = keys[i];
      if (t <= ti) break;           // keys are sorted: nothing later has started
      v += (vi - keys[i - 1][1]) * step(t - ti, pi || preset);
    }
    return v;
  }

  /**
   * A bar/underline/selection moving between stops. Each move is split per edge: the
   * edge travelling in the direction of motion (leading) rides a stiffer spring than
   * the one behind it (trailing), so the indicator stretches mid-move and settles back.
   *
   * stops: [[t, start, end], ...] sorted by t; first stop is the initial state.
   * returns { start, end, size, center }
   */
  function indicator(t, stops, opts = {}) {
    const lead = opts.lead || 'snappy', trail = opts.trail || 'default';
    let s = stops[0][1], e = stops[0][2];
    for (let i = 1; i < stops.length; i++) {
      const [ti, si, ei] = stops[i];
      if (t <= ti) break;
      const ps = stops[i - 1][1], pe = stops[i - 1][2];
      const ds = si - ps, de = ei - pe, dc = ds + de;
      // leading edge = the front one in the direction of travel; pure grow/shrink: both lead
      const sLead = dc <= 0;
      const eLead = dc >= 0;
      s += ds * step(t - ti, sLead ? lead : trail);
      e += de * step(t - ti, eLead ? lead : trail);
    }
    return { start: s, end: e, size: e - s, center: (s + e) / 2 };
  }

  /**
   * Alpha for text living inside a morphing box. It enters `delay` after the morph
   * starting at tIn, and has fully left by tOut (when the next morph starts), so the
   * text is never visible while its container changes shape underneath it.
   */
  function swapAlpha(t, tIn, tOut = Infinity, opts = {}) {
    const preset = opts.preset || 'snappy';
    const delay = opts.delay == null ? 0.06 : opts.delay;
    const lead = opts.lead == null ? settle(preset, 0.005) : opts.lead;
    const a = step(t - (tIn + delay), preset) - step(t - (tOut - lead), preset);
    return Math.min(1, Math.max(0, a));
  }

  /**
   * Time inside a loop of length dur. t = dur (and anything within half a frame of it)
   * pins to 0, so the last frame of a rendered loop is the first frame.
   */
  function loopT(t, dur, fps) {
    let u = t % dur;
    if (u < 0) u += dur;
    const snap = fps ? 0.5 / fps : 1e-9;
    if (dur - u <= snap) u = 0;
    return u;
  }

  // ---------------------------------------------------------------- spHit lead
  // A masked word only becomes readable part-way through its spring, so a visual
  // released exactly ON an audio cue reads ~100ms LATE (measured: 3–6 frames).
  // Release the spring EARLY by the lead below; the audio stays on the grid.
  // (Ported from motion-reel-kit engine/core.js leadFor + spHit.)
  const halfCache = {};
  function halfTravel(preset) {
    const key = typeof preset === 'string' ? preset : JSON.stringify(preset);
    if (!(key in halfCache)) { let tau = 0; while (step(tau, preset) < 0.5 && tau < 2) tau += 0.001; halfCache[key] = tau; }
    return halfCache[key];
  }
  /** Seconds to release a spring early so it READS on the cue: max(3 frames, half-travel). */
  function leadFor(preset = 'snappy', fps = 60) {
    return Math.max(3 / fps, halfTravel(preset));
  }
  /** Release time for a visual that must read exactly at cueT (seconds). */
  function hitRelease(cueT, preset = 'snappy', fps = 60) {
    return cueT - leadFor(preset, fps);
  }

  // ---------------------------------------------------------- seeded noise
  // Deterministic randomness ONLY (brand-guard §11.5 bans Math.random).
  // (Ported from motion-reel-kit engine/core.js mulberry32 + noise1.)
  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  /** Smooth seeded 1D noise in [-1, 1] — drift, micro camera moves, living holds. */
  function noise1(seed) {
    const r = mulberry32(seed), v = Array.from({ length: 256 }, () => r() * 2 - 1);
    const lerp = (a, b, x) => a + (b - a) * x;
    return (x) => { const i = Math.floor(x), f = x - i, u = f * f * (3 - 2 * f); return lerp(v[i & 255], v[(i + 1) & 255], u); };
  }

  return { PRESETS, step, settle, spring, track, indicator, swapAlpha, loopT,
           halfTravel, leadFor, hitRelease, mulberry32, noise1 };
});
