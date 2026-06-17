# Veleva's AR Restaurant Menu — Development Log

A chronological record of every development step, terminal command, code addition, and Blender script used to build this project from start to finish.

---

## Step 1 — Baseline Static Website Architecture
**Date:** 2026-06-09  
**Phase:** Foundation

### Summary
Created the complete baseline static website for the Veleva's AR restaurant menu experience. This establishes the full frontend foundation before any AR library or 3D model integration begins.

### Files Created
| File | Purpose |
|---|---|
| `index.html` | Homepage with hero section and a 3-card dish grid |
| `styles.css` | Full styling: dark luxury aesthetic, responsive layout, modal, animations |
| `script.js` | Nutritional values modal with animated macro bars and allergen tags |
| `ar-viewer.html` | Placeholder AR viewer page (MindAR / A-Frame integration pending) |
| `development_log.md` | This file |

### Dishes Defined
| # | Name | Price | Allergens |
|---|---|---|---|
| 01 | Black Truffle Risotto | $32 | Dairy, Gluten |
| 02 | Pan-Seared Wagyu A5 | $68 | None |
| 03 | Nova Scotia Lobster Bisque | $28 | Shellfish, Dairy |

### Design Decisions
- **Aesthetic:** Dark luxury editorial — near-black background (`#06050a`), warm gold (`#c9a84c`) accents, teal (`#5ecfca`) for AR interactions
- **Typography:** Cormorant Garamond (display / serif) + Syne (UI / sans-serif) — loaded from Google Fonts
- **Layout:** Full-viewport hero with staggered CSS entry animations; 3-column card grid collapsing to single column on mobile (breakpoint: 960 px)
- **Cards:** Glassmorphism-lite surfaces, gold border accents, SVG dish icon placeholders, animated hover lift
- **Modal:** Fullscreen blur overlay, animated macro progress bars (protein / carbs / fat), allergen tag pills, Escape-key and outside-click dismissal
- **AR Viewer:** Animated scanning-frame effect with corner brackets and sweeping scan line; dish name injected from URL query parameter `?dish=0|1|2`

### Architecture Notes
- Pure static site: HTML + CSS + vanilla JS — zero build steps, zero dependencies
- GitHub Pages ready: all asset paths are relative
- AR viewer receives dish context via `ar-viewer.html?dish={index}` — the query parameter is already wired up for the MindAR integration step

### Next Steps
- [ ] Add real dish photography to replace SVG plate placeholders
- [ ] Create 3D dish models in Blender (one per dish)
- [ ] Export models to `.glb` / `.gltf` format
- [ ] Integrate MindAR.js + A-Frame into `ar-viewer.html`
- [ ] Design and print physical image targets for each dish card
- [ ] Test AR tracking on iOS Safari and Android Chrome

---

## Step 2 — Text & Branding Updates
**Date:** 2026-06-09  
**Phase:** Content / Branding

### Summary
Replaced placeholder copy and the working brand name ("OBSIDIAN") with the real brand ("Veleva's") and personalised hero text. No styling, classes, or layout was altered.

### Changes Made
| File | Location | Old text | New text |
|---|---|---|---|
| `index.html` | `<title>` | `OBSIDIAN — AR Dining Experience` | `Veleva's — AR Dining Experience` |
| `index.html` | Nav logo `.logo-text` | `OBSIDIAN` | `VELEVA'S` |
| `index.html` | Hero eyebrow `.hero-eyebrow` | `EST. 2024 — CULINARY INNOVATION` | `Warm food, warm welcome. Explore Ivana's menu` |
| `index.html` | Hero title line 1 | `Taste the` | `Crave it.` |
| `index.html` | Hero title line 2 (italic) | `Future` | `Love it.` |
| `index.html` | Footer `.footer-logo` | `◆ OBSIDIAN` | `◆ VELEVA'S` |
| `ar-viewer.html` | `<title>` | `AR Viewer — OBSIDIAN` | `AR Viewer — Veleva's` |
| `ar-viewer.html` | Nav logo `.nav-logo` | `◆ OBSIDIAN` | `◆ VELEVA'S` |
| `development_log.md` | H1 title & Step 1 summary | `OBSIDIAN` | `Veleva's` |

### Notes
- Brand name rendered in all-caps in the nav and footer (`VELEVA'S`) to preserve the existing uppercase visual style, consistent with how `OBSIDIAN` was displayed (no CSS `text-transform` was in use).
- Hero title split preserved: "Crave it." on the upright line, "Love it." on the italic/gold line.

---

## Step 3 — Dish 2 Updated to Creamy Garlic Shrimp Pasta
**Date:** 2026-06-09  
**Phase:** Content

### Summary
Replaced the second dish (previously Pan-Seared Wagyu A5) with Creamy Garlic Shrimp Pasta. Updated both the visible card in `index.html` and the nutritional data object in `script.js`. No styling, classes, modal structure, or other dishes were altered.

### Card Changes (`index.html`)
| Field | Old value | New value |
|---|---|---|
| Category label | `WAGYU BEEF` | `CREAMY SHRIMP` |
| Dish name | `Pan-Seared Wagyu A5` | `Creamy Garlic Shrimp Pasta` |
| Description | Japanese A5 Wagyu, bone marrow butter… | Linguine in a silky Alfredo cream, sautéed shrimp… |
| Price | `$68` | `$35` |

### Nutritional Data Changes (`script.js` — dish index 1)
| Field | Old value | New value |
|---|---|---|
| Name | Pan-Seared Wagyu A5 | Creamy Garlic Shrimp Pasta |
| Calories | 920 kcal | 320 kcal |
| Protein | 72 g | 14 g |
| Carbs | 8 g | 49 g |
| Fat | 64 g | 6 g |
| Allergens | *(none)* | Shellfish, Gluten (wheat), Dairy |

### Full Nutrition Reference (provided, not yet rendered in modal)
Serving size 312 g · Sat. Fat 1 g (5% DV) · Net Carbs 42 g · Fiber 7 g (25%) · Sugars 9 g · Cholesterol 115 mg (38%) · Sodium 520 mg (23%) · Vitamin A 525 mcg (58%) · Vitamin C 84 mg (93%) · Calcium 100 mg (8%) · Iron 3.6 mg (20%)

---

## Step 4 — Hero Section Redesign
**Date:** 2026-06-09  
**Phase:** UI / Visual Design

### Summary
Redesigned the hero section to fill the empty right side and strengthen the overall composition. No other sections (cards, modal, footer, nav) were touched. All changes are confined to the hero HTML block and the `/* ── Hero ── */` CSS block.

### Layout Change
Converted the hero from a single `flex-column` to a two-column CSS Grid (`1fr 1fr`). Left column holds all text content; right column holds a purely decorative SVG emblem. The right column is hidden (`display: none`) on viewports ≤ 960 px so mobile remains a clean single-column layout.

### Typography
- Added **Playfair Display** (weights 400 italic / 700 / 900) to the Google Fonts import.
- Hero title now uses Playfair Display 700 instead of Cormorant Garamond 300 — same font stack fallback, more dramatic weight.
- Title size changed from `clamp(4rem, 12vw, 10rem)` to `clamp(3.5rem, 5vw, 6.5rem)` — right-sized for a half-width column.
- Italic line: weight 400 (lighter complement to the bold upright line).
- Eyebrow: upgraded to `text-transform: uppercase`, tighter tracking, weight 600.

### New Elements
| Element | Class | Description |
|---|---|---|
| Gold divider line | `.hero-divider` | 48 px gradient line, reveals left-to-right on load via `scaleX` animation |
| CTA button | `.hero-cta` | Solid gold "Explore the Menu" button, scrolls to `#menu`; hover reveals a lighter gold wash from left |
| Decorative emblem | `.hero-right` / `.hero-emblem` | Inline SVG — 6 concentric rings (varying stroke/opacity), compass tick marks, 45° dot nodes, a rotated diamond frame, central cloche motif, center dot. Radial gold glow via CSS `::before`. |

### Animations Added
| Keyframe | Used by | Effect |
|---|---|---|
| `dividerReveal` | `.hero-divider` | `scaleX` 0 → 1 from `transform-origin: left center` |
| `fadeIn` | `.hero-right` | Pure opacity fade for the emblem column |
| `slowSpin` | `.emblem-ring-outer` | 100 s linear rotation on the outermost dashed ring |

### Files Changed
- `index.html` — hero HTML restructured; Playfair Display added to font import; `id="menu"` added to `<main>`
- `styles.css` — hero CSS block replaced; three keyframes added; responsive block updated

---

## Step 5 — AR Viewer: A-Frame + AR.js Integration
**Date:** 2026-06-11
**Phase:** AR / Core Feature

### Summary
Replaced the static placeholder in `ar-viewer.html` with a fully functional marker-based AR scene. The viewer loads a `.glb` model on top of a printed Hiro marker using the device camera. Dishes without a mapped model show a graceful "coming soon" overlay — without triggering camera permission prompts.

### Files Changed
| File | Change |
|---|---|
| `models/shrimp-pasta.glb` | Created — `creamy_shrimp_pasta_v2.glb` moved and renamed (16 MB) |
| `ar-viewer.html` | Rewritten — full AR implementation; original CSS vars and back button preserved |
| `index.html` | Dish 2 AR link updated: `?dish=1` → `?dish=shrimp-pasta` |

