'use strict';

var fs = require('fs');

mkdir('./github_pages/dist');
mkdir('./github_pages/node_modules');

copyFile('index.html', 'github_pages');
copyFile('dist/harmonia.min.js', 'github_pages');
copyFile('node_modules', 'github_pages/node_modules');

function mkdir(dir) {
  if (!fs.existsSync(dir)) {
    const result = fs.mkdirSync(dir, { recursive: true });
    if (result) {
      console.info(`Directory '${dir}' created`);
    }
  }
}

function copyFile(path, to) {
  fs.cpSync(`./${path}`, `${to}/${path}`, { recursive: true });
  console.info(`${path} copied to ${to}`);
}
