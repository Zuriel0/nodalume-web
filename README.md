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
