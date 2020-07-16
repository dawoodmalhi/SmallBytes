module.exports.decode = dataAsText =>
{
    try
    {
        let data = [dataAsText].map(e => e.codePointAt(0)),
            dictionary = {},
            currentChar = String.fromCodePoint(data[0]),
            oldPhrase = currentChar,
            out = [currentChar],
            code = 57344,
            phrase;
        
        for (let i = 1; i < data.length; i++)
        {
            let currentCode = data[i];
            
            if (currentCode < 57344)
                phrase = String.fromCodePoint(data[i]);
            else
                phrase = dictionary[currentCode] ? dictionary[currentCode] : (oldPhrase + currentChar);
        
            out += phrase;
            currentChar = phrase[0];
            dictionary[code] = oldPhrase + currentChar;
            code++;
            oldPhrase = phrase;
        }
        
        return out;
    }
    catch (error)
    {
        throw new Error(error);
    }
}