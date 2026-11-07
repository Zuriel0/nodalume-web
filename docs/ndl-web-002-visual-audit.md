# Visual audit before editing — NDL-WEB-002

Reviewed the actual HTTPS baseline at 1440 × 1000 and 375 × 900, before any design changes. See evidence/ndl-web-002/before. Published commit: d4f833004cba3c24aa4a252fa075d6fca250617f. Palette, Syne/DM Sans, brand geometry, contrast and mobile reading are coherent and are retained.

| Observation                                                                                   | Evidence                                   | Decision                                                                                          |
| --------------------------------------------------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| Desktop title is comparatively restrained while the canvas has generous unused space above it | 1440 capture, existing 5vw display         | Recompose the same words over three lines and enlarge desktop type; keep mobile copy legible      |
| Planes share most motion and read as a single flat assembly                                   | Hero geometry and current ambient timeline | Separate layer offsets and introduce bounded perspective; do not add WebGL                        |
| The boundary between canvas and ink is abrupt                                                 | Full-page capture                          | Carry a folded edge into the dark scene with a short native-scroll sequence                       |
| Exploration currently offers anchors and details, but no compositional response               | Public interaction QA                      | Add an explicitly conceptual Living Interface with presets, connection visibility and local reset |
| Product frame clearly communicates that media is pending                                      | Desktop/mobile captures                    | Preserve that truth and proportions; link to the existing ANXZU engineering case                  |
| Menu/pause icons snap between shapes                                                          | Keyboard/menu inspection                   | Apply the reviewed Transitions.dev icon-swap pattern without a new dependency                     |

Direction: refinement of the existing Creative Systems world, not a replacement identity. Mode remains Persuade. One finite entrance, a single visible ambient Hero, native-scroll transitions and a user-controlled conceptual scene. The interactive scene does not impersonate the Portal Builder, execute flows or connect to any service.

Impeccable context/craft guidance is applied documentally, as in NDL-WEB-001; no downloadable engine or hooks were executed. GSAP official Core/Timeline/ScrollTrigger/React/Performance guidance is reused. Transitions.dev contributes only the free icon-swap and existing link patterns. Make Interfaces Feel Better supplies the final typography/surface/icon/motion/performance review. No new runtime dependency is planned.
