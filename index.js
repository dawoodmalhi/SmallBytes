const compressor = require('./lib/Compressor');

let testString = "abcabcabc";

let result = compressor(testString);

console.log(result);