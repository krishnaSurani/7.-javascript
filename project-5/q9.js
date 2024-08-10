let number=[1, 2, 3, 4, 5];

let b=number.filter((element,index)=>{
    return element%2==0;
})

console.log(b);