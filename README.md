# FarNorth IT Website

Next.js website for FarNorth IT, configured for static export and GitHub Pages.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

The static site is exported to `out/`.

## Preview Static Export

```bash
npm run build
npm run start
```

The `start` script serves the exported `out/` directory.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds the site and deploys `out/` to GitHub Pages when changes are pushed to `main`.

In GitHub, set Pages to use **GitHub Actions** as the source. The custom domain is preserved through `public/CNAME`.

## Contact Form

The contact form uses the existing EmailJS public key, service ID, and template ID from the previous site. It is client-side so it works on static GitHub Pages hosting.
