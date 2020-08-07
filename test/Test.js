const encode = require('../lib/Arithmetic-Coding/encode')
const decode = require('../lib/Arithmetic-Coding/decode')
const path = require('path')

encode.encode(path.resolve(__dirname, './testLarge.txt'), path.resolve(__dirname, './short-encoded.ac'))

decode.decode(path.resolve(__dirname, './short-encoded.ac'), path.resolve(__dirname, './tested.txt'))