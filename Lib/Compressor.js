module.exports.compressorLZW = input => { 
    // initializing Dictionary of ASCII extended characters
    let dicCapacity = 256;
    let dictionary = {};
    
    for (let i=0; i < dicCapacity; ++i)
        dictionary[String.fromCharCode(i)] = i;
    
    let series = input[0];
    let output = [];

    for(let i=1; i< input.length; ++i){
        if(series+String.fromCharCode(input[i]) in dictionary)
            series += String.fromCharCode(input[i]);
        else{
            dictionary[series+String.fromCharCode(input[i])] = dicCapacity++;
            output.push(dictionary[series]);
            series = String.fromCharCode(input[i]);
        }
    }
    output.push(dictionary[series]);
    output.join('');
    return output;
}

// module.exports.encode = Data =>
// {
//     try
//     {
//         let dictionary = {},
//             out = [],
//             currentChar,
//             phrase = Data[0],
//             code = 57344;
//         Data = (Data + "").split("");
    
//         for (let i = 1; i < Data.length; i++)
//         {
//             currentChar = Data[i];
            
//             if (dictionary[phrase + currentChar] != null)
//                 phrase += currentChar;
//             else
//             {
//                 out.push(phrase.length > 1 ? dictionary[phrase] : phrase.codePointAt(0));
//                 dictionary[phrase + currentChar] = code;
//                 code++;
//                 phrase = currentChar;
//             }
//         }
//         out.push(phrase.length > 1 ? dictionary[phrase] : phrase.codePointAt(0));
        
//         return out.map(e => String.fromCodePoint(e)).join('');
//     }
//     catch (error)
//     {
//         throw new Error(error);
//     }
// }