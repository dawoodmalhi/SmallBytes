const fs = require('fs');
const compress = require("../lib/Compressor")
const decompress = require("../lib/Decompressor")

const smallFile = "testSmall.txt";
const largeFile = "testLarge.txt";
const outputFile = "testResult.txt";
const decompressFile = "decompressed.txt";
const mistake = "mistake.txt";

function encode_utf8(s) {
    return encodeURIComponent(s).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
        });
}

function decode_utf8(s) {
    return decodeURIComponent(s.split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

let data = fs.readFileSync(smallFile, 'utf8');
let EncodedData = compress.compressorLZW((data))
fs.writeFileSync(outputFile, EncodedData);

let alien = fs.readFileSync(outputFile, 'utf8');
let DecodedData = decompress.decompressorLZW((alien))
fs.writeFileSync(decompressFile, DecodedData);

let test = "";
let j = 0;
let counter = 0;

for (let i=0; i < data.length; i++)
    {
        if (data[i] == '\n')
            counter++;
        if (data[i] != EncodedData[i])
        {
            if (j == i-1)
                test += data[i]
            else
                test += "\n" + counter + "- " + data[i]
            j = i
        }
    }

// for (let i=0; i < data.length; i++)
//     if (data[i] != EncodedData[i])
//         test += data[i] + "  !=  " + EncodedData[i] + "\n"
fs.writeFileSync(mistake, test);
