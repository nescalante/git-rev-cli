#!/usr/bin/env node

const argv = require('yargs').argv;
const git = require('git-rev-sync');
const files = argv._;
const bluebird = require('bluebird');
const fs = require('fs');

bluebird.promisifyAll(fs);

module.exports = bluebird.map(files, (filePath) => {
  const json = JSON.stringify({
    commit: git.long(),
    tag: git.tag() || '',
    branch: git.branch() || '',
    date: new Date().toISOString(),
  }, null, 2);

  return fs.writeFileAsync(filePath, json, 'utf8');
});