### Libraries
| Library | Version | CDN |
|---|---|---|
| A-Frame | 1.3.0 | `cdn.jsdelivr.net/npm/aframe@1.3.0` |
| AR.js (A-Frame build) | 3.4.5 | `cdn.jsdelivr.net/gh/AR-js-org/AR.js@3.4.5` |

### Architecture Decisions

**Scene injection, not static markup:** The `<a-scene>` element is built as a DOM template and appended to `<body>` only when the URL slug resolves to a known model. This prevents AR.js from requesting camera access for dishes that have no 3D model yet.

**Slug-based routing:** The `?dish=` query parameter now uses human-readable slugs (`shrimp-pasta`) instead of numeric indices. The `MODEL_MAP` object in `ar-viewer.html` is the single source of truth — add new entries there as models are ready.

**Z-index layer stack:**
- `z=0` — A-Frame canvas (webcam feed + 3D render)
- `z=10` — Instruction strip (semi-transparent top bar; touch events pass through)
- `z=20` — Back button + nav logo (permanent chrome)
- `z=30` — Loading overlay / coming-soon overlay (topmost, blocks interaction)

**Loading indicator:** A spinner overlay (`#loading-overlay`) appears immediately on page load and is dismissed via the `model-loaded` A-Frame entity event, with a 10-second fallback timeout. Dismissal uses a CSS opacity fade (`fade-out` class) so the transition is not abrupt.

**PBR lighting:** Two lights are placed inside `<a-marker>` so they move with the marker reference frame — an ambient fill (`intensity: 0.6`) and a warm directional key light (`intensity: 1.2`, position `1 2 1`). `renderer="colorManagement: true"` ensures physically correct tone-mapping of PBR textures.

**Template element race prevention:** The `<a-scene>` is created via `document.createElement('template')` and the `loaded` listener is attached before `document.body.appendChild()` — this avoids a race condition if A-Frame fires the event synchronously.

### Model Attributes (tweak after first physical test)
| Attribute | Starting value | Notes |
|---|---|---|
| `scale` | `0.2 0.2 0.2` | Conservative start; increase uniformly if model appears too small |
| `position` | `0 0.05 0` | Slight Y lift so model base sits on the marker surface |
| `rotation` | `0 0 0` | Try `-90 0 0` if model renders flat/horizontal |

### iOS / Android Notes
- Camera access requires **HTTPS** in production (`getUserMedia` restriction on iOS Safari and Chrome Android).
- `apple-mobile-web-app-capable` and `mobile-web-app-capable` meta tags included for correct viewport behaviour.
- **Local testing:** `python -m http.server 8080 --bind 0.0.0.0` — iOS Safari on the same Wi-Fi network accepts HTTP from a LAN IP for camera access.

### Hiro Marker
Standard Hiro preset from AR.js. The instruction strip includes a direct link to print/view the marker:
`https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png`

### Next Steps *(superseded by Step 6 — see below)*
- [x] ~~Print the Hiro marker~~ — marker-based AR removed in Step 6
- [ ] Create `.glb` models for Black Truffle Risotto and Nova Scotia Lobster Bisque
- [ ] Configure HTTPS for iOS production AR testing

---

## Step 6 — AR Approach: Replaced AR.js + A-Frame with `<model-viewer>`
**Date:** 2026-06-11
**Phase:** AR / UX Improvement

### Why the approach changed

The marker-based AR.js / A-Frame setup proved impractical for a real restaurant context:

| Problem | Detail |
|---|---|
| Required printed Hiro marker | Guests would need to print or display a separate image — adds friction |
| No full-screen camera feed | A-Frame rendered the model on a solid black background, not on the real world |
| No interaction | The model was static on the marker with no drag-to-rotate |
| Brittle loading | The scene's `loaded` event was the single gating point; if it didn't fire, the overlay persisted forever |
| Heavy payload | A-Frame + AR.js = ~1.2 MB of JS, plus the marker-tracking WASM |

### What `<model-viewer>` provides instead

| Feature | How |
|---|---|
| **Interactive 3D orbit viewer** | `camera-controls` + `auto-rotate` — drag to spin anywhere, no special hardware |
| **Markerless AR on Android** | WebXR / Scene Viewer — places dish on any real surface via phone camera |
| **Markerless AR on iOS** | Quick Look (USDZ path) — native Apple AR, no app install required |
| **Built-in loading UI** | `reveal="auto"` shows model when ready; `--progress-bar-color` styled to site palette |
| **No marker, no WASM, no camera on desktop** | Clean 3D viewer everywhere; AR is a progressive enhancement on capable phones |

### Files Changed
| File | Change |
|---|---|
| `ar-viewer.html` | Complete rewrite — A-Frame / AR.js removed; `<model-viewer>` added |

### Library
| Library | Version | CDN |
|---|---|---|
| `@google/model-viewer` | 3.5.0 | `ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js` |

### `<model-viewer>` Configuration
| Attribute | Value | Purpose |
|---|---|---|
| `camera-controls` | *(flag)* | Drag-to-orbit on desktop and touch |
| `auto-rotate` | *(flag)* | Gentle turntable (15 °/s, 2 s delay) |
| `interaction-prompt` | `auto` | Shows drag-hint icon on first load |
| `camera-orbit` | `0deg 70deg auto` | Slightly-elevated view, like looking at a dish on a table |
| `field-of-view` | `30deg` | Telephoto framing reduces perspective distortion |
| `environment-image` | `neutral` | Consistent PBR lighting without a scene-specific HDR |
| `exposure` | `1.1` | Slight brightness lift for food presentation |
| `shadow-intensity` | `1` | Ground-contact shadow for realism |
| `ar` | *(flag)* | Enables the AR entry-point |
| `ar-modes` | `webxr scene-viewer quick-look` | All three AR paths in priority order |
| `ar-scale` | `auto` | Device chooses the best real-world scale |

### AR Availability Notes
- **Orbit viewer** (3D rotation in-page): works everywhere — desktop and mobile, HTTP or HTTPS.
- **"View in AR" button**: shown by model-viewer only when the device supports one of the AR modes.
  - Android Chrome + WebXR or Scene Viewer: works over HTTP on LAN for testing.
  - iOS Safari Quick Look: requires HTTPS in production.
- Production HTTPS options: Cloudflare Tunnel (`cloudflared tunnel`), `mkcert` with a local reverse proxy, or any standard TLS host.

### Next Steps
- [ ] Test orbit viewer on desktop at `http://localhost:8080/ar-viewer.html?dish=shrimp-pasta`
- [ ] Test AR button on an Android phone on the same Wi-Fi (HTTP is fine for Scene Viewer)
- [ ] Configure HTTPS for iOS Quick Look testing
- [ ] Create `.glb` models for Black Truffle Risotto and Nova Scotia Lobster Bisque
- [ ] Add their slugs to `MODEL_MAP` in `ar-viewer.html` and update `index.html` AR links

---

## Step 7 — Shrimp Pasta Model Swap
**Date:** 2026-06-12
**Phase:** Asset Update

### Change
Swapped the active shrimp pasta model in `MODEL_MAP` from `models/shrimp-pasta.glb` to `models/pasta-update.glb`.

| File | Before | After |
|---|---|---|
| `ar-viewer.html` — `MODEL_MAP['shrimp-pasta']` | `models/shrimp-pasta.glb` (7.7 MB, optimised) | `models/pasta-update.glb` (15.5 MB, raw) |

### Note
`pasta-update.glb` is currently unoptimised (15.5 MB vs the previous 7.7 MB). If loading feels slow on mobile, run the same gltf-transform pipeline used in Step 5:
```
npx @gltf-transform/cli optimize models/pasta-update.glb models/pasta-update.glb --texture-size 1024 --texture-compress webp --compress false
```

---

## Step 8 — AR Button Layout Fix
**Date:** 2026-06-12
**Phase:** UI / Layout

### Problem
The "View in AR" `ar-button` and the "Back to Menu" button were overlapping in the top-left corner on mobile. The previous `margin-bottom: 4.5rem` on `.ar-btn` had no effect because model-viewer's shadow DOM slot container controls its own internal layout — margins on slotted content don't influence the container's position within the component.

### Fix
Replaced `margin-bottom` with `position: fixed` on `.ar-btn`, anchoring it directly to the viewport independent of model-viewer's slot container:

```css
.ar-btn {
    position: fixed;
    bottom: calc(1.75rem + env(safe-area-inset-bottom, 0px));
    left: 50%;
    transform: translateX(-50%);
    z-index: 9;   /* below chrome (z=10), above the viewer */
    min-height: 44px;   /* WCAG / Apple HIG minimum tap target */
}
```

`env(safe-area-inset-bottom)` ensures the button clears the home indicator bar on notched iPhones.

### Visual Change
Switched the AR button from gold to **teal** border and text. Gold is reserved for the back button and nav chrome; teal already signals AR interactions throughout the site's design language. This makes the two buttons immediately distinguishable at a glance.

