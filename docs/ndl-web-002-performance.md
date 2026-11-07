# NDL-WEB-002 — rendimiento comparativo

28 de octubre de 2026. Se comparó un export de main `d4f833004cba3c24aa4a252fa075d6fca250617f` con el código de evolución del commit `de5eacaa17fc5853f7d58ef3dcb505e8feb7ca3c`. Ambos builds usan el mismo lockfile y la misma instalación de dependencias, Vite 8.3.5 y preview local: baseline 4188, candidato 4186. No se comparan latencias de localhost con el dominio público.

Lighthouse 13.6.0, Headless Chrome 156, Node 24.19.0. Tres navegaciones por perfil/version, ejecutadas secuencialmente en perfiles Chrome temporales independientes; configuración oficial móvil con throttling simulado y desktop-config oficial. Se inspeccionó `formFactor` en cada JSON. Además se ejecutó reduced motion una vez por versión. No se hicieron grabaciones de producto.

| Versión     | Perfil     | Performance (3) | Accessibility (3) | LCP mediana | LCP rango       | CLS        | TBT           |
| ----------- | ---------- | --------------- | ----------------- | ----------- | --------------- | ---------- | ------------- |
| NDL-WEB-001 | Móvil      | 100/100/100     | 100/100/100       | 752.6 ms    | 752.2–1209.0 ms | 0 en las 3 | 0 ms en las 3 |
| NDL-WEB-002 | Móvil      | 100/100/100     | 100/100/100       | 752.9 ms    | 752.1–753.2 ms  | 0 en las 3 | 0 ms en las 3 |
| NDL-WEB-001 | Escritorio | 100/100/100     | 100/100/100       | 202.5 ms    | 202.3–323.5 ms  | 0 en las 3 | 0 ms en las 3 |
| NDL-WEB-002 | Escritorio | 100/100/100     | 100/100/100       | 203.9 ms    | 202.4–323.5 ms  | 0 en las 3 | 0 ms en las 3 |

Las diferencias de mediana son pequeñas y los rangos se solapan: no hay evidencia de una mejora de velocidad. La nueva interacción conserva los resultados de laboratorio observados; no son métricas de campo, pruebas en hardware móvil o garantía con futuros medios audiovisuales. No se midieron CPU, FPS ni sesión prolongada.

## Coste del build

| Archivo lógico                          | Baseline bytes | Candidato bytes | Diferencia | Gzip baseline/candidato (Node zlib) |
| --------------------------------------- | -------------: | --------------: | ---------: | ----------------------------------: |
| Entry React + EN/ES                     |        238,308 |         244,784 |     +6,476 |                     73,958 / 75,428 |
| Motion diferido                         |        116,097 |         117,261 |     +1,164 |                     45,065 / 45,394 |
| CSS                                     |         13,787 |          19,925 |     +6,138 |                       3,729 / 4,924 |
| JavaScript solicitado con motion normal |        354,405 |         362,045 |     +7,640 |                   119,023 / 120,822 |

Gzip es una comparación del archivo calculada con la misma función de Node, no peso de transferencia del servidor. No se confunde el entry con el total descargado: el módulo diferido se solicita durante la carga normal. La separación permite evitarlo con reduced motion. Los hashes y manifests están en [bundle-comparison.json](evidence/ndl-web-002/bundle-comparison.json); [huellas del código medido](evidence/ndl-web-002/measured-source-sha256.json).

La ampliación responde al nuevo SVG, datos EN/ES y controles React/CSS. No hay dependencias nuevas ni cambios de fuentes o marca. React Flow no forma parte de este paquete. Las imágenes de QA y los JSON de Lighthouse no se incluyen en dist.

## Accesibilidad y movimiento

En ambas versiones, reduced motion evitó la descarga de GSAP y dejó cero triggers. En NDL-WEB-002 también se observó `studioTransition: 0s`, conservando la composición. Normal tiene seis triggers; el baseline tiene cuatro. El control manual produce cero; tres ciclos recuperaron seis sin acumulación. El ambiental se pausa con la figura fuera del viewport; los presets son transiciones finitas iniciadas por el usuario.

Un servidor temporal devolvió 503 exclusivamente al chunk de motion: el resultado fue `static-fallback`, cero triggers y controles de composición/conexiones operativos. Esto valida el fallo de animación, no la desactivación completa de JavaScript.

## Evidencia y reproducción

- [Comparación con todos los valores](evidence/ndl-web-002/performance-comparison.json).
- [Corridas baseline](evidence/ndl-web-002/baseline-lighthouse/summary.json).
- [Corridas candidato](evidence/ndl-web-002/after/lighthouse/summary.json).
- [Reduced motion candidato](evidence/ndl-web-002/after/lighthouse/reduced-motion.json).
- [Publicación inicial, medida por separado](evidence/ndl-web-002/publication/lighthouse/summary.json): una corrida por perfil, P/A 100/100, LCP móvil 832 ms y escritorio 206 ms. Es una verificación pública, no la base de la tabla comparativa.

Con un build de producción servido, instalar Lighthouse 13.6.0 en una carpeta temporal y ejecutar:

```sh
NDL_AUDIT_URL=http://127.0.0.1:4186/ NDL_AUDIT_OUTPUT=/private/tmp/nodalume-audit node scripts/audit.mjs /absolute/path/to/audit/node_modules
```

Para repetir el baseline, exportar main en otra carpeta y servir su build en otro puerto con el mismo toolchain. El auditor usa Chrome temporal sin autenticación y elimina sus perfiles al finalizar. No requiere instalar herramientas en el paquete del producto.
