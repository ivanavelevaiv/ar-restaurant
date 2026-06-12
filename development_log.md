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
