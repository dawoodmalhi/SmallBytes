module.exports.compressorLZW = input =>
{
    try
    {

        // initializing Dictionary of ASCII extended characters
        let dicCapacity = 256;
        let dictionary = {};
       
        let series = input[0];
        let output = [];

        let temp = series+input[1];

        //console.log(temp);

        for (let i=0; i <= dicCapacity; ++i)
            dictionary[String.fromCharCode(i)] = i

        for(let i=1; i< input.length; ++i){
            if(series+input[i] in dictionary)
                series += input[i];
            else{
                dictionary[series+input[i]] = dicCapacity++;
                output.push(dictionary[series]);
                series = input[i];
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