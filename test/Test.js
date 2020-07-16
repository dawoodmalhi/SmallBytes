const fs = require('fs');
const compress = require("../lib/Compressor")
const decompress = require("../lib//Decompressor")

const inputFile = "test.txt";
const outputFile = "tested.txt";

let data = fs.readFileSync(inputFile, 'utf8');

let EncodedData = compress.encode(data);

//fs.writeFileSync(outputFile, EncodedData);

let DecodedData = decompress.decode(EncodedData)

//fs.writeFileSync(outputFile, DecodedData);

console.log(DecodedData);