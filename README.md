# Personal Portfolio

A modern, responsive portfolio built with **React + TypeScript + Vite + Tailwind CSS**, featuring a light/dark theme toggle and subtle scroll animations (Framer Motion).

## Tech stack

| Purpose        | Tool                |
| -------------- | ------------------- |
| Build tool     | Vite                |
| Framework      | React 19            |
| Language       | TypeScript          |
| Styling        | Tailwind CSS        |
| Animations     | Framer Motion       |
| Icons          | react-icons         |

## Getting started

```bash
npm install      # install dependencies (only needed once)
npm run dev      # start the local dev server -> http://localhost:5173
npm run build    # type-check + build for production into /dist
npm run preview  # preview the production build locally
```

## Customizing the content (IMPORTANT)

All of your content lives in **one file**:

```
src/data/portfolio.ts
```

Open it and replace the dummy values — name, roles, tagline, socials, about
text, skills, experience, projects, and education. Every section on the page
reads from this file, so you never need to touch the components.

A few extra spots to personalize:

- **Resume:** drop your `resume.pdf` into the `public/` folder, then set
  `resumeUrl: '/resume.pdf'` in `portfolio.ts`.
- **Browser tab title & SEO:** edit the `<title>` and `<meta>` tags in `index.html`.
- **Default theme:** the site defaults to dark mode; change it in
  `src/hooks/useTheme.ts` if you prefer light.
- **Accent color:** edit the `accent` color ramp in `tailwind.config.js`.

## Project structure

```
src/
  data/portfolio.ts      <- EDIT THIS: all your content
  hooks/useTheme.ts      <- light/dark theme logic
  components/
    Navbar.tsx  Hero.tsx  About.tsx  Skills.tsx
    Experience.tsx  Projects.tsx  Education.tsx
    Contact.tsx  Footer.tsx
    ui/                  <- small reusable pieces (Reveal, SectionHeading)
  App.tsx                <- assembles all sections
  index.css              <- Tailwind + global styles
```

## Deploying (free)

The easiest route is **Vercel**:

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, and click **Add New → Project**.
3. Select the repo. Vercel auto-detects Vite — just click **Deploy**.
4. You'll get a live `https://your-name.vercel.app` URL. Every future `git push` redeploys automatically.

(Netlify and GitHub Pages work too; Vercel is the smoothest for Vite.)