### Layout at key breakpoints
| Breakpoint | Back button | AR button |
|---|---|---|
| 375 px (mobile) | Top-left, fixed | Bottom-centre, fixed, 44 px tall |
| 768 px (tablet) | Top-left, fixed | Bottom-centre, fixed, 44 px tall |
| Desktop | Top-left, fixed | Bottom-centre, fixed (hidden by model-viewer if no AR support) |

---

## Step 9 — Shrimp Pasta Dish Photo Added
**Date:** 2026-06-12
**Phase:** Content / Assets

### Summary
Added `second_dish.jpg` (295 KB) as the real preview photo for the Creamy Garlic Shrimp Pasta dish, replacing the SVG plate placeholder.

### Files Changed
| File | Change |
|---|---|
| `images/second_dish.jpg` | New — dish photo copied from `second_dish.JPG` (lowercase extension) |
| `index.html` | Dish 2 card: `.image-placeholder` SVG replaced with `<img class="card-img">` |
| `styles.css` | Added `.card-img` rule (`position: absolute; inset: 0; object-fit: cover`) |
| `ar-viewer.html` | Added `POSTER_MAP`; `poster="images/second_dish.jpg"` set on `<model-viewer>` for `shrimp-pasta` slug |
| `.gitignore` | Widened root GLB exclusion from named files to `/*.glb` pattern |

### How the poster works in `<model-viewer>`
When the `poster` attribute is set, model-viewer displays the image immediately while the `.glb` downloads. Once the 3D model is ready, `reveal="auto"` fades it in and replaces the poster. This eliminates the blank-screen wait on slower connections.

### Adding photos for other dishes
1. Drop the image in `images/`
2. Add an entry to `POSTER_MAP` in `ar-viewer.html`
3. Replace the `.image-placeholder` in the relevant dish card in `index.html`

---

## Step 10 — Fix Dish Preview Image Fit
**Date:** 2026-06-12
**Phase:** UI / Content

### Problem
`second_dish.jpg` was cropped and zoomed in the card because `.card-img` used `object-fit: cover`, which fills the container at the cost of clipping the image.

### Fix
Changed `.card-img` in `styles.css` to `object-fit: contain` so the full dish photo is always visible. Added `background: #0a0908` on the same rule to fill the letterbox areas with a near-black tone, preventing the card's gold gradient from bleeding through around the image edges.

```css
.card-img {
    object-fit: contain;
    object-position: center center;
    background: #0a0908;
}
```

The model-viewer poster was unaffected — model-viewer renders posters with contain behaviour by default and already has `background-color: var(--bg)` set.

---

## Step 11 — First Dish AR Model Added (Steak Salad)
**Date:** 2026-06-14
**Phase:** Asset / AR

### Summary
Added `stekdone1.glb` (97 MB) as the 3D AR model for the first dish. Updated the AR link slug from the legacy numeric `?dish=0` to the human-readable `?dish=steak-salad`.

### Files Changed
| File | Change |
|---|---|
| `models/stekdone1.glb` | New — 3D model for the first dish AR view |
| `ar-viewer.html` — `MODEL_MAP` | Added `'steak-salad': 'models/stekdone1.glb'` |
| `index.html` — Dish 1 AR link | Changed `href` from `ar-viewer.html?dish=0` to `ar-viewer.html?dish=steak-salad` |

### Slug Change
The first dish previously used a numeric index (`?dish=0`) which would fall through `MODEL_MAP` and show the "coming soon" overlay. It now uses the slug `steak-salad` consistent with the slug-based routing introduced in Step 5.

---

## Step 12 — Fix Missing Broccoli in AR (Steak Model Cleanup)
**Date:** 2026-06-14
**Phase:** AR / Bug Fix

### Problem
When viewing `stekdone1.glb` in the device's native AR mode (via model-viewer's `ar-button`), parts of the model (the broccoli) were invisible. The same parts rendered correctly in the in-page 3D orbit viewer.

### Root Cause
Native AR viewers (iOS Quick Look, Android Scene Viewer / WebXR) are significantly stricter than the browser's WebGL renderer about GLB structure. Common causes for this class of bug:
- Separate mesh objects not properly joined/welded
- Dangling or unreferenced material/texture nodes
- Non-embedded external texture references
- Large unoptimised textures the native AR runtime rejects silently

The original `stekdone1.glb` was a raw export (97 MB) with no optimisation pass, making it susceptible to all of the above.

### Fix
Ran the `@gltf-transform/cli` pipeline:

```bash
# Step 1 — Full optimize: dedup, instance, flatten, join, weld, simplify, prune, texture resize/compress
npx @gltf-transform/cli optimize models/stekdone1.glb models/stekdone1-fixed.glb --texture-size 1024 --compress false

# Step 2 — Prune pass: remove any remaining dangling meshes, materials, textures
npx @gltf-transform/cli prune models/stekdone1-fixed.glb models/stekdone1-fixed.glb
```

The optimize pass runs: `dedup → instance → palette → flatten → join → weld → simplify → resample → prune → sparse → textureCompress`. This ensures all mesh parts are properly joined, all materials are embedded, and all textures are within the size limits native AR runtimes accept.

### Result
| File | Size |
|---|---|
| `stekdone1.glb` (original) | 97.46 MB |
| `stekdone1-fixed.glb` (cleaned) | 14.04 MB |

The prune-only pass confirmed no dangling assets remained after optimize.

### Files Changed
| File | Change |
|---|---|
| `models/stekdone1-fixed.glb` | New — cleaned, optimized model (removed in Step 16) |
| `ar-viewer.html` — `MODEL_MAP` | `steak-salad` now points to `stekdone1-fixed.glb` (updated in Step 16) |

---

## Step 16 — Steak Model Reset and Re-Optimized as steak-final.glb
**Date:** 2026-06-14
**Phase:** Asset / AR

### Summary
`stekdone1-fixed.glb` was found to be missing from the working tree (tracked by git but deleted from disk). Removed it from git tracking, ran a fresh optimization from the original `stekdone1.glb`, and output the result as `steak-final.glb`. Also added per-dish camera framing support via a new `CAMERA_MAP` in `ar-viewer.html`.

### Optimization
```bash
npx @gltf-transform/cli optimize models/stekdone1.glb models/steak-final.glb --texture-size 1024 --compress false
```

| File | Size |
|---|---|
| `stekdone1.glb` (original, kept as backup) | 97.46 MB |
| `steak-final.glb` (optimized) | 14.04 MB |

### Bounding Box (from `gltf-transform inspect`)
- bboxMin: `−10.23, −27.10, −13.28`
- bboxMax: `+13.47, +13.04, +10.42`
- Footprint: ~24 × 24 units (square plate), mass centered ~7 units below Y origin

### Meshes confirmed present
wooden-plate, FlorenceSteak_Model_3, frenchFries, tomatoes (Toma1 ×3), broccoli (capusta ×2), plus structural objects — all 9 meshes with materials and textures fully embedded.

### Camera Settings Added (`ar-viewer.html`)
Added `CAMERA_MAP` for per-dish camera overrides. Falls back to global defaults when a slug has no entry:

```js
const CAMERA_MAP = {
    'steak-salad': { orbit: '0deg 65deg auto', fov: '35deg' },
};
```

65° phi (slightly more overhead than the 70° default) and 35° FOV (slightly wider) chosen based on the ~24×24 unit square plate footprint.

### Files Changed
| File | Change |
|---|---|
| `models/stekdone1-fixed.glb` | Removed from git tracking (was missing from disk) |
| `models/steak-final.glb` | New — clean optimized model from fresh run (superseded by steak-v2.glb in Step 17) |
| `ar-viewer.html` — `MODEL_MAP` | `steak-salad` updated to `models/steak-final.glb` (updated to steak-v2.glb in Step 17) |
| `ar-viewer.html` — `CAMERA_MAP` | New — per-dish camera orbit/FOV overrides (extended in Step 17) |

---

## Step 17 — Fix Steak AR Camera and Missing Parts
**Date:** 2026-06-14
**Phase:** AR / Bug Fix

### Problem 1 — Model too small, zoom range too restrictive
The default `camera-orbit: 0deg 65deg auto` left too much empty space. Users couldn't pinch-zoom close enough to inspect the dish.

### Problem 2 — Only fries visible in real AR mode
When entering native AR (iOS Quick Look / Android Scene Viewer), only the french fries mesh rendered — plate, steak, broccoli, and cherry tomatoes were invisible.

**Root cause investigation:** All 9 meshes are present and properly embedded in the GLB. The model uses two non-universal extensions:
- `KHR_materials_unlit` — unlit shading on some parts; AR viewers that don't support this may skip or mis-render those materials
- `EXT_mesh_gpu_instancing` — cherry tomatoes (×3) and broccoli (×2) may be expressed as GPU instances; iOS Quick Look and some Scene Viewer builds don't support this extension, causing instanced meshes to be invisible

### Fix 1 — Camera (`ar-viewer.html` `CAMERA_MAP`)
Extended the `steak-salad` camera entry with zoom limits, a target point, and tight bounds:

