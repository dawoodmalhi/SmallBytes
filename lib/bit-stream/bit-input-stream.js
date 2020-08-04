const fs = require('fs')

const CACHE_SIZE = 20000

module.exports = class BitInputStream
{
  /** @param {string} input */

  constructor (inputFile)
  {
    this.input = fs.openSync(inputFile, 'r')
    this.currentByte = 0
    this.bitsRemaining = 0
    this.cachedBytes = Buffer.alloc(0)
    this.streamEnded = false
  }

  read ()
  {
    if (this.currentByte === -1)
      return -1

    if (this.bitsRemaining === 0)
    {
      if (this.cachedBytes.length === 0)
        if (this.streamEnded)
        {
          this.currentByte = -1
          return -1
        }
        else
        {
          let temp = Buffer.alloc(CACHE_SIZE)
          let numOfBytesRead = fs.readSync(this.input, temp, 0, CACHE_SIZE, null)
          this.cachedBytes = temp.slice(0, numOfBytesRead)
          if (numOfBytesRead < CACHE_SIZE)
            this.streamEnded = true
        }
      this.currentByte = this.cachedBytes[0]
      this.cachedBytes = this.cachedBytes.slice(1)
      this.bitsRemaining = 8
    }
    require('assert')(this.bitsRemaining > 0, 'Number of bits remaining should be positive')
    this.bitsRemaining -= 1
    return (this.currentByte >> this.bitsRemaining) & 1
  }

  readNoEOF ()
  {
    let result = this.read()

    if (result !== -1)
      return result
    else
      throw new Error('Unexpected EOF')
  }

  close ()
  {
    fs.closeSync(this.input)
    this.currentByte = -1
    this.bitsRemaining = 0
  }
}
