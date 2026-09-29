# Harsha Narra — Hardware & Computer Architecture

A responsive React portfolio for Harshavardhan Reddy Narra, with an interactive processor illustration, six technical case studies, research, experience, education, and contact links.

## Development

Requires Node.js 20 or newer.

- Install dependencies: `npm ci`
- Start Vite: `npm run dev`
- Build production assets: `npm run build`
- Preview the production build: `npm run preview`

## Content

Edit `src/data/portfolio.js` for profile information, project results and methodology, employment, education, publications, and certifications. Results were updated from the September 2026 resume. Keep measurement context with performance claims.

Replace `public/resume.pdf` when updating the resume. All résumé links use `/cv.html`, which preserves the existing Cloudflare pageview tracking and redirects to the PDF. Contact uses direct email links and an email-copy button.

## Design and accessibility

The visual system lives in `src/index.css`: warm paper, forest green, terracotta, Inter, Instrument Serif, and JetBrains Mono. Illustrations are local SVG React components, not external images. The processor illustration has three selectable views.

Projects can be filtered by discipline. Case studies use a native modal dialog with keyboard focus containment, Escape to close, focus restoration, and scroll locking. Navigation, visible focus indicators, a skip link, reduced-motion preferences, and print styles are included.

## Deployment

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on pushes to `main`. It runs `npm ci` and `npm run build`, uploads `dist/`, and deploys using the Pages environment. The public site is https://harsha240yeager.github.io/.

The site is hosted at the domain root. Keep Vite's base path at its default unless moving to a project subpath.