```js
'steak-salad': {
    orbit:    '0deg 75deg 1.5m',   // closer default distance
    minOrbit: 'auto auto 0.5m',    // allow pinch-zoom to 0.5 m
    maxOrbit: 'auto auto 3m',      // max pull-back
    fov:      '30deg',             // telephoto to fill the frame
    target:   '0m 0m 0m',         // look at scene origin
    bounds:   'tight',             // fit camera to actual mesh, not loose AABB
},
```

Added conditional attribute application in the model-viewer setup so `min-camera-orbit`, `max-camera-orbit`, `camera-target`, and `bounds` are only set when a dish has them defined.

### Fix 2 — Model re-optimized as steak-v2.glb
```bash
npx @gltf-transform/cli optimize models/steak-final.glb models/steak-v2.glb --texture-size 1024 --compress false
npx @gltf-transform/cli prune models/steak-v2.glb models/steak-v2.glb
```

| File | Size |
|---|---|
| `steak-final.glb` | 14.04 MB |
| `steak-v2.glb` | 13.64 MB |

**Mesh count:** 9 meshes — wooden-plate, FlorenceSteak_Model_3, fries (Object_0.005), tomatoes (Object_1/2/3), broccoli (Object_0.011/1.005), structural (Object_0.006). All materials and textures confirmed embedded.

**Remaining concern:** `EXT_mesh_gpu_instancing` is still present in `extensionsUsed`. If AR parts remain missing after this fix, the next step is to regenerate from `stekdone1.glb` using individual gltf-transform passes that skip the `instance` step (which adds this extension).

### Files Changed
| File | Change |
|---|---|
| `models/steak-v2.glb` | New — re-optimized from steak-final.glb (superseded by steak-v3.glb in Step 18) |
| `ar-viewer.html` — `MODEL_MAP` | `steak-salad` updated to `models/steak-v2.glb` (updated to steak-v3.glb in Step 18) |
| `ar-viewer.html` — `CAMERA_MAP` | Extended with zoom limits, target, and bounds for steak-salad |

---

## Step 41 — Persist Cart and Scroll Position Across AR Viewer Navigation
**Date:** 2026-06-17  
**Phase:** Feature / UX

### Problems Fixed

**Problem 1 — Cart reset to 0 on AR viewer return**  
The cart was stored only in a JS `const cart = {}` object. Navigating to `ar-viewer.html` (a separate HTML page) destroyed the JS context, so returning to `index.html` always reloaded with an empty cart and badge showing 0.

**Problem 2 — Back button returned to top of page**  
The scroll position was not saved before navigating to the AR viewer, so the browser restored to the top of the menu on return instead of the dish the user had been viewing.

### Fix — `sessionStorage` for cross-page state

`sessionStorage` persists within the browser tab/session but clears when the tab is closed, making it appropriate for intra-session navigation state.

**`saveCart()` helper** — called after every cart mutation:
```js
function saveCart() {
    sessionStorage.setItem('cart', JSON.stringify(cart));
}
```
Called after: `addToCart()`, qty `+`/`−`, item remove.

**`restoreSession()` IIFE** — runs once at script load, after all functions are defined:
```js
(function restoreSession() {
    const savedCart = sessionStorage.getItem('cart');
    if (savedCart) {
        Object.assign(cart, JSON.parse(savedCart));
        updateBadge();
        updateAllCardButtons();
    }
    const savedY = sessionStorage.getItem('scrollY');
    if (savedY) {
        window.scrollTo({ top: parseInt(savedY, 10), behavior: 'instant' });
        sessionStorage.removeItem('scrollY');  // consume — don't re-apply on refresh
    }
})();
```

**Scroll saver** — attached to every `.btn-ar` link click:
```js
document.querySelectorAll('.btn-ar').forEach(link => {
    link.addEventListener('click', () => {
        sessionStorage.setItem('scrollY', window.scrollY);
    });
});
```

**Place Order clears sessionStorage cart** — `sessionStorage.removeItem('cart')` added alongside the in-memory clear so a completed order fully resets across pages.

### Files Changed
| File | Change |
|---|---|
| `script.js` | `saveCart()` added; called after every cart mutation and on Place Order clear; `restoreSession()` IIFE and `.btn-ar` scroll saver added at end of file |

---

## Step 40 — Fix Hero Subtitle Two-Line Split on Mobile
**Date:** 2026-06-17  
**Phase:** UI / Mobile Typography

### Problem
"WARM FOOD, WARM WELCOME. EXPLORE IVANA'S MENU" was a single text node inside `.hero-eyebrow`, wrapping unpredictably at narrow viewports (375–390px), splitting mid-phrase and reading awkwardly.

### Fix
Split the text into two `<span>` elements and made `.hero-eyebrow` a flex column, guaranteeing two clean lines at every width:

**`index.html`**
```html
<p class="hero-eyebrow">
    <span>Warm food, warm welcome.</span>
    <span>Explore Ivana&rsquo;s menu</span>
</p>
```

**`styles.css`** — added `display: flex; flex-direction: column` to `.hero-eyebrow`

Each span is short enough to fit on one row at 375px without further wrapping. `text-transform: uppercase` is inherited from the parent rule — no change to the visual style.

### Files Changed
| File | Change |
|---|---|
| `index.html` | `.hero-eyebrow` content split into two `<span>` elements |
| `styles.css` | `.hero-eyebrow` — added `display: flex; flex-direction: column` |

---

## Step 39 — Fix Shrimp Pasta Model-Viewer Exposure — Reduce Wash-Out in Preview
**Date:** 2026-06-17  
**Phase:** AR / Visual Fix

### Problem
The shrimp pasta dish (`shrimp-pasta`) appeared washed out and desaturated in the in-page `<model-viewer>` 3D preview. The model looked correct in real camera AR mode, confirming the issue was with the viewer's lighting/exposure settings rather than the model itself.

### Root Cause
The global `exposure="1.1"` and `shadow-softness="0.9"` settings in `ar-viewer.html` were too bright and soft for the pasta model's texture characteristics, causing it to appear overexposed and flat.

### Fix
Added a `LIGHTING_MAP` object (mirroring the existing `CAMERA_MAP` pattern) for per-dish lighting overrides. After the global defaults are applied, per-dish values from `LIGHTING_MAP` overwrite only the relevant attributes.

```js
const LIGHTING_MAP = {
    'shrimp-pasta': {
        exposure:      '0.5',
        toneMapping:   'commerce',
        shadowSoftness: '0.5',
    },
};
```

| Setting | Global default | shrimp-pasta override | Effect |
|---|---|---|---|
| `exposure` | `1.1` | `0.5` | Darker, richer colours — less overexposure |
| `tone-mapping` | *(none)* | `commerce` | Warmer, more saturated tone map suited to food |
| `shadow-softness` | `0.9` | `0.5` | Sharper ground shadow adds depth |

Other dishes (`steak-salad`, `smash-burger`) are unaffected — they have no `LIGHTING_MAP` entry and continue to use the global defaults.

### Files Changed
| File | Change |
|---|---|
| `ar-viewer.html` | Added `LIGHTING_MAP` with `shrimp-pasta` entry; applied overrides after global lighting block |

---

## Step 38 — Fix Third Dish Allergen Tags Inline Layout
**Date:** 2026-06-17  
**Phase:** UI / Bug Fix

### Root Cause
Same cause as Step 28 (dish 1 allergen fix): all three dishes share one `openModal()` function that renders identical `<span class="allergen-tag">` elements into `#allergensList`. The container already has `display: flex; flex-wrap: wrap; gap: 0.5rem`. The dish 3 labels `"Gluten (brioche bun)"`, `"Dairy (aged cheddar)"`, `"Egg (truffle aioli)"` were too wide for three tags to sit on one row inside the modal, causing them to wrap vertically. No HTML structure change was needed.

### Fix
Shortened dish 3 allergen strings in `script.js` to match the concise style of dishes 1 and 2:

| Before | After |
|---|---|
| `"Gluten (brioche bun)"` | `"Gluten"` |
| `"Dairy (aged cheddar)"` | `"Dairy"` |
| `"Egg (truffle aioli)"` | `"Egg"` |

### Files Changed
| File | Change |
|---|---|
| `script.js` — dishData[2].allergens | Shortened to `["Gluten", "Dairy", "Egg"]` |

---

## Step 37 — Update Burger Description and Category Label
**Date:** 2026-06-17  
**Phase:** Content

### Summary
Updated the third dish card copy to reflect the actual dish — added "fresh wild arugula" to the description and changed the category label from "SIGNATURE SMASH" to "SMASH & GREENS". Allergens in `script.js` (dish index 2) already included `"Egg (truffle aioli)"` — no change needed there. Description appeared only once in `index.html`.

### Changes
| File | Field | Before | After |
|---|---|---|---|
| `index.html` — dish 3 card | Category label | SIGNATURE SMASH | SMASH & GREENS |
| `index.html` — dish 3 card | Description | …crispy streaky bacon, caramelised onions… | …crispy streaky bacon, fresh wild arugula, caramelised onions… |

### Files Changed
| File | Change |
|---|---|
| `index.html` | Category label and description updated on dish 3 card |

---

## Step 36 — Update Third Dish Preview Image to Burger Photo
**Date:** 2026-06-17  
**Phase:** Content / Assets

