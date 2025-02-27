'use strict';

var fs = require('fs');

mkdir('./github_pages/dist');

copyFile('index.html', 'github_pages');
copyFile('dist/harmonia.umd.js', 'github_pages');

function mkdir(dir) {
  if (!fs.existsSync(dir)) {
    const result = fs.mkdirSync(dir, { recursive: true });
    if (result) {
      console.info(`Directory '${dir}' created`);
    }
  }
}

function copyFile(path, to) {
  fs.copyFileSync(`./${path}`, `${to}/${path}`);
  console.info(`${path} copied to ${to}`);
}
