# Nodalume Creative Systems

Independent Nodalume Web repository. Published baseline: NDL-WEB-001. No backend, authentication, product API or ANXZU build integration.

```sh
cd nodalume-web
npm ci
npm run dev
```

Local address: http://127.0.0.1:4186/. Stop a running dev server before starting `npm run preview` on the same port.

```sh
npm run lint
npm test
npm run build
npm run preview
```

See [DESIGN.md](DESIGN.md), [PRODUCT.md](PRODUCT.md) and [docs/ndl-web-001-report.md](docs/ndl-web-001-report.md). Package and lockfile belong only to this repository. `private: true` prevents npm publication. The baseline retains noindex while product positioning is reviewed; it is not an access control. GitHub Pages publishes dist from main through the guarded workflow. Creative evolution branches do not deploy.

Animations are dynamically imported. The motion button unmounts the animation layer and reverts its GSAP context. A reduced-motion system preference prevents importing that layer. If its chunk fails, the page stays readable and navigable. The React application itself still requires JavaScript.

No real product media is included. The film frame is explicitly conceptual. Public product claims, footage, buyer positioning and deployment require a later review.

Production: https://nodalume.anxzu.com/. The custom domain is configured in repository Pages settings, not controlled by a generated CNAME file. See [migration](docs/migration.md) for source provenance.

## Creative evolution review

`main` publishes the validated NDL-WEB-001 baseline. `codex/ndl-web-002-creative-evolution` contains the local refinement, including the conceptual Living Interface. Do not merge or push main as part of review. Manual deployment jobs also reject non-main refs.

The review runs locally at http://127.0.0.1:4186/ after build/preview. Read [NDL-WEB-002 report](docs/ndl-web-002-report.md), [performance comparison](docs/ndl-web-002-performance.md) and [interface review](docs/ndl-web-002-review.md). No product account, private media or backend connection is required.

To run the comparative auditor with tools installed outside the project, use `node scripts/audit.mjs /absolute/path/to/audit/node_modules`. `NDL_AUDIT_URL` selects a served production build; `NDL_AUDIT_OUTPUT` selects the evidence directory. The default output belongs to NDL-WEB-002, so the original baseline reports are retained.

## NDL-WEB-003 — revisión local de producto

La continuación de `codex/ndl-web-002-creative-evolution` vive en `codex/ndl-web-003-product-storytelling`. Conserva Hero y Living Interface, añade la narrativa bilingüe y cuatro espacios audiovisuales con especificación. No contiene grabaciones ni capturas simuladas del producto. Main y el sitio público siguen en NDL-WEB-001.

- [Reporte y GO/NO-GO](docs/ndl-web-003-report.md)
- [Capacidades auditadas por lectura](docs/ndl-web-003-capabilities.md)
- [Arquitectura y storyboard propuesto](docs/ndl-web-003-storyboard.md)
- [Inventario de movimiento](docs/ndl-web-003-motion.md)

`npm run build` y `npm run preview` permiten revisar localmente. No desplegar esta rama sin aprobación posterior.

## NDL-WEB-004 — rama consolidada

`codex/ndl-web-004-data-growth` conserva los commits y evidencias de 002/003 y añade una escena ES/EN de conexión, señales y decisión humana. La visualización es conceptual; no usa registros reales ni representa resultados comerciales.

- [Reporte, auditoría de capacidades y sincronización](docs/ndl-web-004-data-growth.md)
- [Clonar y ejecutar ambos proyectos desde otro equipo](docs/clone-and-run.md)
- [Rama consolidada en GitHub](https://github.com/Zuriel0/nodalume-web/tree/codex/ndl-web-004-data-growth)

Main y GitHub Pages conservan NDL-WEB-001. La rama de desarrollo no se integra ni despliega automáticamente.
