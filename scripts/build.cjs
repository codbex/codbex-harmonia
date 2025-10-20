const fs = require('fs');

fs.rmSync('dist', { recursive: true, force: true });

// fs.readdir('./src/components', (err, files) => {
//     files.forEach((file) => {
//         const filename = file.substring(0, file.lastIndexOf('.'));
//         build({
//             entryPoints: [`src/components/${filename}.js`],
//             outfile: `dist/${filename}.min.js`,
//             bundle: true,
//             minify: true,
//             sourcemap: false,
//             platform: 'browser',
//             define: { CDN: 'false' },
//         });
//     });
// });

build({
  entryPoints: [`src/index.js`],
  outfile: `dist/harmonia.min.js`,
  bundle: true,
  minify: false,
  sourcemap: true,
  platform: 'browser',
  define: { CDN: 'true' },
});

build({
  entryPoints: [`src/module.js`],
  outfile: `dist/harmonia.esm.js`,
  bundle: true,
  bundle: true,
  platform: 'neutral',
  mainFields: ['main', 'module'],
});

function build(options) {
  options.define || (options.define = {});
  options.define['process.env.NODE_ENV'] = process.argv.includes('--watch') ? `'production'` : `'development'`;

  return require('esbuild')
    .build({
      ...options,
    })
    .catch(() => process.exit(1));
}
