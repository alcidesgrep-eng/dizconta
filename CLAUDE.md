# dizconta

Sitio estático (SPA) de cupones, deploy automático en Vercel al hacer push a `main` en `github.com/alcidesgrep-eng/dizconta`.

## Workflow

- Después de hacer cambios en `index.html` o `stores.js`, haz commit y push directo a `main` sin pedir confirmación — el usuario lo pidió explícitamente ("el otro chat ya subía directo las actualizaciones"). Esto dispara el deploy en Vercel automáticamente.
- Al hacer `git add`, agrega solo los archivos relevantes al cambio (nunca `git add -A`) — el repo suele tener archivos sueltos sin trackear (imágenes nuevas en `img/`) que son trabajo en progreso del usuario y no deben commitearse a menos que se pida explícitamente.
- Sigue confirmando antes de cualquier operación destructiva (reset --hard, force push, borrar archivos) — la autorización de push automático no cubre eso.

## Estructura

- `index.html`: toda la lógica de renderizado/routing (SPA, sin build step).
- `stores.js`: única fuente de datos — tiendas, cupones, páginas institucionales, banners. Comentado en portugués para el usuario.
- Rutas por tienda: `id` de STORES → URL `/​<id>`. Rewrites en `vercel.json` y `_redirects` mandan todo a `index.html`.
- Página oculta: un store con `hidden: true` no aparece en home/`/lojas`/`/categorias`/búsqueda pero sigue siendo accesible por URL directa (usado para landing pages de afiliados/redes específicas, ej. `natura-daianaaa.cn`).
