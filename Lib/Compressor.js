module.exports.compressorLZW = input =>
{
    try
    {
        if (!input) return input;       // Checking the empty input

        var dict = []
        var data = (input + "").split("");             // Slicing data into characters 
        var compressed = [];                           // Output Array
        var currChar;
        var phrase = data[0];                         // Works as an element of dictionary
        var code = 256;                               // Starting Dictionary


        for(let i=1; i< input.length; i++)
        {
            if (dict.has(phrase + currChar))            // If dictionary has that combination of characters just add it into phrase
                phrase += currChar;
            else
            {
                dictionary[phrase+input[i]] = code++;
                output.push(dictionary[phrase]);
                phrase = input[i];
            }
        }
        output.push(dictionary[phrase]);
        output.join('');
        return output;
    }
    catch (error)
    {
        throw new Error(error);
    }
}