const assert = require('assert')
const Coder = require('./coder')

module.exports = class ArithmeticDecoder extends Coder
{
  /**
   * @param {number} bitCount
   * @param {BitInputStream} bitInput
   */
  constructor (bitCount, bitInput)
  {
    super(bitCount)
    this.input = bitInput
    this.code = 0

    for (let i = 0; i < this._num_state_bits; i++)
      this.code = (this.code << 1) | this.readCodeBit()
  }

  /**
   * @param {FrequencyTable} frequency
   */
  read (frequency)
  {
    let total = frequency.total
    
    let range = ((this._high - this._low) + 1) >>> 0
    let offset = this.code - this._low
    let value = Math.floor((((offset + 1) * total) - 1) / range)
    assert(Math.floor((value * range) / total) >>> 0 <= offset >>> 0)
    assert((value >>> 0 >= 0) && (value >>> 0 < total >>> 0))
    let start = 0
    let end = frequency.symbolLimit
    
    while (end - start > 1)
    {
      let middle = (start + end) >>> 1

      if (value >>> 0 < frequency.getLow(middle))
        end = middle
        else
        start = middle
    }

    assert(start + 1 === end)

    let symbol = start
    assert(
      (Math.floor((range * (frequency.getLow(symbol))) / (total)) >>> 0 <= offset >>> 0) &&
      offset >>> 0 <= Math.floor(range * (frequency.getHigh(symbol)) / (total)) >>> 0)
    
    this.update(frequency, symbol)
    return symbol
  }

  readCodeBit ()
  {
    let temp = this.input.read()

    if (temp === -1)
      temp = 0
    return temp
  }

  _shift ()
  {
    this.code = (this.code << 1) & (this._state_mask) | (this.readCodeBit())
  }
  _underflow ()
  {
    this.code = this.code & (this._half_range) | (
      this.code << 1 & (this._state_mask >>> 1)
    ) | (this.readCodeBit())
  }

  finish ()
  {
    this.input.close()
  }
}