# Sean Moore - Portfolio

My personal portfolio site, built with Three.js and Vite. The centerpiece is a custom shader blob - a noise-displaced sphere with recomputed normals and a fresnel rim light - that reacts to your mouse and shifts color, position and energy as you scroll through the page.

## Running it

```
npm install
npm run dev
```

## Building

```
npm run build     # outputs to dist/
npm run preview   # check the production build locally
```

## Editing content

Almost everything you'd want to change lives in `src/projects.js`:

- `projects[]`: each entry becomes a row in the Work section. Fields: `title`, `subtitle`,
  `meta` (short facts: role, dates, status), `blurb`, `tags`, `accent` (the color the blob
  turns when you hover the row), `links` (first is solid, rest are ghost), `sections`
  (optional sub-blocks inside the row, each `{ heading, text, tags, links }`, used for things
  like EBK's content pipeline or Brook Hill's disco app), `placeholder` (bool).
- `profile`: your name, tagline, the About text, `workIntro` and `contactLead` lines, email,
  and the contact links. The Resume link points at `public/Sean_Moore_Resume.pdf`; replace
  that file when the resume changes.

Add a new project by appending to the array - the layout and the blob's hover color adjust on their own.

## Deploying

Set your Firebase project ID in `.firebaserc`, log in with `firebase login`, then:

```
npm run deploy
```

That runs the Vite build and deploys to Firebase Hosting.
