var express = require('express');
var router = express.Router();
const multer = require('multer');
const LZW = require('../lib/LZW.js');
const bodyParser = require('body-parser');


const fs = require('fs');
const {promisify} = require('util');
// const { route } = require('./users.js');
// const pipeline = promisify(require('stream').pipeline)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Configuring the bodyParser middleware
router.use(
	bodyParser.urlencoded({
		limit: '100mb',
		extended: true,
		parameterLimit: 500000,
	})
);

const upload = multer();
router.post("/upload", upload.single("file"), async function(req, res, next){
  const{
    file,
    body: {name}
  } = req;

  console.log(file.path);
  if(file.detectedFileExtension != ".txt" || file.detectedFileExtension != ".tiff") next(new Error("invlid file type"));
  
  const result = LZW.compress(fs.readFileSync(file.path, 'binary'));
  console.log(result);
  fs.writeFileSync('./public/'+name+'.lzw', result, 'ucs2')

  // const fileName = name + Math.floor(Math.random() * 1000) + file.detectedFileExtension;
  // await pipeline(
  //   file.stream, 
  //   fs.createWriteStream(`${__dirname}/../public/image/${fileName}`)
  // );

  res.send('File uploaded as ' + name);
});

module.exports = router;
