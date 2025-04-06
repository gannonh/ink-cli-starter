import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['source/**/*.test.{ts,tsx}', 'test/e2e/**/*.test.{ts,tsx}'],
    exclude: ['node_modules/**', 'dist/**', 'orig-source/**'],
    setupFiles: ['test/setup/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: ['node_modules/**', '*.test.*', 'orig-source/**', 'dist/**', `test/setup/**`, `vitest.config.ts`],
    },
    watch: false,
  },
});
