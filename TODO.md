# TODO: GSAP Animation & UI/UX Enhancement

## Completed

### Phase 1 — Setup & Animation Infrastructure
- [x] Install GSAP (`gsap@^3.15.0`)
- [x] Create `src/hooks/useGsapReveal.ts` — reusable scroll-trigger reveal hook (fade + blur + stagger, reduced-motion aware)
- [x] Create `src/hooks/useGsapParallax.ts` — reusable parallax hook (scrub, desktop-only)
- [x] Create `src/styles/_gsap.scss` — GSAP initial states, gradient text, ambient orbs, reduced-motion
- [x] Create `src/components/ScrollProgress.tsx` + `.scss` — GSAP-driven scroll progress bar
- [x] Create `src/components/CustomCursor.tsx` + `.scss` — magnetic dot + glowing ring cursor (fine-pointer only)
- [x] Enhance `src/styles/_variables.scss` — richer palette, spacing scale, typography, radii, shadows, shared mixins (glass-morphism, section-padding, section-heading, card-base)
- [x] Consolidate `_animations.scss` (removed duplicate `glass-morphism` mixin)

### Phase 2 — Section-by-Section GSAP & UI Upgrades
- [x] **Hero** — staggered GSAP intro, parallax profile image, gradient name, animated border glow, profile tag, magnetic-style buttons
- [x] **Navbar** — GSAP entrance, active link underline, glass styling, polished logo
- [x] **Experience** — GSAP scroll reveal on cards
- [x] **Education** — GSAP reveal + enhanced timeline styling
- [x] **Certifications** — GSAP reveal grid + hover polish
- [x] **Projects** — GSAP reveal + 3D tilt hover (box-shadow lift to avoid transform conflict)
- [x] **Skills** — GSAP reveal + enhanced category cards
- [x] **Activities** — GSAP reveal + enhanced cards
- [x] **Contact** — GSAP reveal + enhanced styling
- [x] **KeyInsights** — GSAP reveal (heading + cards)

### Phase 3 — Global Polish
- [x] **index.html** — Google Fonts (Inter, Fira Code), meta description, theme-color, title
- [x] **main.scss** — global scrollbar, selection, ambient background, reduced-motion, anchor offsets
- [x] **App.tsx** — modern theme, ScrollProgress + CustomCursor wired, enhanced footer
- [x] **App.css / index.css** — cleaned minimal global styles
- [x] **main.tsx** — wired global SCSS imports centrally
- [x] **AiInterviewPage** — GSAP reveal as project-page template
- [x] **react-scroll.d.ts** — declaration file resolving react-scroll missing types

### Build
- [x] Verify build with `npm run build` (tsc + Vite succeed; CSS + JS bundles generated)