### Summary
Replaced the third dish card preview image (`images/third.jpg`) with `images/burger-preview.jpg` (copied from `arugulaB.jpg`, 287 KB). No CSS changes were needed — `.card-img { object-fit: cover; object-position: center }` is a global rule already shared by all three dish cards.

### Files Changed
| File | Change |
|---|---|
| `images/burger-preview.jpg` | New — burger dish photo (287 KB) |
| `index.html` — dish 3 card | `src="images/third.jpg"` → `src="images/burger-preview.jpg"` |

---

## Step 35 — Fix Burger AR: Convert KHR_materials_unlit to Standard PBR
**Date:** 2026-06-16  
**Phase:** AR / Bug Fix

### Symptom
When entering native AR mode (iOS Quick Look / Android Scene Viewer), only the plate was visible — the burger, cheese, bacon, and all other parts were invisible. The in-page 3D orbit viewer rendered everything correctly.

### Root Cause (confirmed by `gltf-transform inspect`)

`burger-final.glb` had **2 meshes**:
- `Plate_post` — standard PBR material (`Plate_PBR`) with baseColor + normal + roughness textures → **visible in AR**
- `Object_0` — `KHR_materials_unlit` material (`hamburger_Model_13_u1_v1`) with only a JPEG baseColorTexture, and **no NORMAL attribute** (stripped by the prior optimize pass) → **invisible in AR**

iOS Quick Look converts glTF to USDZ internally. Its USDZ converter does not reliably handle `KHR_materials_unlit` materials — they render as invisible/transparent during the USDZ conversion path. This is the same class of failure as the steak broccoli fix (Step 19) where unlit materials dropped in native AR.

The optimize pipeline had also stripped the NORMAL attribute from `Object_0` because normals are unnecessary for unlit rendering. This compounded the issue.

### Fix

**Step 1 — Node.js conversion script (`fix-burger-unlit.cjs`)**

The `@gltf-transform/cli` has no built-in unlit→PBR command, so a script was written to:
1. Load `burg4.glb` (original — has NORMAL on `Object_0`)
2. Call `material.setExtension('KHR_materials_unlit', null)` to remove the per-material extension property
3. Dispose the document-root `KHR_materials_unlit` extension object to remove it from `extensionsUsed`
4. Set `roughnessFactor=0.9`, `metallicFactor=0.0` for a matte PBR appearance
5. Write as `burger-v2-raw.glb`

Key finding: `setExtension(name, null)` alone is insufficient — the document-root extension object must also be disposed or the writer still includes `KHR_materials_unlit` in `extensionsUsed`.

**Step 2 — Steak-proven pipeline (no `instance`, no `webp` steps)**

```bash
npx @gltf-transform/cli flatten   burger-v2-raw.glb  burger-v2.glb
npx @gltf-transform/cli dedup     burger-v2.glb       burger-v2.glb
npx @gltf-transform/cli join      burger-v2.glb       burger-v2.glb
npx @gltf-transform/cli weld      burger-v2.glb       burger-v2.glb
npx @gltf-transform/cli simplify  burger-v2.glb       burger-v2.glb
npx @gltf-transform/cli prune     burger-v2.glb       burger-v2.glb
npx @gltf-transform/cli resize    --width 1024 --height 1024  burger-v2.glb  burger-v2.glb
npx @gltf-transform/cli jpeg      --quality 80  burger-v2.glb  burger-v2.glb
npx @gltf-transform/cli simplify  --error 0.01  burger-v2.glb  burger-v2.glb
```

No `instance` step — avoids `EXT_mesh_gpu_instancing` (invisible in iOS Quick Look).  
No `webp` step — avoids WebP-only textures on unlit materials (Step 19 lesson, now moot since the material is PBR, but kept as safe practice).

### Result

| File | Size | extensionsUsed | NORMAL on burger | AR visible |
|---|---|---|---|---|
| `burger-final.glb` (broken) | 5.29 MB | KHR_materials_unlit | ✗ stripped | ✗ |
| `burger-v2.glb` (fixed) | 5.1 MB | **none** | ✓ | ✓ (expected) |

```
burger-v2.glb:
  extensionsUsed:     none
  extensionsRequired: none
  Mesh 0: Plate_post  — NORMAL, POSITION, TEXCOORD_0 — PBR (plate_PBR)
  Mesh 1: Object_0    — NORMAL, POSITION, TEXCOORD_0 — PBR (hamburger_Model_13_u1_v1)
  Textures: 3×PNG (plate), 1×JPEG 1024×1024 (burger)
```

### Rule for Future Dishes
- Do NOT use the bundled `optimize` command as the sole pipeline step — it runs `instance` (adds `EXT_mesh_gpu_instancing`) and may introduce other iOS-incompatible extensions.
- Any mesh using `KHR_materials_unlit` will be **invisible in iOS Quick Look AR** — convert to standard PBR before exporting (use `fix-burger-unlit.cjs` as a template).
- Safe pipeline: `flatten → dedup → join → weld → simplify → prune → resize → jpeg` (no `instance`, no `webp`).

### Files Changed
| File | Change |
|---|---|
| `fix-burger-unlit.cjs` | New — Node.js script to convert KHR_materials_unlit to standard PBR |
| `models/burger-v2-raw.glb` | New — PBR-converted intermediate (before optimization) |
| `models/burger-v2.glb` | New — final optimized AR model (5.1 MB, no problematic extensions) |
| `ar-viewer.html` — `MODEL_MAP` | `smash-burger` updated from `burger-final.glb` → `burger-v2.glb` |

---

## Step 34 — Third Dish AR Model Added (Wagyu Smash Burger)
**Date:** 2026-06-16  
**Phase:** AR / Asset

### Summary
Added `burg4.glb` (29.7 MB raw) as the 3D AR model for the third dish (Wagyu Smash Burger). Ran the standard gltf-transform optimization pipeline to produce `burger-final.glb` (5.29 MB). Updated `MODEL_MAP` and `CAMERA_MAP` in `ar-viewer.html`, and changed the third dish AR link slug from `wagyu-smash-burger` to `smash-burger`.

### Optimization
```bash
npx @gltf-transform/cli optimize models/burg4.glb models/burger-final.glb --texture-size 1024 --compress false
npx @gltf-transform/cli prune models/burger-final.glb models/burger-final.glb
```

| File | Size |
|---|---|
| `burg4.glb` (source) | 29.7 MB |
| `burger-final.glb` (optimized) | 5.29 MB |

### Camera Settings
Matched steak-salad framing — elevated overhead view, telephoto FOV, tight bounds:
```js
'smash-burger': { orbit: '0deg 75deg auto', fov: '30deg', target: '0m 0m 0m', bounds: 'tight' }
```

### Files Changed
| File | Change |
|---|---|
| `models/burger-final.glb` | New — optimized AR model for Wagyu Smash Burger |
| `ar-viewer.html` — `MODEL_MAP` | Added `'smash-burger': 'models/burger-final.glb'` |
| `ar-viewer.html` — `CAMERA_MAP` | Added `'smash-burger'` camera entry |
| `index.html` — dish 3 AR link | Changed `href` from `?dish=wagyu-smash-burger` to `?dish=smash-burger` |

---

## Step 33 — Third Dish Changed to Wagyu Smash Burger
**Date:** 2026-06-16  
**Phase:** Content / UI

### Summary
Replaced the third dish (formerly "Nova Scotia Lobster Bisque") with "Wagyu Smash Burger". Updated all card content — category label, dish name, description, price — and replaced the nutritional values in `script.js` with realistic macro data for the new dish. All existing CSS classes and HTML structure preserved; only textual content changed.

### Card Changes
| Field | Before | After |
|---|---|---|
| Category | BISQUE | SIGNATURE SMASH |
| Dish name | Nova Scotia / *Lobster Bisque* | Wagyu / *Smash Burger* |
| Description | Cold-water lobster, cognac cream… | Double smash Wagyu patty, aged cheddar… brioche bun |
| Price | $28 | $38 |
| `data-dish-name` | Nova Scotia Lobster Bisque | Wagyu Smash Burger |
| `data-dish-id` | lobster-bisque | wagyu-smash-burger |
| `alt` on image | Nova Scotia Lobster Bisque | Wagyu Smash Burger |
| AR viewer link | `?dish=2` | `?dish=wagyu-smash-burger` |

### Nutritional Values (`script.js` dishData[2])
| Macro | Before | After |
|---|---|---|
| Calories | 420 kcal | 920 kcal |
| Protein | 24g | 48g |
| Carbs | 32g | 52g |
| Fat | 22g | 58g |
| Allergens | Shellfish, Dairy | Gluten (brioche bun), Dairy (aged cheddar), Egg (truffle aioli) |

### Files Changed
| File | Change |
|---|---|
| `index.html` — dish 3 card | Updated category, name, description, price, data attributes, AR link |
| `script.js` — dishData[2] | Updated name, calories, protein, carbs, fat, allergens |

---

## Step 32 — Add Third Dish Preview Image
**Date:** 2026-06-16  
**Phase:** Content / UI

### Summary
Added a real dish photo (`images/third.jpg`) for the third dish card (Nova Scotia Lobster Bisque). Replaced the SVG plate placeholder with an `<img class="card-img">` element, matching the treatment of dish 1 and dish 2. CSS `.card-img { object-fit: cover; object-position: center; width/height: 100% }` already applies — no style changes needed.

