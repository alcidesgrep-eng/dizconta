# dizconta

Sitio estático (SPA) de cupones. Deploy automático al hacer push a `main` en `github.com/alcidesgrep-eng/dizconta`.

**Hosting real: Hostinger (hPanel), NO Vercel.** Confirmado por headers del servidor (`platform: hostinger`, `Server: hcdn`) el 2026-08-08. El `vercel.json` en el repo es un archivo viejo/vestigial — no hay Vercel Functions activas ni nada bajo `/api` se ejecuta como serverless; cualquier ruta no estática cae al `index.html` del SPA (comportamiento normal de Hostinger para un sitio estático). Si se necesita lógica de servidor (ej. OAuth callbacks, cron jobs), no se puede depender de un directorio `/api` estilo Vercel — hay que usar las herramientas de Hostinger (`hosting_deployJsApplication`, Node.js app hosting) o correr la lógica fuera del hosting (ej. como tarea programada de Claude que hace el trabajo y comitea el resultado).

## Integración Mercado Livre (API)

- App creada en developers.mercadolivre.com.br bajo la cuenta de **Valeska Valentina** (socia, la que está en el programa de afiliados de Natura/ML — Alcides no tiene cuenta de afiliado ahí).
- Client ID, Client Secret, refresh_token, etc. están en `dizconta/.env` (nunca en git, ver `.gitignore`).
- El refresh_token no expira (scope incluye `offline_access`) — no hace falta repetir el flujo OAuth con QR de nuevo, solo usar `grant_type=refresh_token` contra `https://api.mercadolibre.com/oauth/token` para obtener access_tokens frescos cuando se necesiten.
- `dizconta/api/ml-callback.js` fue el endpoint pensado para el intercambio OAuth inicial, pero como el sitio no corre en Vercel nunca llegó a ejecutarse — el intercambio del primer `code` se hizo manualmente por curl. Queda en el repo pero no está en uso; se puede borrar si estorba.

## Workflow

- Después de hacer cambios en `index.html` o `stores.js`, haz commit y push directo a `main` sin pedir confirmación — el usuario lo pidió explícitamente ("el otro chat ya subía directo las actualizaciones"). Esto dispara el deploy en Vercel automáticamente.
- Al hacer `git add`, agrega solo los archivos relevantes al cambio (nunca `git add -A`) — el repo suele tener archivos sueltos sin trackear (imágenes nuevas en `img/`) que son trabajo en progreso del usuario y no deben commitearse a menos que se pida explícitamente.
- Sigue confirmando antes de cualquier operación destructiva (reset --hard, force push, borrar archivos) — la autorización de push automático no cubre eso.

## Estructura

- `index.html`: toda la lógica de renderizado/routing (SPA, sin build step).
- `stores.js`: única fuente de datos — tiendas, cupones, páginas institucionales, banners. Comentado en portugués para el usuario.
- Rutas por tienda: `id` de STORES → URL `/​<id>`. Rewrites en `vercel.json` y `_redirects` mandan todo a `index.html`.
- Página oculta: un store con `hidden: true` no aparece en home/`/lojas`/`/categorias`/búsqueda pero sigue siendo accesible por URL directa (usado para landing pages de afiliados/redes específicas, ej. `natura-daianaaa.cn`).
