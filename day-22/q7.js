function  transformArray (numbers) {
    
    let ans=numbers.map((element,index)=>{
        if(element%2==0)
        {
            return element * element ;
        }
        else {
            return element * element * element;
        }
    })
    return ans

}

let numbers=[1, 2, 3, 4, 5];
console.log(transformArray (numbers));