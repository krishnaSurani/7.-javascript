let a=['a', 'b', 'c', 'd']

let b=a.map((element,index)=>
{
    if(index==1)
    {
        return element='z';
    }
    else{
        return element
    }
})

console.log(b);