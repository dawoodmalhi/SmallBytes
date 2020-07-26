module.exports.compressorLZW = input =>
{
    try
    {
        if (!input) return input;       // Checking the empty input

        let dict = new Map();                         // Creating a Key, Value pair Object
        let data = Array.from(input + "");            // Slicing data into characters 
        let compressed = [];                          // Output Array
        let currChar;
        let phrase = data[0];                         // Works as an element of dictionary
        let code = 256;                               // Starting Dictionary


        for(let i=1; i < data.length; i++)
        {
            currChar = data[i];

            if (dict.has(phrase + currChar))            // If dictionary has that combination of characters just add it into phrase
                phrase += currChar;
            else
            {                                           // If phrase is consisted on single letter push ASCII of it else get it from dict 
                compressed.push (phrase.length > 1 ? dict.get(phrase) : phrase.codePointAt(0));
                dict.set(phrase + currChar, code);      // Set value to new combination in dictionary
                code++;

                if (code === 0xd800)
                    code = 0xe000;
                phrase = currChar;
            }
        }
        compressed.push (phrase.length > 1 ? dict.get(phrase) : phrase.codePointAt(0));
        
        for (let i = 0; i < compressed.length; i++)      // Converting it into byte
            compressed[i] = String.fromCodePoint(compressed[i]);

        return compressed.join("");
    }
    catch (error)
    {
        throw new Error(error);
    }
}