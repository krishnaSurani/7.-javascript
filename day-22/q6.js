function capitalizeWords(sentence) {
    let b="";
    for(let i=0; i<sentence.length; i++)
        {
            if(i==0 || sentence[i-1]==" ")
            {
               b+=sentence[i].toUpperCase()
            }
            else{
                b+=sentence[i]
            }
        }

        return b;
}
let sentence="hello world";


console.log(capitalizeWords(sentence));
