module.exports.compressorLZW = input =>
{
    try
    {
        // initializing Dictionary of ASCII extended characters
        let dicCapacity = 256;
        let dictionary = {};
       
        let series = input[0];
        let output = [];

        for (let i=0; i < dicCapacity; ++i)
            dictionary[String.fromCharCode(i)] = i;

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
    catch (error)
    {
        throw new Error(error);
    }
}