# Repository separation and baseline publication

Source: Zuriel0/communications-electronics-portfolio, branch codex/ndl-web-001-creative-systems, commit a5c396a5aef4cb9fb005828f7b00f596a20e8d0c. The original microsites/nodalume subtree is faa0addb2dcfc408c05ed2edc39f8429bb7dab5f.

The new root commit migrates exactly 62 tracked files. Its root tree matches that subtree byte for byte; no other ANXZU history, private media, environment files, browser profiles, node_modules or dist were copied. The original source is retained until public deployment has been verified. Inventory and SHA-256 values are recorded in migration/ndl-web-001-inventory.json.

The subsequent publication commit adds only deployment infrastructure, root-level instructions and this provenance. Vite uses base '/'. Node 24 matches the installed toolchain. Source files, original brand assets, fonts, content and motion from NDL-WEB-001 remain unchanged.

GitHub Actions versions and immutable commit pins were checked against official releases on 2026-10-27; see migration/actions.json. The workflow accepts push to main and manual dispatch, and both jobs reject non-main refs. Build has contents:read; deployment has pages:write and id-token:write. Only dist is uploaded. No CNAME file is used to control the Actions custom domain.

Future NDL-WEB-002 work belongs to codex/ndl-web-002-creative-evolution and is not authorized for automatic publication. The initial public baseline retains noindex pending an explicit indexing decision. Source licensing notices and the original brand mark are preserved.
