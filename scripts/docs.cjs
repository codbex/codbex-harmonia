'use strict';

var fs = require('fs');

const harmoniaFiles = fs.globSync('dist/*');

harmoniaFiles.forEach((file) => {
  copyFile(file, 'docs/public/harmonia', false);
});

copyFile('node_modules/@fontsource/open-sans/files/open-sans-latin-300-italic.woff2', 'docs/public/fonts', false);
copyFile('node_modules/@fontsource/open-sans/files/open-sans-latin-400-italic.woff2', 'docs/public/fonts', false);
copyFile('node_modules/@fontsource/open-sans/files/open-sans-latin-500-italic.woff2', 'docs/public/fonts', false);
copyFile('node_modules/@fontsource/open-sans/files/open-sans-latin-600-italic.woff2', 'docs/public/fonts', false);
copyFile('node_modules/@fontsource/open-sans/files/open-sans-latin-700-italic.woff2', 'docs/public/fonts', false);
copyFile('node_modules/@fontsource/open-sans/files/open-sans-latin-800-italic.woff2', 'docs/public/fonts', false);
copyFile('node_modules/@fontsource/open-sans/files/open-sans-cyrillic-300-italic.woff2', 'docs/public/fonts', false);
copyFile('node_modules/@fontsource/open-sans/files/open-sans-cyrillic-400-italic.woff2', 'docs/public/fonts', false);
copyFile('node_modules/@fontsource/open-sans/files/open-sans-cyrillic-500-italic.woff2', 'docs/public/fonts', false);
copyFile('node_modules/@fontsource/open-sans/files/open-sans-cyrillic-600-italic.woff2', 'docs/public/fonts', false);
copyFile('node_modules/@fontsource/open-sans/files/open-sans-cyrillic-700-italic.woff2', 'docs/public/fonts', false);
copyFile('node_modules/@fontsource/open-sans/files/open-sans-cyrillic-800-italic.woff2', 'docs/public/fonts', false);
copyFile('node_modules/@fontsource/open-sans/files/open-sans-latin-300-normal.woff2', 'docs/public/fonts', false);
copyFile('node_modules/@fontsource/open-sans/files/open-sans-latin-400-normal.woff2', 'docs/public/fonts', false);
copyFile('node_modules/@fontsource/open-sans/files/open-sans-latin-500-normal.woff2', 'docs/public/fonts', false);
copyFile('node_modules/@fontsource/open-sans/files/open-sans-latin-600-normal.woff2', 'docs/public/fonts', false);
copyFile('node_modules/@fontsource/open-sans/files/open-sans-latin-700-normal.woff2', 'docs/public/fonts', false);
copyFile('node_modules/@fontsource/open-sans/files/open-sans-latin-800-normal.woff2', 'docs/public/fonts', false);
copyFile('node_modules/@fontsource/open-sans/files/open-sans-cyrillic-300-normal.woff2', 'docs/public/fonts', false);
copyFile('node_modules/@fontsource/open-sans/files/open-sans-cyrillic-400-normal.woff2', 'docs/public/fonts', false);
copyFile('node_modules/@fontsource/open-sans/files/open-sans-cyrillic-500-normal.woff2', 'docs/public/fonts', false);
copyFile('node_modules/@fontsource/open-sans/files/open-sans-cyrillic-600-normal.woff2', 'docs/public/fonts', false);
copyFile('node_modules/@fontsource/open-sans/files/open-sans-cyrillic-700-normal.woff2', 'docs/public/fonts', false);
copyFile('node_modules/@fontsource/open-sans/files/open-sans-cyrillic-800-normal.woff2', 'docs/public/fonts', false);

function copyFile(path, to, recursive = true) {
  const fileName = path.substring(path.lastIndexOf('/') + 1);
  fs.cpSync(`./${path}`, `${to}/${fileName}`, { recursive: recursive });
}
