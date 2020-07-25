// const fs = require('fs');
// const compress = require("../lib/Compressor")
// const decompress = require("../lib/Decompressor")

// const inputFile = "testSmall.txt";
// const outputFile = "testResult.txt";

// // let data = fs.readFileSync(inputFile, 'utf8');

// //let data = "abacabcabc";
// // Expected output = [97,98,97,99,256,259,98,99]

// let EncodedData = compress.compressorLZW(data)

// let outputToBeWritten = EncodedData.join('\r\n');

// fs.writeFileSync(outputFile, outputToBeWritten);

// // let DecodedData = decompress.decompressorLZW(EncodedData)

// // fs.writeFileSync(outputFile, DecodedData);

// // console.log(DecodedData);