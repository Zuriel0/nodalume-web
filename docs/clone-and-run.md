# Clonar y desarrollar desde otra computadora

Necesitas Git y Node.js 24 con npm. Ambos repositorios son públicos; la clonación HTTPS no requiere contraseñas ni tokens. Para publicar cambios propios, configura autenticación de GitHub por los métodos oficiales de tu equipo. No copies credenciales ni node_modules de la computadora anterior.

Ejecuta cada bloque desde la carpeta donde quieras guardar tus repositorios, en terminales separadas. No uses la misma carpeta para ambos.

## ANXZU — main sincronizado

```sh
git clone --branch main --single-branch https://github.com/Zuriel0/communications-electronics-portfolio.git
cd communications-electronics-portfolio
node --version
npm ci
npm run dev -- --host 127.0.0.1 --port 5173 --strictPort
```

Abre `http://127.0.0.1:5173/`. Para comprobar el código:

```sh
npm run lint
node --test tests/*.test.js
npm run build
node scripts/check-project-chunks.mjs
git status --short --branch
```

Referencia verificada: main `1ccd9e8d694052eb3191282e7794afa640e47895`. No se creó otro commit para sincronizarlo: ya coincidía con GitHub.

## Nodalume Web — rama consolidada de desarrollo

**Clona esta rama para obtener 002, 003 y 004. Main conserva el baseline publicado 001.**

```sh
git clone --branch codex/ndl-web-004-data-growth --single-branch https://github.com/Zuriel0/nodalume-web.git
cd nodalume-web
node --version
npm ci
npm run dev
```

Abre `http://127.0.0.1:4186/`. Para validar y revisar el build:

```sh
npm run lint
npm test
npm run build
git diff --check
npm run preview
```

Detén `npm run dev` con Ctrl+C antes de ejecutar preview: ambos utilizan 4186 por diseño. El build es estático y no necesita el backend Nodalume, una cuenta demo ni variables secretas.

## Retomar una copia existente sin sobrescribir trabajo

En cada repositorio, primero consulta:

```sh
git status --short --branch
git branch -vv
git remote -v
git fetch origin
```

Si hay cambios locales, consérvalos antes de cambiar de rama. No uses reset --hard ni force push. En una copia limpia de Nodalume Web que aún no tenga la rama local:

```sh
git switch --track origin/codex/ndl-web-004-data-growth
```

Si ya estás en esa rama y el árbol está limpio:

```sh
git pull --ff-only
npm ci
```

La clonación no es shallow: conserva los commits y evidencias de 002/003 como ancestros. No se necesita recrear sus merges ni combinar Nodalume Web con ANXZU.
