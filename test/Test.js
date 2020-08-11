const LZW = require("../lib/LZW")
const fs = require("fs");
const path = require('path');

let inputFile = path.resolve(__dirname, './testLarge.txt');
let outputFile = path.resolve(__dirname, './done.lzwtxt');
let doneFile = path.resolve(__dirname, './done.txt');

let compressed = LZW.compress(fs.readFileSync(inputFile, 'binary'));
fs.writeFileSync(outputFile, compressed, 'ucs2')


let decompressed = LZW.decompress(fs.readFileSync(outputFile, 'ucs2'));
fs.writeFileSync(doneFile, decompressed, 'binary');