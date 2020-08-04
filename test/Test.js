const fs = require('fs');
const encode = require('../lib/Arithmetic-Coding/encode')
const decode = require('../lib/Arithmetic-Coding/decode')

encode.encode(path.resolve(__dirname, './txt/testResult.txt'), path.resolve(__dirname, './txt/short-encoded.ac'))

decode.decode(path.resolve(__dirname, './txt/short-encoded.ac'), path.resolve(__dirname, './txt/tested.txt'))