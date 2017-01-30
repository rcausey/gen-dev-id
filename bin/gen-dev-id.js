#!/usr/bin/env node

const yargs = require('yargs');
const argv = yargs
    .usage('Usage: $0 -o [output path]')
    .demandOption(['o'])
    .argv;

const fs = require('fs');
const randomstring = require('randomstring');

const root = fs.realpathSync(`${__dirname}/..`);
console.log(root);