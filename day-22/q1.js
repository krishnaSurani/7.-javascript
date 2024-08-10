function doubleAndAddIndex(numbers) {
    

    let ans=numbers.map((element,index)=>{
        return element *2 + index;
    })

    return ans;
}
let numbers = [2, 3, 4];
console.log(doubleAndAddIndex(numbers));