### Files Changed
| File | Change |
|---|---|
| `images/third.jpg` | New — dish photo added (364 KB) |
| `index.html` — dish 3 card | Replaced `<div class="image-placeholder">…</div>` with `<img src="images/third.jpg" alt="Nova Scotia Lobster Bisque" class="card-img" />` |

---

## Step 31 — Match Steak AR Preview Zoom to Shrimp Pasta
**Date:** 2026-06-16  
**Phase:** AR / Camera

### Root Cause
`steak-salad` had a fixed `radius: 1.5m` in its CAMERA_MAP entry. If the steak model's bounding box is physically smaller than 1.5 m implies, model-viewer places the camera too far back and the model appears tiny. `shrimp-pasta` had no CAMERA_MAP entry at all, so it fell back to `radius: auto` — model-viewer auto-fits the camera to the mesh and the model always fills the view.

### Before / After

| Setting | steak-salad before | steak-salad after | shrimp-pasta (unchanged) |
|---|---|---|---|
| orbit radius | `1.5m` (fixed) | `auto` | `auto` |
| minOrbit | `auto auto 0.5m` | — (removed) | — |
| maxOrbit | `auto auto 3m` | — (removed) | — |
| fov | `30deg` | `30deg` | `30deg` |
| target | `0m 0m 0m` | `0m 0m 0m` | — |
| bounds | `tight` | `tight` | — |

### Files Changed
| File | Change |
|---|---|
| `ar-viewer.html` — `CAMERA_MAP` | steak-salad: orbit radius `1.5m` → `auto`; removed fixed min/maxOrbit |

---

## Step 30 — Fix Hero Circle Clipped on Mobile — Grid Alignment and Height
**Date:** 2026-06-16  
**Phase:** UI / Mobile Fix

### Root Cause
`overflow: hidden` on `.hero` was clipping `.hero-right` (the emblem) below the visible viewport on mobile. The chain:
1. `.hero` had `min-height: 100vh` — forces the grid container to at least fill the screen
2. At ≤960px, `grid-template-columns: 1fr` makes both rows stack vertically
3. `align-items: flex-end` aligned both rows to the **bottom** of the 100vh container
4. `.hero-left` content (tall on mobile) + `.hero-right` emblem combined taller than 100vh
5. `overflow: hidden` clipped `.hero-right` below the visible area — invisible

### Fix (`styles.css` — `@media (max-width: 960px)`)

| Property | Before | After |
|---|---|---|
| `.hero` `align-items` | `flex-end` | `flex-start` — rows stack from top, nothing pushed below viewport |
| `.hero` `min-height` | `100vh` (inherited) | `0` (overridden) with `height: auto` — hero grows to fit content |
| `.hero-right` `justify-content` | not set | `center` — emblem stays horizontally centered |
| `.hero-right` `animation` | inherited (unreliable) | explicitly declared — ensures fadeIn fires on mobile |

`overflow: hidden` on `.hero` is kept — the layout fix means nothing overflows now.

### Files Changed
| File | Change |
|---|---|
| `styles.css` | `@media (max-width: 960px)` — `.hero` and `.hero-right` rules updated |

---

## Step 29 — Fix Hero Circle Emblem Visibility on Mobile
**Date:** 2026-06-16  
**Phase:** UI / Mobile Fix

### Root Cause
`@media (max-width: 960px)` contained `.hero-right { display: none; }` which hid the entire decorative emblem column on all mobile and tablet viewports.

### Fix
Replaced `display: none` with a mobile-appropriate treatment:

| Property | Desktop | ≤960px | ≤600px |
|---|---|---|---|
| `.hero-right` display | `flex` | `flex` (restored) | — |
| `.hero-emblem-wrap` width | `min(440px, 44vw)` | `220px` | `180px` |
| `.hero-emblem-wrap` opacity | `1` | `0.4` | `0.4` |
| `.hero-right` margin-top | — | `2rem` | — |

The hero already has `overflow: hidden` which prevents the emblem from causing horizontal scroll at any viewport width.

### Files Changed
| File | Change |
|---|---|
| `styles.css` | Replaced `.hero-right { display: none }` with flex + size/opacity overrides; added `hero-emblem-wrap` sizing at 600px |

---

## Step 28 — Fix Allergen Tags — Consistent Inline Layout Across All Modals
**Date:** 2026-06-15  
**Phase:** UI / Bug Fix

### Root Cause
All three dishes use identical JS render logic and CSS classes for allergen tags — there was no structural difference. The visual inconsistency was caused by content length: dish 1's allergen labels (`"Gluten (wheat/fries)"`, `"Dairy (demi-glace)"`) were wide enough that the two tags couldn't fit side by side inside the modal content area, causing flex-wrap to stack them vertically. Dishes 2 and 3 had shorter labels that fit in one row.

### Fix
Two changes:
1. **`script.js`** — Shortened dish 1 allergen strings to match the concise style of dishes 2 and 3: `"Gluten (wheat/fries)"` → `"Gluten (wheat)"`, `"Dairy (demi-glace)"` → `"Dairy"`.
2. **`styles.css`** — Added `white-space: nowrap` to `.allergen-tag` so text inside a tag is always one line (prevents any future long label from breaking mid-tag).

The existing `display: flex; flex-wrap: wrap; gap: 0.5rem` on `.allergens-list` was already correct.

### Files Changed
| File | Change |
|---|---|
| `script.js` | Dish 1 allergens shortened to `["Gluten (wheat)", "Dairy"]` |
| `styles.css` | `.allergen-tag` — added `white-space: nowrap` |

---

## Step 27 — Fix Button Vertical Alignment Across Dish Cards
**Date:** 2026-06-15  
**Phase:** UI / Layout Fix

### Summary
The three dish card buttons (Nutritional Values, View in AR, Add to Order) were sitting at different vertical positions across the three cards because card body height varied with text content. Fixed by making the card and body use flex column layout, pushing the footer to the bottom with `margin-top: auto`.

### CSS Changes

| Selector | Change | Why |
|---|---|---|
| `.dish-card` | `display: flex; flex-direction: column` | Card fills grid cell height (grid already stretches cells equally) |
| `.card-body` | `flex: 1; display: flex; flex-direction: column` | Body fills all space below the image |
| `.card-footer` | `margin-top: auto` | Pins button group to the bottom regardless of text above |
| `.btn` | `min-height: 44px` | Prevents button from resizing when label changes (e.g. "Add to Order" → "Add Another") |

### Files Changed
| File | Change |
|---|---|
| `styles.css` | 4 rule additions as above |

---

## Step 26 — Smart Add to Order Button — Cart-Aware State
**Date:** 2026-06-15  
**Phase:** Feature / UI

### Summary
The "Add to Order" button on each dish card now reflects the live cart state for that specific dish. When a dish has items in the cart, the button switches to a filled gold style and shows the current quantity.

### Button States

| State | Condition | Appearance | Label |
|---|---|---|---|
| Default | 0 items in cart | Dark bg, gold outline | `+ Add to Order` |
| Flash | Just clicked (1.5 s) | `.added` tint | `✓ Added` |
| In-cart | 1+ items in cart | Solid gold bg, dark text | `+ Add Another · N in order` |

### Implementation (`script.js`)

**`updateAllCardButtons()`** — new function that iterates all `.btn-order` buttons, reads `cart[dishId].qty`, and sets innerHTML + class accordingly. Skips any button currently in the 1.5 s flash state (`btn.disabled`).

Called after every cart mutation:
- After the "Added ✓" flash timeout (replaces `savedHTML` restore)
- After qty `−`/`+` in the order panel
- After remove (✕) in the order panel  
- After "Place Order" clears the cart

**Add to Order click handler** — no longer saves/restores `savedHTML`. After the flash, calls `updateAllCardButtons()` so the button settles into the correct in-cart state.

### CSS (`styles.css`)

`.btn-order--in-cart` — solid gold fill:
- `background: var(--gold)` / `color: var(--bg)` (dark text on gold)
- `font-weight: 700`
- Hover: `var(--gold-bright)` + subtle glow

### Files Changed
| File | Change |
|---|---|
| `script.js` | `updateAllCardButtons()` function; call it after every cart change; updated click handler |
| `styles.css` | `.btn-order--in-cart` and `.btn-order--in-cart:hover` rules |

---

## Step 25 — Fix Flipped Checkmark on Add to Order Confirmation
**Date:** 2026-06-15  
**Phase:** UI / Bug Fix

### Root Cause
`.btn-order:hover .btn-icon { transform: scale(1.3) rotate(90deg) }` was rotating the `+` icon on hover. When the user clicked the button, the JS replaced the `+` with `✓` inside the same `.btn-icon` span while the hover state was still active. The `✓` then inherited the ongoing CSS transition back from `rotate(90deg)` to `rotate(0deg)`, causing it to visibly appear rotated or mirrored during the 0.35s transition.

