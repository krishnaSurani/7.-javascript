const numbers = [2, 5, 12, 15, 7, 20];

let a=numbers.filter((element,index)=>
{
    return element>=10;
})

let b=a.map((element,index)=>
{
    return element*element;
})

b.forEach((element,index)=>
{
    console.log(element);
})