module.exports = class BitInputStreamFromBuffer
{
  
  /** @param {Buffer} inputBuffer */
  
  constructor(inputBuffer)
  {
    this.buffer = inputBuffer
    this.currentByte = 0
    this.bitsRemaining = 0
  }

  read()
  {
    if (this.currentByte === -1)
      return -1

    if (this.bitsRemaining === 0)
    {
      if (this.buffer.length === 0)
        return this.currentByte = -1
      this.currentByte = this.buffer[0]
      this.buffer = this.buffer.slice(1)
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
    this.currentByte = -1
    this.bitsRemaining = 0
  }
}
