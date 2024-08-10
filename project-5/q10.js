let fruit= ["apple", "banana", "pear"];

let a=fruit.filter((element,index)=>{
    if(element.length > 3)
        {
          return element;
        }
})

console.log(a);