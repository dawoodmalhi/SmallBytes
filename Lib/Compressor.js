module.exports.compressorLZW = input =>
{
    try
    {
        if (!input) return input;       // Checking the empty input

        let dict = new Map();
        let data = (input + "").split("");             // Slicing data into characters 
        let compressed = [];                           // Output Array
        let currChar;
        let phrase = data[0];                         // Works as an element of dictionary
        let code = 256;                               // Starting Dictionary


        for(let i=1; i < input.length; i++)
        {
            if (dict.has(phrase + currChar))            // If dictionary has that combination of characters just add it into phrase
                phrase += currChar;
            else
            {
                compressed.push (phrase.length > 1 ? dict.get(phrase) : phrase.codePointAt(0));
                dict.set(phrase + currChar, code);
                code++;

                if (code === 0xd800)
                    code = 0xe000;
                phrase = currChar;
            }
        }
        compressed.push (phrase.length > 1 ? dict.get(phrase) : phrase.codePointAt(0));
        
        for (let i = 0; i < compressed.length; i++)
            compressed[i] = String.fromCodePoint(compressed[i]);

        return compressed.join("");
    }
    catch (error)
    {
        throw new Error(error);
    }
}