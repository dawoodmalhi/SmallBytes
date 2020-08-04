const assert = require('assert')

module.exports = class FrequencyTable {
 
  constructor (freqs)
  {
    if (freqs instanceof FrequencyTable)
    {
      let symbolLimit = freqs.symbolLimit
      this._frequencies = []
      
      for (let i = 0; i < symbolLimit; i++)
        this._frequencies[i] = freqs.get(i)
    } 
    else
      this._frequencies = Array.from(freqs)

    this._total = this._frequencies.reduce((partialSum, a) => partialSum + a)

    this._cumulative = null
  }

  get symbolLimit ()
  {
    return this._frequencies.length
  }

  get total ()
  {
    return this._total
  }

  getLow (symbol)
  {
    if (symbol === 0)
     return 0
    this._checkSymbol(symbol - 1)

    if (this._cumulative === null)
      this._initCumulative()
    return this._cumulative[symbol - 1]
  }

  getHigh (symbol)
  {
    this._checkSymbol(symbol)
    if (this._cumulative === null)
    {
      this._initCumulative()
    }
    return this._cumulative[symbol]
  }

  /**
   * @param {number} symbol
   */
  get (symbol)
  {
    this._checkSymbol(symbol)
    return this._frequencies[symbol]
  }
  /**
   * @param {number} symbol
   * @param {number} freq
   */
  set (symbol, freq)
  {
    this._checkSymbol(symbol)
    
    let sumFreqOfOthers = this._total - this._frequencies[symbol]
    
    assert (sumFreqOfOthers >= 0, 'Sum of frequency of other symbols should be non-negative')

    this._total = sumFreqOfOthers + freq
    this._frequencies[symbol] = freq
    this._cumulative = null
  }

  /**
   * @param {number} symbol
   */

  increment (symbol)
  {
    this._checkSymbol(symbol)
    this._total += 1
    this._frequencies[symbol] += 1
    this._cumulative = null
  }

  _checkSymbol (symbol)
  {
    if (symbol >= 0 && symbol < this._frequencies.length)
      {}
  }

  _initCumulative ()
  {
    let cumul = Array.from(this._frequencies)
    
    for (let i = 1; i < cumul.length; i++)
      cumul[i] += cumul[i - 1]
    this._cumulative = cumul
  }

  toString ()
  {
    let result = ''
    
    for (let i = 0; i < this._frequencies.length; i++)
      result += `${i}\t${this._frequencies[i]}\n`
    
    return result
  }
}
