# NDL-WEB-003 — inventario de movimiento

Sistema heredado: GSAP 3.15.0 + ScrollTrigger, importación diferida y CSS. Sin dependencias nuevas. Se conserva el Hero y el componente Living Interface.

| Región                                  | Movimiento                                                                                      | Motivo                                              | Reproducción y límites                                                                                                        |
| --------------------------------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Hero                                    | Entrada tipográfica, capas ambientales de 8 s, señal, cursor interpolado y salida scroll de 002 | Libertad de composición                             | Figura visible y documento visible; puntero fino solamente; pausa/reduced elimina el motor                                    |
| Problema                                | Seam y tipografía coordinados con scroll de 002                                                 | De libertad a restricción                           | Scroll nativo; nunca pinning; texto legible desde el primer estado                                                            |
| Portal Builder / inspector / responsive | Sin coreografía nueva                                                                           | Mantener foco en lectura y futuros medios reales    | Los espacios se ven completos sin animación; no se anima un falso producto                                                    |
| Design to Logic                         | Un ScrollTrigger con scrub .5; dashoffset del único tramo entre pantalla y condición            | Relacionar interacción con decisión                 | Trazo de 160 unidades; longitud fija, solo offset. Las dos salidas permanecen estáticas: no se fingen ejecuciones simultáneas |
| Control                                 | Composición estática                                                                            | Permitir comparar borrador, publicación e historial | Sin loops ni desplazamiento del texto                                                                                         |
| Living Interface                        | Entrada finita .96/y18 y presets por acción de usuario, heredados                               | Explorar el lenguaje gráfico                        | Sin loop; presets/checkbox/reset permanecen operativos con pausa, reduced y fallo del chunk                                   |
| Especificaciones                        | Apertura nativa `details`; icono + gira 45°                                                     | Hacer visible información adicional                 | Teclado y touch; no depende de hover; reduced elimina transición                                                              |
| Evolución / enlaces / menú              | Details, flechas e icon swap heredados                                                          | Confirmación de acción                              | Objetivos ≥44px; reduced elimina desplazamientos                                                                              |

Se retiró la entrada de `.film-fold`, porque el antiguo espacio único de película fue sustituido por cuatro contratos de medios. Se añadió un solo trigger de relación. Total: **seis triggers**, igual que 002; cero al pausar. No se añadió un RAF por medio ni otro loop ambiental.

## Ciclo de vida y fallback

El contexto GSAP es local a `.site`; cleanup revierte estilos y elimina los seis triggers, observers, listeners de puntero, matchMedia/visibilidad y el frame de refresh. El cambio de idioma no reinicia el motor ni los presets. ResizeObserver actualiza las posiciones cuando cambia idioma o se despliega un contrato audiovisual.

La colección de triggers propios heredada suspende sus scrubs al ocultar documento; el loop exige además que la figura esté en viewport. La verificación real hidden/visible en un navegador convencional sigue pendiente: IAB no reproduce ese estado de forma fiable. No se declara esa prueba aprobada.

Pruebas: tres ciclos 6→0→6, con CSS de Studio a 0s durante pausa; Lighthouse reduced no solicita el chunk de movimiento y conserva página completa; fallo forzado 503 del chunk deja `static-fallback`, sin triggers, con controles y lectura disponibles. Los resultados específicos de la corrida final están en el reporte y archivos de evidencia.

El scroll se inspecciona con acciones nativas de IAB; sin pinning, preventDefault de rueda, Lenis ni librerías adicionales. No se midieron FPS de presentación ni CPU de scroll, y no se declara 60 FPS. Los datos Lighthouse miden carga de laboratorio, no fluidez durante interacción.
