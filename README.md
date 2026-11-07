# Nodalume Web

Sitio de producto de Nodalume: portales cautivos con identidad propia, diseño visual y recorridos conectados. Experiencia bilingüe ES/EN, independiente de ANXZU y de la aplicación administrativa.

Sitio público: https://nodalume.anxzu.com/

## Desarrollo y validación

Node.js 24. La landing no requiere backend, cuenta, variables secretas ni acceso al laboratorio.

```sh
npm ci
npm run dev
```

Vista local: http://127.0.0.1:4186/. Detén dev antes de ejecutar preview en el mismo puerto.

```sh
npm run lint
npm test
npm run build
npm run preview
```

## Revisión comercial

La continuación `codex/ndl-web-005-commercial-review` conserva la evolución visual de 002–004 y sustituye los textos de construcción del micrositio por funciones y beneficios de producto. Living Interface explica diseño, contenido y navegación; no pretende ejecutar el editor.

Se incluyen únicamente tres videos proporcionados y aprobados expresamente por el propietario para publicación: Portal Builder, Inspector y Responsive. MP4 H.264, 30 fps, sin audio, carga a petición y controles nativos; posters WebP reales. La grabación de Logic Builder con Starbucks sigue privada y fuera del repositorio y del build. Los originales no se modifican. Ver [reporte de revisión](docs/ndl-web-005-commercial-review.md).

Los detalles de auditoría y las especificaciones de medios permanecen en los documentos históricos, sin mostrarse al cliente. Nodalume sigue en desarrollo; no se anuncian SLA, contratación automática, precios ni resultados comerciales garantizados. El enlace de contacto conduce al creador en ANXZU y el caso técnico conserva el contexto del proyecto.

## Publicación

GitHub Pages construye y publica únicamente `dist` desde `main` mediante [.github/workflows/deploy.yml](.github/workflows/deploy.yml). Las ramas de revisión no despliegan. El dominio existente se conserva sin cambios de DNS. La solicitud del propietario del 7 de noviembre de 2026 autoriza integrar y publicar esta revisión, reemplazando las restricciones de publicación de los briefs anteriores.

La política previa `noindex, nofollow` se mantiene: publicar esta revisión no cambia la decisión de indexación. Es una directiva para buscadores, no un control de acceso.

## Diseño y antecedentes

- [Sistema visual](DESIGN.md) y [contexto del producto](PRODUCT.md).
- [Separación y procedencia del repositorio](docs/migration.md).
- [NDL-WEB-002](docs/ndl-web-002-report.md), [NDL-WEB-003](docs/ndl-web-003-report.md) y [NDL-WEB-004](docs/ndl-web-004-data-growth.md).

Los reportes previos describen el estado histórico de cada fase. Las animaciones GSAP permanecen en un chunk diferido; pausa manual, reduced motion y fallo de carga conservan una composición estática completa. La aplicación React requiere JavaScript.
