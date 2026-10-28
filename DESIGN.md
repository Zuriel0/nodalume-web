# Creative Systems — design foundation

## Direction

A folded canvas becomes a connected composition. The real Nodalume mark contributes a folded, continuous rhythm; the landing expands that rhythm into flat geometric planes and paths. It is a conceptual composition, not a product screenshot or network topology. The first viewport pairs monumental, left-aligned type with an open composition; subsequent scenes alternate reading, contrast and a reserved film frame. No SaaS card grid.

## Tokens

| Role           | Value / rule                                                                                                                                                                                      |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Canvas         | #F7F7F4                                                                                                                                                                                           |
| Surface        | #FFFFFF                                                                                                                                                                                           |
| Ink            | #111111                                                                                                                                                                                           |
| Electric       | #5E46FF                                                                                                                                                                                           |
| Signal         | #C8FF5E; ink text only, sparse accent                                                                                                                                                             |
| Muted          | #555550; body text on light surfaces                                                                                                                                                              |
| Line           | #D8D8D0; decorative dividers, never sole interactive boundary                                                                                                                                     |
| Display        | Self-hosted Syne variable 700–800; tracking −.04em, line height .97                                                                                                                               |
| Body           | Self-hosted DM Sans variable 400–700; line height 1.55, measure 60ch                                                                                                                              |
| Type scale     | Hero ES clamp(4rem, 7.1vw, 8rem), EN clamp(4rem, 6.6vw, 7.4rem), three editorial lines; tablet 8.6vw capped at 5.5rem; mobile clamp(2.3rem, 11vw, 4.5rem); scene titles 2.35–8rem; body 1–1.25rem |
| Spacing        | .25, .5, .75, 1, 1.5, 2, 3, 4, 6, 8rem; sections clamp(5rem, 9vw, 10rem)                                                                                                                          |
| Layout         | Max 1800px; responsive gutters clamp(1.25rem, 4.2vw, 5rem); hero 62/38 open overlap, story 1/2 columns                                                                                            |
| Radius         | 0 for editorial regions, 6px for product frame; circles only mark nodes and small controls                                                                                                        |
| Elevation      | Header menu only: 0 16px 32px #11111114; no decorative card shadows                                                                                                                               |
| Layers         | Base 0; composition 1; content 2; nav 20; mobile disclosure 30; skip link 50                                                                                                                      |
| Duration       | CSS hover/focus 180–240ms; intro .9s; scroll catch-up .6s; ambient 5–8s                                                                                                                           |
| Ease           | CSS cubic-bezier(.22,1,.36,1); GSAP power3.out; ambient sine.inOut; path travel none                                                                                                              |
| Interaction    | 44px minimum targets, 3px contrasting focus outline with 4px offset, arrow travel 3px; no magnetic cursor                                                                                         |
| Motion         | Separate intro / pointer / ambient / scroll layers. Native scroll, no pinning. Only hero ambient loops; suspended offscreen or hidden. Global motion control removes all GSAP work.               |
| Reduced motion | Static complete composition, no GSAP import, no smooth scroll or icon displacement; OS change observed live                                                                                       |
| Breakpoints    | 600px compact; 900px desktop composition; 1200px large. QA at 320, 375, 768, 1024, 1440, 1920px                                                                                                   |

The philosophy scene deliberately exceeds Impeccable's generic 6rem display recommendation; the Hero scale was adjusted against the actual wide Syne lettering. All body copy remains readable; no gradient lettering, decorative eyebrows or invented metrics. Warm canvas and electric accents follow the explicit brief, not library defaults.

## Surface strategy

Mode: Persuade. Visitor path: creative premise → problem and philosophy → explicit reserved product film → current scope and future experience map → return to top. CTA labels describe real in-page navigation; no trial or unavailable signup.

## Identity decisions considered

Folded canvas (chosen) carries the mark and the product's composition mechanism. A node atlas overemphasizes infrastructure. A kinetic type-only poster weakens the connection idea. A fictitious editor is rejected as false evidence. The signature is a single connected plane that changes with scroll; editorial blocks remain calm and selectable.

## NDL-WEB-002 refinement

The published main remains NDL-WEB-001. These changes belong only to the creative-evolution review branch.

The Hero keeps its words and adopts three editorial lines. Optical sizes differ between EN and ES to respect Syne's width. At 1440px the measured ES heading is 102.24px, up from 72px. Mobile remains 41.25px at 375px. `--font-display`, `--font-body`, `--title-hero`, `--header-height`, `--space-scene` and `--ease-studio` make the refinement explicit. No color, font file or brand asset changes.

The header is sticky at 96px desktop, 84px tablet and 80px compact; native scroll padding reserves its height plus 24px so keyboard/hash destinations remain visible. The compact Hero omits the duplicate secondary link; its bottom connection link retains the same destination.

Living Interface is a local conceptual experiment, not product UI. Three compositions use the same planes and palette, with a connection checkbox and local reset. Presets are native toggle buttons grouped by a fieldset/legend; the checkbox has a clickable 44px label; preset targets are at least 48px high. Captions announce intentional changes politely. Switching languages preserves the selected composition and connection state. Reduced motion and manual pause keep controls operational with immediate visual state changes.

Only the Hero has an ambient loop. Separate back/front layer offsets and bounded pointer tilt provide depth without a 3D engine. A short folded seam links canvas to ink; the studio has a finite entrance and no continuous playback. CSS handles interruptible preset transitions and the reviewed link/icon microinteractions. See docs/ndl-web-002-report.md for measured cost and review limits.

## NDL-WEB-003 — continuación local

La rama sucesora conserva la identidad de 002. La arquitectura editorial ahora sigue libertad → problema → composición → decisiones → control → exploración conceptual → evolución → caso técnico. Portal Builder tiene un plano 16:9 dominante; inspector un contrapunto 4:3; responsive un plano vertical violeta; Design to Logic una escena Ink. Los espacios audiovisuales están vacíos e identificados, sin falso reproductor. Solo se añade el dibujo scroll de una relación, sustituyendo la entrada de la película anterior; el total de seis triggers se conserva. Ver `docs/ndl-web-003-design-plan.md`, `docs/ndl-web-003-storyboard.md` y el reporte de esta fase.
