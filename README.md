# Harshavardhan Reddy Narra — Portfolio

A creative, animated personal portfolio built with **React + Vite + Tailwind CSS + Framer Motion**, designed to showcase VLSI, Computer Architecture, and RTL design work.

## Stack

- **React 18** + **Vite 5** (fast dev server, instant HMR)
- **Tailwind CSS 3** (utility-first styling, custom theme tokens)
- **Framer Motion** (scroll-driven & entrance animations)
- **Lucide Icons** (clean, consistent iconography)
- Google Fonts: Inter, Space Grotesk, JetBrains Mono

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# open http://localhost:5173

# 3. Production build
npm run build

# 4. Preview the build
npm run preview
```

## Project structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf            # downloadable résumé
├── src/
│   ├── components/
│   │   ├── Background.jsx    # animated mesh + grid background
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx          # animated chip card + marquee
│   │   ├── SectionHeader.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx    # timeline
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx      # project cards w/ metrics
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolio.js      # ALL CONTENT lives here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── index.html
└── package.json
```

## Editing content

All copy, projects, experience, skills, and certifications are stored in **`src/data/portfolio.js`**. Edit that one file to update the entire site — no JSX edits required.

## Deploying

This is a static SPA, so you can deploy to anywhere:

- **Vercel** (recommended): `vercel deploy`
- **Netlify**: drag-and-drop the `dist/` folder after `npm run build`
- **GitHub Pages**: build, then push `dist/` to `gh-pages` branch
- **Cloudflare Pages**: connect the repo, build command `npm run build`, output `dist`

## Customization

- **Colors / accents**: `tailwind.config.js` → `theme.extend.colors.accent`
- **Fonts**: `index.html` (Google Fonts link) + `tailwind.config.js`
- **Background animation**: `src/components/Background.jsx`
- **Hero chip card**: `src/components/Hero.jsx`

## Credits

- Profile data sourced from [linkedin.com/in/harsha240](https://linkedin.com/in/harsha240)
- Icons by [Lucide](https://lucide.dev)
- Built with care.