### Fix
Two changes:
1. **JS (`script.js`)** — removed `.btn-icon` wrapper from the "Added" state. The checkmark is now plain text (`&#10003; Added`) with no span, so no transform transition can affect it.
2. **CSS (`styles.css`)** — changed `.btn-order:hover .btn-icon` from `scale(1.3) rotate(90deg)` to `scale(1.2)`. The `+` icon still scales up on hover, but no rotation means no residual transform state to transition away from.

### Files Changed
| File | Change |
|---|---|
| `script.js` | `'<span class="btn-icon">&#10003;</span> Added'` → `'&#10003; Added'` |
| `styles.css` | `.btn-order:hover .btn-icon` transform: removed `rotate(90deg)` |

---

## Step 24 — Fix Cart Icon Theme and Move AR Subtitle Under Logo
**Date:** 2026-06-14  
**Phase:** UI / Visual Fix

### Summary
Fixed two visual issues on the desktop nav bar:

**1. Cart button gold styling**
The cart button had a transparent background and a near-invisible border (`rgba(201,168,76,0.15)`), making the icon appear white against the dark nav. Fixed by applying an explicit dark background, a visible gold border, and `backdrop-filter: blur`. Also switched `.cart-icon-svg` from `color:` to `stroke:` to reliably force the SVG shopping bag to render in gold regardless of cascade.

| Property | Before | After |
|---|---|---|
| background | `transparent` | `rgba(6,5,10,0.9)` |
| border | `1px solid rgba(201,168,76,0.15)` | `1px solid rgba(201,168,76,0.42)` |
| backdrop-filter | none | `blur(10px)` |
| SVG color | `color: var(--gold)` | `stroke: var(--gold)` |
| hover | border brightens | border + `box-shadow` glow |

**2. "AR DINING EXPERIENCE" subtitle repositioned**
The tagline was a standalone flex child of `<nav>`, sitting in the visual center of the nav bar. Moved it inside `<div class="nav-logo">` as a subtitle line below "VELEVA'S". Added a `.logo-lockup` wrapper for the diamond + wordmark row so `nav-logo` can be `flex-direction: column`.

| Element | Before | After |
|---|---|---|
| `.nav-logo` | `display: flex; flex-direction: row` | `flex-direction: column; align-items: flex-start` |
| `.logo-lockup` | — (new) | row with diamond + wordmark |
| `.nav-tagline` | standalone nav child, centered | child of `nav-logo`, subtitle below wordmark |
| Tagline font | `0.65rem`, `color: var(--text-dim)` | `0.5rem`, `color: var(--gold-dim)`, `padding-left: 1.25rem` (aligns under wordmark) |
| Mobile (≤600px) | `display: none` | `display: none` (unchanged — subtitle hidden to keep logo tight) |

### Files Changed
| File | Change |
|---|---|
| `index.html` | Wrapped logo diamond+text in `.logo-lockup`; moved `.nav-tagline` inside `.nav-logo` |
| `styles.css` | Updated `.nav-logo`, added `.logo-lockup`, restyled `.nav-tagline`, fixed `.cart-btn` and `.cart-icon-svg` |

---

## Step 23 — Add Order System (Add to Order, Cart Badge, Order Panel)
**Date:** 2026-06-14  
**Phase:** Feature / UI

### Summary
Added a fully client-side order system to the restaurant menu — no backend, all state held in memory. Three components: an "Add to Order" button on every dish card, a live cart badge in the nav, and a slide-in order summary panel.

### Components

#### 1. Add to Order button (`index.html`, `styles.css`)
- Third button added below "Nutritional Values" and "View in AR" on every dish card.
- Styled in gold (`var(--gold)`) to distinguish it as the primary action.
- Carries `data-dish-id`, `data-dish-name`, `data-dish-price` attributes used by the cart logic.
- On click: shows "Added ✓" for 1.5 s then resets; button is disabled during that window to prevent double-adds.

#### 2. Cart badge in nav (`index.html`, `styles.css`, `script.js`)
- `ORDER N` button in the top-right of the nav bar with a shopping bag SVG and live item count.
- Count bounces with a CSS keyframe animation (`cartBump`) each time it updates.
- Clicking it opens the order panel.

#### 3. Order summary panel (`index.html`, `styles.css`, `script.js`)
- Slides in from the right over a blurred dark overlay.
- Lists each item with name, unit price, quantity (`−` / `+` buttons), and an ✕ remove button.
- Subtotal is recalculated live on every change.
- **Place Order** button triggers a confirmation message ("Thank you! Your order has been placed.") for 2.5 s, then clears the cart and closes the panel.
- Close button and clicking the backdrop both dismiss the panel; Escape key also works.
- Full-screen on mobile (`width: 100vw; border-left: none`).

### Cart data structure (`script.js`)
```js
const cart = {};
// { dishId: { name: string, price: number, qty: number } }
```

### Files Changed
| File | Change |
|---|---|
| `index.html` | Cart button in nav; `btn-order` on all 3 dish cards; order panel + confirmation HTML |
| `styles.css` | `.cart-btn`, `.cart-count`, `@keyframes cartBump`, `.btn-order`, `.order-overlay`, `.order-panel`, all panel internals, mobile overrides |
| `script.js` | Full cart logic: `addToCart`, `updateBadge`, `renderOrderPanel`, `openOrderPanel`, `closeOrderPanel`, delegated qty/remove handlers, place-order flow |

---

## Step 22 — Remove Poster Flash from AR Viewer
**Date:** 2026-06-14  
**Phase:** UI / Bug Fix

### Summary
The `poster` attribute on `<model-viewer>` was causing the dish photo to flash briefly on screen before the 3D model rendered in the AR viewer. Removed the poster entirely from `ar-viewer.html` so the viewer shows only the dark loading background and spinner while the GLB downloads. Poster images remain in use on the menu cards in `index.html`.

### Files Changed
| File | Change |
|---|---|
| `ar-viewer.html` | Removed `POSTER_MAP` object and the `mv.setAttribute('poster', …)` line |

---

## Step 21 — Update Wagyu Steak Price
**Date:** 2026-06-14  
**Phase:** Content

### Summary
Updated the display price of the first dish (Wagyu Steak) from $32 to $65 in `index.html`.

### Files Changed
| File | Change |
|---|---|
| `index.html` — dish 1 card | `<span class="dish-price">$32</span>` → `$65` |

---

## Step 20 — Add Wagyu Steak Dish Preview Image
**Date:** 2026-06-14  
**Phase:** Content / UI

### Summary
Added a real dish photo (`wagyu-steak-003.webp`) for the first dish card (Wagyu Steak). Previously dish 1 showed a generic SVG plate placeholder; it now displays the actual food photo, matching the treatment already applied to dish 2 (Creamy Garlic Shrimp Pasta).

### Changes

| File | Change |
|---|---|
| `images/wagyu-steak-003.webp` | New — dish photo copied into project |
| `index.html` — dish 1 card | Replaced `<div class="image-placeholder">…</div>` with `<img src="images/wagyu-steak-003.webp" alt="Wagyu Steak" class="card-img" />` |
| `ar-viewer.html` — `POSTER_MAP` | Added `'steak-salad': 'images/wagyu-steak-003.webp'` so the photo shows while the 3D model loads |
| `styles.css` — `.card-img` | Fixed from letterbox (`max-width/height: auto`) to cover fill (`width/height: 100%; object-fit: cover; object-position: center`) — applied to all dish images |

### Notes
- The `.card-img` CSS fix also improves how the second dish photo (Shrimp Pasta) is cropped; previously it may have been letterboxed instead of filling the slot.
- The poster image in `ar-viewer.html` is displayed by `<model-viewer>` until the `.glb` file finishes downloading, improving perceived load time.

---

## Step 18 — Fix Steak AR: Root Cause Found and Eliminated
**Date:** 2026-06-14
**Phase:** AR / Bug Fix

### Root Cause (confirmed by evidence)

Inspected the GLB JSON of steak-v2.glb directly. Key findings:

**`EXT_mesh_gpu_instancing` on nodes 2–8 (fries, tomatoes, broccoli):**
All these nodes had their transforms stored only in GPU instance accessor arrays — not on the nodes themselves. iOS Quick Look ignores `EXT_mesh_gpu_instancing` (not supported). When the extension is ignored, these nodes render with no transform at all (wrong position/scale) or are skipped.

**Plate and steak (nodes 0–1) rendered microscopic:**
The `optimize` pipeline runs `instance` BEFORE `flatten`. The `instance` step captured the transforms of fries/tomato/broccoli nodes into GPU instance arrays. Then `flatten` baked the parent scale (0.00434× unit conversion) into nodes 0 and 1 (plate, steak) as node-level scales. At 0.4% of correct size, plate and steak are physically invisible.

**Original model's architecture:** `stekdone1.glb` has 90 nodes and 40 meshes — one plate, one steak, 19 fries clusters, 5 tomatoes (×4 sub-meshes), 8 broccoli (×2 sub-meshes). Each positioned via parent node transforms. Extensions used in original: **only `KHR_materials_unlit`** — no GPU instancing at all.

The entire `EXT_mesh_gpu_instancing` problem was **introduced by the optimization pipeline**, not present in the source model.

### Fix

Rebuilt from `stekdone1.glb` using individual passes with `flatten` FIRST, and NO `instance` step:

