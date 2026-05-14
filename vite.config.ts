// Vercel-ready TanStack Start config
// Uses Nitro for Vercel server output instead of Cloudflare Worker output.
import { nitro } from "nitro/vite";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Disable Lovable's Cloudflare build plugin so Vercel/Nitro owns the deploy output.
  cloudflare: false,
  plugins: [nitro({ preset: "vercel" })],
  tanstackStart: {
    server: { entry: "server" },
  },
});
