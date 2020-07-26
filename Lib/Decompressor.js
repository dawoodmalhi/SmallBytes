module.exports.decompressorLZW = compress =>
{
    try
    {
        let dict = new Map();
        let data = Array.from(compress + "");       // Slicing data into characters
        let currChar = data[0];
        let oldPhrase = currChar;
        let decompress = [currChar];                // Output Array
        let code = 256;
        let phrase;

        for (let i = 1; i < data.length; i++)
        {
            let currCode = data[i].codePointAt(0);  // Converting back form bytes to ASCII

            if (currCode < 256)
                phrase = data[i]; 
            else
                phrase = dict.has(currCode) ? dict.get(currCode) : (oldPhrase + currChar);
            decompress.push(phrase);
            let cp = phrase.codePointAt(0);
            currChar = String.fromCodePoint(cp);    // Converting it into byte
            dict.set(code, oldPhrase + currChar);
            code++;
          
            if (code === 0xd800)
                code = 0xe000;
            oldPhrase = phrase;
        }
      return decompress.join("");
    }
    catch (error)
    {
        throw new Error(error);
    }
}