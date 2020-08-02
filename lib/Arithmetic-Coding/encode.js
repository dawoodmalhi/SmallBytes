const fs = require('fs')
const FrequencyTable = require('./frequency-table')
const BitOutputStream = require('../bit-stream/bit-output-stream')
const BitOutputStreamToBuffer = require('../bit-stream/bit-output-stream-buffer')
const ArithmeticEncoder = require('./arithmetic-encoder')

const CACHE_SIZE = 20000
const NUM_OF_BITS = 31

/**
 * @param {string} inputfile
 */
function getFrequencies (inputfile)
{
  let input = fs.openSync(inputfile, 'r')
  let freqs = new FrequencyTable( new Array(257).fill(0))
  const temp = Buffer.alloc(CACHE_SIZE)
  let bytesRead
  
  for (;;)
    if ((bytesRead = fs.readSync(input, temp, 0, temp.length, null)) === 0)
      break
    else
      for (let i = 0; i < bytesRead; i++)
        freqs.increment(temp[i])
  return freqs
}

/**
 * @param {Buffer} buffer
 */
function getFrequenciesFromBuffer (buffer)
{
  let freqs = new FrequencyTable( new Array(257).fill(0))

  for (let byte of buffer)
    freqs.increment(byte)
  return freqs
}

/**
 * @param {string} inputfile
 * @param {string} outputfile
 */
function encode (inputfile, outputfile)
{
  let freqs = getFrequencies(inputfile)

  freqs.increment(256)

  const bitout = new BitOutputStream(outputfile)

  writeFrequencies(bitout, freqs)
  compress(freqs, inputfile, bitout)
}

/**
 * @param {Buffer} inBuffer
 */
function encodeFromBuffer (inBuffer)
{
  let freqs = getFrequenciesFromBuffer(inBuffer)
  freqs.increment(256)

  const bitout = new BitOutputStreamToBuffer()

  writeFrequencies(bitout, freqs)
  compressFromBuffer(freqs, inBuffer, bitout)
  return bitout.buffer
}

/**
 * @param {BitOutputStream} bitout
 * @param {FrequencyTable} freqs
 */
function writeFrequencies (bitout, freqs)
{
  for (let i = 0; i < 256; i++) {
    writeInt(bitout, NUM_OF_BITS, freqs.get(i))
  }
}

/**
 *
 * @param {BitOutputStream} bitout
 * @param {number} numbits
 * @param {byte} value
 */
function writeInt (bitout, numbits, value)
{
  for (let i = numbits - 1; i >= 0; i--) {
    bitout.write((value >> i) & 1)
  }
}

/**
 *
 * @param {FrequencyTable} freqs
 * @param {string} inputfile
 * @param {BitOutputStream} bitout
 */
function compress (freqs, inputfile, bitout)
{
  let enc = new ArithmeticEncoder(NUM_OF_BITS, bitout)
  let input = fs.openSync(inputfile, 'r')

  for (;;)
  {
    const temp = Buffer.alloc(CACHE_SIZE)
    let bytesRead = fs.readSync(input, temp, 0, temp.length, null)
    
    if (bytesRead === 0)
      break
    else
      for (let i = 0; i < bytesRead; i++)
        enc.write(freqs, temp[i])
  }
  enc.write(freqs, 256)
  enc.finish()
}

/**
 *
 * @param {FrequencyTable} freqs
 * @param {Buffer} inBuffer
 * @param {BitOutputStreamToBuffer} bitout
 */
function compressFromBuffer (freqs, inBuffer, bitout)
{
  let enc = new ArithmeticEncoder(NUM_OF_BITS, bitout)

  for (let byte of inBuffer)
    enc.write(freqs, byte)
  enc.write(freqs, 256)
  enc.finish()
}

module.exports =
{
  getFrequencies,
  encode,
  encodeFromBuffer
}
