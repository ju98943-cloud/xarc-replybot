# XARC Auto Reply — Deploy Guide

Full source of the XARC Auto Reply website (TanStack Start + React 19 + Tailwind v4).

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:8080

Build for production:

```sh
npm run build
```

## Deploy to Vercel

1. Push this folder to a GitHub repo (or run `npx vercel` from here).
2. Import the repo on vercel.com.
3. Framework preset: **Other**. Build command `npm run build`, install `npm install`.
4. `vercel.json` already sets `NITRO_PRESET=vercel`.
5. Deploy.

## Deploy to Netlify

1. Push this folder to a GitHub repo (or run `npx netlify deploy --build`).
2. New site -> import the repo.
3. `netlify.toml` already sets the build command, publish dir and `NITRO_PRESET=netlify`.
4. Deploy.

## Notes

- Node 20+ required.
- No backend, database or environment variables needed.
- Content lives in `src/components/site/*`; page metadata in `src/routes/index.tsx`.
- Logo/favicon: `src/assets/xarc-logo.png` and `public/favicon.png`.
