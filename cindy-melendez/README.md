# Casas para eventos: cindymelendez.inmoapp.mx

Sitio web (Paquete 1 · Esencial) para renta de casas para eventos sociales.

## Dónde se cambia cada cosa

| Qué | Archivo |
| --- | --- |
| Nombre, WhatsApp, correo, redes, dominio | `src/data/negocio.ts` → `negocio` |
| Casas, precios, qué incluye, fechas ocupadas | `src/data/negocio.ts` → `casas` |
| Fotos | Guárdalas en `public/fotos/` y ponlas como `src: '/fotos/archivo.jpg'` |
| Diseño general (colores, menú, pie) | `src/components/Layout.astro` |

## Páginas

- `/`: inicio con buscador, catálogo, calendario y cotización
- `/casas/<slug>/`: ficha de cada casa con galería, calendario, mapa y QR
- `/links/`: página «un solo link» para redes sociales, con QR general

## Probar en tu computadora

```bash
npm install
npm run dev
```

## Publicar (Netlify)

1. En Netlify: **Add new site → Import from GitHub** y elige este repositorio.
2. **Base directory:** `cindy-melendez` (lo demás lo toma de `netlify.toml`).
3. En **Domain management**, agrega `cindymelendez.inmoapp.mx`.
4. En el DNS de `inmoapp.mx`, crea un registro **CNAME**: nombre `cindymelendez` → `<tu-sitio>.netlify.app`.
