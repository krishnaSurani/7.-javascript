let a= ['apple', 'banana', 'cherry', 'date']

let b=a.map((element,index)=>
{
    return element + index
})

console.log(b);