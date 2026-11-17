# Portafolio — Luis Arturo Morales

Portafolio personal (QA Engineer y desarrollador de software). Sitio estático hecho con [Astro](https://astro.build) y Tailwind CSS 4, con estilo de IDE/terminal, en español, inglés y francés.

Publicado en: https://portafolio-one-wine-20.vercel.app

## Uso

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # revisa tipos (astro check) y genera dist/
npm run preview  # sirve dist/ localmente
```

## Editar contenido (sin tocar el diseño)

| Qué | Archivo |
|---|---|
| Correo, GitHub, LinkedIn, ruta del CV | `src/data/profile.ts` |
| Experiencia laboral y educación | `src/data/experience.ts` |
| Proyectos (texto, tecnologías, enlaces) | `src/data/projects.ts` |
| Capturas de los proyectos | `src/assets/projects/` (Astro las optimiza a WebP) |
| Habilidades | `src/data/skills.ts` |
| Certificaciones | `src/data/certifications.ts` |
| Textos de la interfaz por idioma | `src/i18n/es.ts`, `en.ts`, `fr.ts` |

Si un repositorio de proyecto se vuelve público, agrega `githubUrl` en `src/data/projects.ts` y la tarjeta muestra el botón de GitHub en lugar de "Repositorio privado". Lo mismo con `liveUrl` para la demo.

## Diseño e intro

Estilo IDE/terminal: cada sección es una ventana (`src/components/Window.astro`), con JetBrains Mono y los colores en `src/styles/global.css` (`@theme`).

Al cargar, una intro de unos 7 s muestra a varios "agentes de IA" (`src/data/agents.ts`) construyendo la página mientras el nombre se teclea en la terminal. Está en `src/components/Intro.astro`:

- Se puede saltar con el botón o con `Esc`.
- No se reproduce si el sistema tiene activado "reducir movimiento", y sin JavaScript la página se ve completa.
- Los elementos que se "construyen" llevan `data-build`; los textos que se teclean llevan `data-type`.

## Idiomas

`/` español (predeterminado), `/en/` inglés y `/fr/` francés. Cada idioma es una página estática con su `hreflang`, así que los buscadores indexan las tres.

## CV

El PDF que se descarga es `public/cv.pdf`. Su fuente editable es `cv/cv.html`: ábrelo en Chrome → Imprimir → Guardar como PDF (tamaño Carta, márgenes "Ninguno", con gráficos de fondo) y reemplaza `public/cv.pdf`.

## Despliegue

Vercel detecta Astro solo (build `npm run build`, salida `dist`). Si cambia el dominio, actualiza `SITE` en `astro.config.mjs`, `public/robots.txt` y los enlaces en `cv/cv.html`.
