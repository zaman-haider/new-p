# Vercel Deploy Notes

This project has been adjusted for Vercel deployment.

## What changed

- Added `nitro` as a dev dependency.
- Updated `vite.config.ts` to use Nitro with the `vercel` preset.
- Disabled the Cloudflare build plugin for Vercel builds.
- Removed the old SPA rewrite from `vercel.json` because Nitro now generates the correct Vercel routing output.
- Moved the Google Fonts import to the top of `src/styles.css` to remove the CSS build warning.

## Vercel settings

Use these in Vercel if it asks:

- Framework Preset: Vite / Other
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: leave blank / default

Nitro generates `.vercel/output` automatically during build.

## Local test

```bash
npm install
npm run build
npx vite preview
```
