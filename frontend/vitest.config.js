/// vite.config.js or vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    setupFiles: ['./setupTests.js'], // path to the file
    environment: 'jsdom',
  },
});
