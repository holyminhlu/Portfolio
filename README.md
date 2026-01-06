# portfolio-vue

Vue 3 + Vite portfolio (SPA) with Vue Router.

## Local development

```bash
npm install
npm run dev
```

Build & preview:

```bash
npm run build
npm run preview
```

## Deploy to Vercel

This project is configured for Vercel in `vercel.json` and supports Vue Router history mode (deep links won’t 404).

If your Git repo root is `D:\Portfolio` (and the app is inside `portfolio-vue/`):

- In Vercel Import Project, set **Root Directory** to `portfolio-vue`.
- Build Command: `npm run build`
- Output Directory: `dist`

If your repo root is already `portfolio-vue/`, you can keep Root Directory empty and deploy directly.