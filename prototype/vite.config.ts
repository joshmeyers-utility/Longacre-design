import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// tokens.css lives one level up in design-system/ and is the single source of
// truth, so the dev server is allowed to read the repo root.
export default defineConfig({
  plugins: [react()],
  server: { fs: { allow: ['..'] } },
});
