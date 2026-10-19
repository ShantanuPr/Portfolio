# Shantanu Choudhary — Portfolio

Personal portfolio site built with React, TypeScript, Vite and Tailwind CSS.

**Live:** https://shantanupr.github.io/Portfolio/

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Updating content

All text (summary, experience, projects, GitHub repos, skills, contact) lives in
[`src/data/profile.ts`](src/data/profile.ts). The downloadable resume is
`public/Shantanu_Choudhary_Frontend_Developer_Resume.pdf` and the photo is
`public/profile.webp` (640×800); replace either file to update it.

## Deploy

Every push to `main` builds and publishes the site to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). In the repo's
**Settings → Pages**, the source must be set to **GitHub Actions**.

The site also deploys as-is to Vercel or Netlify (build command `npm run build`, output directory `dist`).
