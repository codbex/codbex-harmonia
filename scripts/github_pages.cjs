'use strict';

var fs = require('fs');

mkdir('github_pages');
mkdir('github_pages/dist');

copyFile('index.html', 'github_pages');
copyFile('dist/harmonia.umd.js', 'github_pages');

function mkdir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

function copyFile(path, to) {
  fs.copyFile(`./${path}`, `${to}/${path}`, (err) => {
    if (err) throw err;
  });
}
