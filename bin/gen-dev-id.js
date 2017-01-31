#!/usr/bin/env node

const yargs = require('yargs');
const argv = yargs
    .usage('Usage: $0 -o [output path] -len [num]')
    .demandOption(['o'])
    .default('len', 5)
    .argv;

const process = require('process');
const fs = require('fs');
const randomstring = require('randomstring');

const root = process.cwd();
const outputPath = `${root}/${argv.o}`;

const id = fs.existsSync(outputPath)
  ? fs.readFileSync(outputPath)
    .toString().replace(/\s*/g, '') // Remove whitespace added by editors
  : randomstring.generate({
    length: argv.len,
    charset: '0123456789abcdefghijklmnopqrstuvwxyz',
  });

fs.writeFileSync(outputPath, id);

console.log(`DEV_UNIQUE_ID = ${id}`); // eslint-disable-line no-console
