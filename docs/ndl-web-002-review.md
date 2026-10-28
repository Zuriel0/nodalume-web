# NDL-WEB-002 — revisión de acabado

Modo full, revisión inline sobre la landing completa React/CSS/SVG, con capturas reales antes/después. Se aplican criterios de Impeccable y Make Interfaces Feel Better; no hubo un revisor independiente, motor de Impeccable ni inspección a 10% de velocidad.

| Categoría   | Evidencia                                                            | Resultado                                                           |
| ----------- | -------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Tipografía  | Hero, filosofía, Studio, producto, mapa y footer en 12 combinaciones | Syne/DM Sans confirmadas; texto dentro de viewport                  |
| Superficies | Frames conceptuales, controles, seam, nav sticky y selección         | Misma paleta; sin UI ficticia del producto                          |
| Movimiento  | Matrices 3D, señal, 3 ciclos de cleanup, reduced y fallback          | Seis/cero triggers; ambiental pausado fuera de vista                |
| Iconografía | Flechas, menú y pausa; estado hover/focus                            | Un patrón CSS compartido, SVG currentColor y objetivos legibles     |
| Rendimiento | 12 navegaciones comparativas y 2 reduced                             | P/A 100 en ambas versiones; rangos LCP solapados; coste documentado |

## Hallazgos y correcciones

| Severidad | Ubicación                             | Antes                                                                    | Después                                                           | Motivo                                                     |
| --------- | ------------------------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------- | ---------------------------------------------------------- |
| MEDIUM    | Hero, `src/App.jsx`, `src/styles.css` | Título de 72px a 1440 y dos líneas contenidas                            | Tres líneas; 102.24px ES, ajuste óptico EN; móvil conserva escala | Mayor jerarquía sin desbordar Syne                         |
| MEDIUM    | `src/motion.js`                       | La mayoría de planos compartían desplazamiento                           | Capas trasera/frontal diferenciadas y perspectiva limitada        | Profundidad sin un engine adicional                        |
| MEDIUM    | `src/components/LivingInterface.jsx`  | No había exploración compositiva                                         | Tres presets, conexiones y reset reales con disclaimer conceptual | Interacción verificable, sin promesas del editor operativo |
| MEDIUM    | Visibilidad, `src/motion.js`          | Recorrer tweens no cubría un trigger unido a timeline                    | Colección de triggers propios, incluyendo timelines               | Suspensión coherente y cleanup completo                    |
| LOW       | Hero compacto                         | El enlace secundario duplicaba el destino y empujaba el control de pausa | Se omite en compacto; el enlace inferior conserva el destino      | Recupera espacio sin eliminar navegación                   |
| LOW       | Selector del Studio                   | Fieldset y grupo interno repetían el mismo nombre                        | Solo el fieldset/legend nativo agrupa los botones                 | Evita anuncios redundantes                                 |
| LOW       | Menú y pausa                          | Sustitución instantánea del icono                                        | Icon swap CSS interrumpible y reduced motion                      | Respuesta visual coherente                                 |
| LOW       | Navegación                            | El selector de idioma desaparecía al desplazarse                         | Header sticky y scroll padding compensado                         | Acceso continuo y foco no oculto                           |

## Alternativas rechazadas

| Ubicación | Candidato                               | Motivo                                                     |
| --------- | --------------------------------------- | ---------------------------------------------------------- |
| Hero      | WebGL/Three.js                          | No necesario para esta geometría; no hay coste justificado |
| Narrativa | Pinning largo o scroll propio           | Complicaría teclado y lectura nativa                       |
| Studio    | Réplica inventada del Portal Builder    | Confundiría un concepto con evidencia de producto          |
| Video     | Incorporar la prueba privada de ANX-014 | No existe autorización para usar ese medio públicamente    |

## Verificación y veredicto

Lint, tests existentes, build y diff check correctos; doce viewports/idiomas sin overflow ni IDs duplicados. Se probaron presets, checkbox, reset, cambios de idioma conservando estado, Tab/Space, Enter/Escape, retorno de foco y enlace real al caso ANXZU. Consola normal sin errores o warnings. Los presets siguen funcionando con pausa manual y con el chunk bloqueado. Lighthouse confirmó reduced motion sin GSAP y sin transiciones del Studio.

**Approve / GO para revisión local del propietario.** No quedan hallazgos HIGH/MEDIUM abiertos en el alcance observado. No equivale a aprobación para publicar: la rama no se mergea ni se sube. Quedan sin verificar hardware táctil, otros motores, lector de pantalla real, FPS/CPU, inspección a 10% y la transición real de pestaña hidden/visible. IAB mantiene documentos visibles al cambiar de pestaña; la lógica correspondiente se revisó en código, sin declarar esa prueba pasada.
