function logSquares(numbers) {
    
    let ans=numbers.forEach((element,index) => {
        return element * element
    })

    return ans;

}


const numbers = [1, 2, 3];
console.log(logSquares(numbers));
