# Sean Moore 3D Portfolio

A single-page portfolio built with **Three.js + Vite**. The centerpiece is a custom
GLSL shader blob: a noise-displaced sphere with recomputed normals and a fresnel rim
light, which reacts to the mouse and shifts position/color/energy as you scroll through
the Hero, About, Work, and Contact sections.

## Run it

```bash
npm install      # first time only
npm run dev      # open the printed localhost URL
```

## Build for production

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build locally
```

## Editing content

Everything you'd normally change lives in **`src/projects.js`**:

- `projects[]`: each entry becomes a row in the Work section. Fields: `title`, `subtitle`,
  `meta` (short facts: role, dates, status), `blurb`, `tags`, `accent` (the color the blob
  turns when you hover the row), `links` (first is solid, rest are ghost), `sections`
  (optional sub-blocks inside the row, each `{ heading, text, tags, links }`, used for things
  like EBK's content pipeline or [removed]'s public record), `placeholder` (bool).
- `profile`: your name, tagline, the About text, `workIntro` and `contactLead` lines, email,
  and the contact links. The Resume link points at `public/Sean_Moore_Resume.pdf`; replace
  that file when the resume changes.

Add a project by appending another object to the `projects` array, and the accordion row and
the blob's hover color adapt automatically.

## Deploy to Firebase Hosting

1. Put your Firebase project ID in `.firebaserc` (the `"default"` value).
2. Make sure you're logged in: `firebase login` (use `seanchristmoore@gmail.com`).
3. Deploy:

```bash
npm run deploy   # runs vite build, then firebase deploy --only hosting
```

`firebase.json` already points Hosting at the `dist/` folder.
```
