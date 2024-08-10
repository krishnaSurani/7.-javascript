function  filterEvenNumbers(numbers) {
    
    let fil=numbers.filter((element,index)=>{
        return element %2==0;
    })
    return fil;
}

let numbers = [1, 2, 3, 4, 5, 6];
console.log(filterEvenNumbers(numbers));