import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  build: {
    // sourcemap: true,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
    lib: {
      entry: './src/index.js',
      name: 'Harmonia',
      formats: ['umd'],
      fileName: (format, entryName) => {
        if (entryName === 'index') return `harmonia.${format}.js`;
        return `${entryName}.js`;
      },
    },
  },
});