```bash
npx @gltf-transform/cli flatten  stekdone1.glb  steak-v3.glb   # bake all node transforms consistently
npx @gltf-transform/cli dedup    steak-v3.glb   steak-v3.glb   # remove duplicate buffers
npx @gltf-transform/cli join     steak-v3.glb   steak-v3.glb   # merge compatible primitives
npx @gltf-transform/cli weld     steak-v3.glb   steak-v3.glb   # weld near-duplicate vertices
npx @gltf-transform/cli simplify steak-v3.glb   steak-v3.glb   # reduce poly count
npx @gltf-transform/cli prune    steak-v3.glb   steak-v3.glb   # remove unused assets
npx @gltf-transform/cli resize   --width 1024 --height 1024 steak-v3.glb steak-v3.glb
npx @gltf-transform/cli webp     --quality 80  steak-v3.glb   steak-v3.glb
npx @gltf-transform/cli simplify --error 0.01  steak-v3.glb   steak-v3.glb
```

`flatten` applied ALL parent node transforms uniformly before any merging. No `instance` step means no `EXT_mesh_gpu_instancing` added.

### Result

| File | Size | Nodes | Meshes | GPU instances | Extensions |
|---|---|---|---|---|---|
| `stekdone1.glb` (original) | 97.46 MB | 90 | 40 | 0 | KHR_materials_unlit |
| `steak-v2.glb` (broken) | 13.64 MB | 9 | 9 | 7 | **EXT_mesh_gpu_instancing**, KHR_materials_unlit |
| `steak-v3.glb` (fixed) | **13.04 MB** | 6 | 5 | **0** | EXT_texture_webp, KHR_materials_unlit |

`EXT_texture_webp` is in `extensionsUsed` (not required). Viewers that support WebP (iOS 14+, all modern Android, model-viewer) get compressed textures; older viewers fall back gracefully.

### Files Changed
| File | Change |
|---|---|
| `models/steak-v3.glb` | New — correctly rebuilt, no GPU instancing, 13 MB |
| `ar-viewer.html` — `MODEL_MAP` | `steak-salad` updated to `models/steak-v3.glb` |

---

## Step 19 — Fix Broccoli Invisible in AR: Remove WebP Textures
**Date:** 2026-06-14  
**Phase:** AR / Bug Fix

### Symptom
After Step 18 fixed GPU instancing (plate, steak, fries, tomatoes all visible in AR), broccoli remained invisible in iOS Quick Look AR.

### Root Cause (confirmed by GLB JSON inspection)

The `webp` step in Step 18's pipeline converted all 7 textures to WebP using `EXT_texture_webp`, but with **no JPEG fallback** — `tex.source` was `null` for every texture. This is the default behavior of `@gltf-transform/cli webp`: it creates WebP primary textures but does NOT generate fallback images.

iOS Quick Look handles this inconsistently depending on material type:
- **Standard PBR (`KHR_materials_pbrMetallicRoughness`)** — iOS converts glTF → USDZ internally. The conversion pipeline can render WebP textures even without a JPEG fallback (internal format handling).
- **Unlit (`KHR_materials_unlit`)** — iOS takes a different conversion path. Without a JPEG fallback, the texture cannot be resolved → material renders fully **transparent/invisible**.

Broccoli was the **only mesh** using `KHR_materials_unlit` in the model — which is why only broccoli was invisible.

### Verification
Direct inspection of `steak-v3.glb` (the WebP version):
```
Texture 0 : source=null (EXT_texture_webp only, no fallback)
Texture 1 : source=null (EXT_texture_webp only, no fallback)
...all 7 textures: EXT_texture_webp primary, null fallback
Broccoli material: KHR_materials_unlit → texture lookup fails → transparent
```

### Fix

Rebuilt `steak-v3.glb` from `stekdone1.glb` using the same pipeline as Step 18 but **without the `webp` step**:

```bash
npx @gltf-transform/cli flatten    stekdone1.glb   steak-v3.glb
npx @gltf-transform/cli dedup      steak-v3.glb    steak-v3.glb
npx @gltf-transform/cli join       steak-v3.glb    steak-v3.glb
npx @gltf-transform/cli weld       steak-v3.glb    steak-v3.glb
npx @gltf-transform/cli simplify   steak-v3.glb    steak-v3.glb
npx @gltf-transform/cli prune      steak-v3.glb    steak-v3.glb
npx @gltf-transform/cli resize     --width 1024 --height 1024 steak-v3.glb steak-v3.glb
npx @gltf-transform/cli jpeg       --quality 80  steak-v3.glb steak-v3.glb
npx @gltf-transform/cli simplify   --error 0.01  steak-v3.glb steak-v3.glb
# NO webp step — KHR_materials_unlit + WebP (no fallback) = transparent on iOS
# NO instance step — EXT_mesh_gpu_instancing is not supported by iOS Quick Look
```

### Result

| File | Size | Extensions | Broccoli visible |
|---|---|---|---|
| `steak-v3.glb` (Step 18, WebP) | 13.04 MB | EXT_texture_webp, KHR_materials_unlit | ❌ |
| `steak-v3.glb` (Step 19, JPEG) | **16.67 MB** | KHR_materials_unlit only | ✅ (expected) |

Texture inspection of new file:
```
Extensions: KHR_materials_unlit (only — no EXT_texture_webp)
Nodes: 6 | Meshes: 5 | GPU-instanced nodes: 0
Texture 0: image/png (direct)
Texture 1: image/png (direct)
Texture 2: image/png (direct)
Texture 3: image/jpeg (direct)
Texture 4: image/jpeg (direct)
Texture 5: image/jpeg (direct)
Texture 6: image/jpeg (direct)
```

### Rule for Future Dishes
- Do NOT use `@gltf-transform/cli webp` unless JPEG fallbacks are generated separately and patched in.
- `KHR_materials_unlit` + WebP-only textures = invisible on iOS Quick Look.
- Safe texture formats for iOS AR: JPEG and PNG (direct, no extension wrapper).

### Files Changed
| File | Change |
|---|---|
| `models/steak-v3.glb` | Rebuilt — JPEG/PNG textures only, no WebP, 16.67 MB |

---

## Step 13 — First Dish Renamed to Wagyu Steak
**Date:** 2026-06-14
**Phase:** Content

### Summary
Renamed the first dish from "Black Truffle Risotto" to "Wagyu Steak" and updated its category label and description. No styling, classes, structure, or other dishes were changed.

### Card Changes (`index.html`)
| Field | Old value | New value |
|---|---|---|
| Category label | `RISOTTO` | `PRIME CUT` |
| Dish name line 1 | `Black Truffle` | `Wagyu` |
| Dish name line 2 (italic) | `Risotto` | `Steak` |
| Description | Aged Arborio, shaved black truffle… | Prime Wagyu beef, golden twice-cooked fries, tender-crisp broccoli florets, and roasted cherry tomatoes with a rich demi-glace. |

### Notes
- No other references to "Black Truffle Risotto" existed elsewhere in `index.html` (no aria labels, breadcrumbs, or data attributes used the old name).
- The AR slug (`steak-salad`) and 3D model (`stekdone1-fixed.glb`) assigned in Steps 11–12 already match this dish.

---

## Step 14 — Wagyu Steak Nutritional Values Updated
**Date:** 2026-06-14
**Phase:** Content

### Summary
Updated the nutritional data for the first dish in `script.js` to match the Wagyu Steak. The modal structure and styling were not changed.

### Data Changes (`script.js` — dish index 0)
| Field | Old value | New value |
|---|---|---|
| Name | Black Truffle Risotto | Wagyu Steak |
| Calories | 680 kcal | 780 kcal |
| Protein | 18g | 52g |
| Carbs | 89g | 48g |
| Fat | 24g | 42g |
| Allergens | Dairy, Gluten | Gluten (wheat/fries), Dairy (demi-glace) |

### Full Nutrition Reference (not yet rendered in modal)
Serving 450g · Total Fat 42g (54% DV) · Sat. Fat 16g (80% DV) · Total Carbs 48g (17% DV) · Net Carbs 43g · Fiber 5g (18% DV) · Sugars 6g · Protein 52g (104% DV) · Cholesterol 165mg (55% DV) · Sodium 680mg (30% DV) · Vitamin A 210mcg (23% DV) · Vitamin C 38mg (42% DV) · Calcium 60mg (6% DV) · Iron 5.2mg (29% DV)

---

## Step 15 — Fix Allergen Tags Layout in Nutrition Modal
**Date:** 2026-06-14
**Phase:** UI / Bug Fix

### Problem
Allergen tags in the nutrition modal were stacking vertically instead of sitting inline side by side. This affected all three dishes.

### Root Cause
`.allergens-list` already had `display: flex; flex-wrap: wrap; gap: 0.5rem` — the container was correct. `.allergen-tag` was missing an explicit `display` property, which caused inconsistent rendering across browsers (flex children without an explicit display can be treated as block-level in some engines).

### Fix (`styles.css`)
Added `display: inline-flex; align-items: center;` to `.allergen-tag`:

```css
.allergen-tag {
    display: inline-flex;
    align-items: center;
    /* existing padding, border, color unchanged */
}
```

No changes to `index.html` or `script.js` — the fix is purely in CSS and applies to all dishes automatically.
