module.exports = class Coder
{
  constructor (numbits)
  {

    this._num_state_bits = numbits
    this._full_range = 1 << numbits >>> 0
    this._half_range = this._full_range >>> 1
    this._quarter_range = this._half_range >>> 1
    this._minimum_range = this._quarter_range + 2
    this._maximum_total = this._minimum_range
    this._state_mask = this._full_range - 1
    this._low = 0
    this._high = this._state_mask
  }

  update (freqs, symbol)
  {
    let low = this._low
    let high = this._high

    let range = high - low + 1

    let total = freqs.total
    let symlow = freqs.getLow(symbol)
    let symhigh = freqs.getHigh(symbol)
    

    let newlow = low + Math.floor(range * symlow / total)
    let newhigh = low + Math.floor(range * symhigh / total) - 1
    this._low = newlow
    this._high = newhigh

    while (((this._low ^ this._high) & (this._half_range)) === 0) {
      this._shift()
      this._low = (this._low << 1) & (this._state_mask)
      this._high = (this._high << 1) & (this._state_mask) | 1
    }

    while ((this._low & (~this._high) & (this._quarter_range)) !== 0) {
      this._underflow()
      this._low = (this._low << 1) ^ (this._half_range)
      this._high = ((this._high ^ (this._half_range)) << 1) | this._half_range | 1
    }
  }
}
