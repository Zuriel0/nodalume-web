# NDL-WEB-003 — arquitectura editorial y storyboard propuesto

Propuesta para aprobación futura. **No se grabó ningún video en esta fase.**

## Recorrido de página

| Capítulo          | Destino            | Pregunta que responde                       | Tratamiento                                                                                      |
| ----------------- | ------------------ | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| A Libertad        | `#top`             | ¿Qué puedo crear?                           | Hero 002 conservado; CTA ahora conduce al producto                                               |
| B Problema        | `#idea`            | ¿Qué limita una plantilla rígida?           | Gran tipografía sobre Ink; párrafo concreto, sin comparaciones no sustentadas con marcas         |
| C Portal Builder  | `#product`         | ¿Cómo se compone un portal?                 | Plano 16:9 abierto, inspector 4:3 y vista vertical 9:16; escala/asimetría sin tarjetas uniformes |
| D Design to Logic | `#design-to-logic` | ¿Cómo se relacionan pantallas y decisiones? | Escena oscura, relación conceptual con dos salidas; espacio 16:9 real pendiente                  |
| E Control         | `#architecture`    | ¿Qué ocurre alrededor del lienzo?           | Borrador → publicación → historia; contexto tenant sin topología ni garantías inventadas         |
| Interludio        | `#studio`          | ¿Qué expresa Creative Systems?              | Living Interface original, explícitamente conceptual                                             |
| F Evolución       | `#horizon`         | ¿Qué existe y qué falta?                    | Alcance actual, integración por validar, concepto y futuro; details nativo                       |
| G Cierre          | Footer             | ¿Dónde encuentro evidencia técnica?         | Caso ANXZU real; retorno al inicio                                                               |

Se conservan `#main`, `#builder`, `#connections`, `#creative-system`, `#future` y todos los hashes anteriores. Nuevos destinos audiovisuales: `#demo-builder`, `#demo-inspector`, `#demo-responsive`, `#demo-logic`.

## Contratos de medios

La fuente bilingüe `src/product-story.js` define por cada espacio función, alcance, formato, proporción, duración, alternativa/transcripción, móvil y carga. Son visibles en “Qué mostrará esta demostración”. Ningún espacio tiene play falso ni peticiones a video.

| Espacio        | Evidencia buscada                            | Medio / proporción                  | Duración | Texto alternativo propuesto (ES / EN)                                                                                       |
| -------------- | -------------------------------------------- | ----------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------- |
| Portal Builder | Lienzo, biblioteca y selección en capas      | WebM + MP4, 16:9                    | 15–20 s  | El editor muestra la pantalla completa y se selecciona un bloque / The editor shows the full screen and a block is selected |
| Inspector      | Cambio contextual tras selección, sin editar | 2 capturas reales o WebM/MP4, 4:3   | 6–8 s    | Al seleccionar un botón aparecen sus propiedades / Selecting a button reveals its properties                                |
| Responsive     | Alternar vistas del mismo portal             | Capturas o WebM/MP4, 9:16           | 6–8 s    | El mismo portal en escritorio y móvil / The same portal in desktop and mobile views                                         |
| Logic Builder  | Pantallas, puertos y condición existentes    | WebM + MP4 y detalle estático, 16:9 | 10–12 s  | Una condición conecta pantallas según su resultado / A condition connects screens according to its result                   |

Carga futura: posters AVIF/WebP con dimensiones fijas, diferidos fuera del primer viewport; `preload=none`; reproducción a petición, controles nativos, transcripción junto al medio, pausa offscreen/hidden y sin autoplay con reduced motion. En móvil conservar encuadre completo y ofrecer detalle legible, sin scroll horizontal. **Estas políticas son especificación, no un reproductor implementado.**

## Master inicial de 50 segundos

| Tiempo  | Encuadre y navegación real prevista                                                                | Afirmación / overlay EN-ES                                  | Destino en página  |
| ------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ------------------ |
| 0–4 s   | Hero de micrositio; composición conceptual identificada                                            | Your portal. Your way. / Tu portal. A tu manera.            | `#top`             |
| 4–20 s  | Demo tenant: Diseño / Escritorio; lienzo completo; localizar bloque y capa existentes sin moverlos | Compose with blocks and layers / Compón con bloques y capas | `#demo-builder`    |
| 20–27 s | Seleccionar botón del fixture; mostrar propiedades sin cambiar valores                             | Refine the details / Afina los detalles                     | `#demo-inspector`  |
| 27–34 s | Alternar Escritorio → Tableta → Móvil; mismo portal, sin editar                                    | Review each viewport / Revisa cada vista                    | `#demo-responsive` |
| 34–45 s | Abrir Lógica; encuadrar pantalla y condición existentes; seleccionar solo si no cambia documento   | Connect design and decisions / Conecta diseño y decisiones  | `#demo-logic`      |
| 45–50 s | Retorno a Diseño / Escritorio, Guardado visible; cierre con caso técnico                           | Explore the engineering / Conoce la ingeniería              | Footer             |

No prueba guardado, publicación, ejecución externa ni acceso a red. Los cortes editoriales pueden reutilizar planos de selección sin inventar interacciones. No se presenta la gráfica conceptual del micrositio como pantalla del producto.

## Preparación antes de autorizar grabación

Usar cuenta demo en tenant aislado, sin rol de plataforma; el propietario inicia sesión manualmente. Verificar acceso, portal desechable y Guardado. No registrar login, contraseñas, cookies, tokens, datos personales, nombres de clientes o infraestructura privada. Elegir un fixture con imágenes propias/autorizadas, sin Starbucks ni otras marcas ajenas. Si no existe, detener la preparación de medios hasta que el propietario lo prepare por las vías oficiales; no editarlo por cuenta propia.

Confirmar que el build servido coincide con el código revisado y que las cuatro vistas cargan sin chunk errors. Fijar resolución de captura antes de entrar al recorrido; grabación nativa de navegador sin audio ni pantalla completa del SO, cuando se autorice en otra fase. Guardar originales en carpeta temporal privada; revisar fotogramas, dimensiones, duración y transcripción antes de cualquier incorporación/publicación.

Publicación de medios y del micrositio requiere aprobación posterior. Esta propuesta no concede permiso para grabar, editar el producto o desplegar.
