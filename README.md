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

- `projects[]` - each entry is a row in the Work section: title, subtitle, blurb, tags, an accent color (what the blob turns when you hover the row), and links
- `profile` - name, about text, email, contact links

Add a new project by appending to the array - the layout and the blob's hover color adjust on their own.

## Deploying

Set your Firebase project ID in `.firebaserc`, log in with `firebase login`, then:

```
npm run deploy
```

That runs the Vite build and deploys to Firebase Hosting.
