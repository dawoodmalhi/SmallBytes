module.exports = class BitOutputStreamToBuffer
{
  constructor ()
  {
    this.bytes = []
    this.currentByte = 0
    this.bitsFilled = 0
  }

  write (bit)
  {
    if (bit !== 0 && bit !== 1)
      throw new RangeError(`Bit to write must be 0 or 1, but got ${bit.toString()}`)
    this.currentByte = (this.currentByte << 1) | bit
    this.bitsFilled += 1

    if (this.bitsFilled === 8)
    {
      this.bytes.push(this.currentByte)
      this.currentByte = 0
      this.bitsFilled = 0
    }
  }

  close ()
  {
    while (this.bitsFilled !== 0)
      this.write(0)
  }
  
  get buffer ()
  {
    return Buffer.from(this.bytes)
  }
}
