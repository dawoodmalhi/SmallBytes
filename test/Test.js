const fs = require('fs');
const compress = require('../lib/Compressor')
const decompress = require('../lib//Decompressor')
const multer = require('multer');

// const inputFile = "test.txt";
// const outputFile = "tested.txt";

// let data = fs.readFileSync(inputFile, 'utf8');

// let EncodedData = compress.compressorLZW(data)

// fs.writeFileSync(outputFile, EncodedData);

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  var upload = multer({ storage: storage });

  var multer = require('multer')
var upload = multer().single('avatar')

app.post('/profile', function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
    } else if (err) {
      // An unknown error occurred when uploading.
    }

    // Everything went fine.
  })
})


// let DecodedData = decompress.decode(EncodedData)

// //fs.writeFileSync(outputFile, DecodedData);

// console.log(DecodedData);