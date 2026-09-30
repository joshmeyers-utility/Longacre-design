import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// tokens.css lives one level up in design-system/ and is the single source of
// truth, so the dev server is allowed to read the repo root.
//
// One HTML file per page, as in Webflow: real page loads, so the
// cross-document view transition (site.css) fades between them.
// PAGE=<name> builds a single page with no shared chunks — the preview
// packer inlines each one into its own self-contained file.
const pages = { index: 'index.html', workforce: 'workforce.html', campus: 'campus.html' };
// Vite runs this file in Node; `globalThis` avoids pulling in @types/node.
const only = (globalThis as { process?: { env: Record<string, string | undefined> } }).process?.env.PAGE as keyof typeof pages | undefined;

export default defineConfig({
  plugins: [react()],
  server: { fs: { allow: ['..'] } },
  build: {
    outDir: only ? `dist-${only}` : 'dist',
    rollupOptions: { input: only ? { [only]: pages[only] } : pages },
  },
});
