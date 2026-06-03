# PRAKRITI - The Techno Environmental Club of NIT Durgapur

Production-ready React/Vite website for PRAKRITI with an immersive Three.js homepage, data-driven galleries, team archive, sponsor showcase, contact form, and the SHRISHTI digital journal route.

## Tech Stack

- React + Vite + TypeScript
- TailwindCSS
- React Three Fiber + Three.js
- Framer Motion + GSAP
- React Router
- Lenis smooth scrolling

## Media

The project uses a manual data architecture. Images are referenced directly from `public/media` inside the TypeScript data files:

- `src/data/team.ts`
- `src/data/events.ts`
- `src/data/projects.ts`
- `src/data/sponsors.ts`
- `src/data/shrishti.ts`

Adding or removing an item means editing the corresponding data array. There is no generated asset registry, image optimizer, or build-time media pipeline.

## Setup

```bash
npm install
npm run dev
```

The local dev server starts on `http://localhost:5173`.

## Production Build

```bash
npm run build
npm run preview
```

The production output is written to `dist/`.

## Contact Form

By default, the contact form validates the message and prepares an email draft to `prakriti.nitdgp@gmail.com`.

For serverless or third-party email handling, set:

```bash
VITE_CONTACT_ENDPOINT=https://your-contact-endpoint.example/api/contact
```

The form will POST JSON with `name`, `email`, `phone`, and `message`.

## Vercel Deployment

1. Import this folder into Vercel.
2. Use the default build command:

```bash
npm run build
```

3. Use the default output directory:

```bash
dist
```

4. Add `VITE_CONTACT_ENDPOINT` in Vercel Environment Variables when an email endpoint is available.

`vercel.json` includes SPA rewrites for React Router and long-lived caching for media.
