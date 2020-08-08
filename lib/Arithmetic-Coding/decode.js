const fs = require('fs')
const FrequencyTable = require('./frequency-table')
const BitInputStream = require('../bit-stream/bit-input-stream')
const BitInputStreamFromBuffer = require('../bit-stream/bit-input-stream-buffer')
const ArithmeticDecoder = require('./arithmetic-decoder')

const NUM_OF_BITS = 31

/**
 * @param {string} inputfile
 * @param {string} outputfile
 */
function decode (inputfile, outputfile)
{
  const bitin = new BitInputStream(inputfile)
  let freqs = readFrequencies(bitin)

  decompress(freqs, bitin, outputfile)
}

/**
 * @param {Buffer} inBuffer
 */
function decodeFromBuffer (inBuffer)
{
  const bitin = new BitInputStreamFromBuffer(inBuffer)
  let freqs = readFrequencies(bitin)

  return decompressToBuffer(freqs, bitin)
}

function readFrequencies (bitin)
{
  function readInt (n)
  {
    let result = 0

    for (let i = 0; i < n; i++)
    {
      let tmp = bitin.readNoEOF()
      result = result << 1 | tmp
    }

    return result
  }

  let freqs = []

  for (let i = 0; i < 256; i++)
  {
    freqs[i] = readInt(NUM_OF_BITS)
  }

  freqs.push(1)
  return new FrequencyTable(freqs)
}

function decompress (freqs, bitin, outputfile)
{
  let output = fs.openSync(outputfile, 'w')
  let bytes = []
  const dec = new ArithmeticDecoder(NUM_OF_BITS, bitin)

  for (;;)
  {
    let symbol = dec.read(freqs)
    
    if (symbol === 256)
    {
      dec.finish()
      break
    }
    bytes.push(symbol)
  }
  fs.writeSync(output, Buffer.from(bytes), 0, bytes.length, null)
  fs.closeSync(output)
}

/**
 * @param {FrequencyTable} freqs
 * @param {BitInputStreamFromBuffer} bitin
 */

function decompressToBuffer (freqs, bitin)
{
  let buffer = Buffer.alloc(0)
  let bytes = []
  const dec = new ArithmeticDecoder(NUM_OF_BITS, bitin)
  
  for (;;)
  {
    let symbol = dec.read(freqs)

    if (symbol === 256)
    {
      dec.finish()
      break
    }

    bytes.push(symbol)
  }
  buffer = Buffer.from(bytes)
  return buffer
}

module.exports = 
{
  readFrequencies,
  decode,
  decodeFromBuffer
}
