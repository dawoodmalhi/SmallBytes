const Coder = require('./coder')

module.exports = class ArithmeticEncoder extends Coder
{
  /**
   * @param {number} bitCount
   * @param {BitOutputStream} bitOutput
   */
  constructor (bitCount, bitOutput)
  {
    super(bitCount)
    this.output = bitOutput
    this.UnderFlow = 0
  }

  /**
   * @param {*} frequency
   * @param {*} symbol
   */
  write (frequency, symbol)
  {
    this.update(frequency, symbol)
  }

  finish ()
  {
    this.output.write(1)
    this.output.close()
  }

  _shift ()
  {
    let bit = this._low >>> (this._num_state_bits - 1)
    this.output.write(bit)

    for (let i = 0; i < this.UnderFlow; i++)
      this.output.write(bit ^ 1)
    this.UnderFlow = 0
  }

  _underflow ()
  {
    this.UnderFlow += 1
  }
}