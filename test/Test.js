var fs = require('fs');

const inputFile = "test.txt";

let data = fs.readFileSync(inputFile, 'utf8');

//console.log(data);