module.exports.encode = Data =>
{
    try
    {
        let dictionary = {},
            out = [],
            currentChar,
            phrase = Data[0],
            code = 57344;
        Data = (Data + "").split("");
    
        for (let i = 1; i < Data.length; i++)
        {
            currentChar = Data[i];
            
            if (dictionary[phrase + currentChar] != null)
                phrase += currentChar;
            else
            {
                out.push(phrase.length > 1 ? dictionary[phrase] : phrase.codePointAt(0));
                dictionary[phrase + currentChar] = code;
                code++;
                phrase = currentChar;
            }
        }
        out.push(phrase.length > 1 ? dictionary[phrase] : phrase.codePointAt(0));
        
        return out.map(e => String.fromCodePoint(e)).join('');
    }
    catch (error)
    {
        throw new Error(error);
    }
}