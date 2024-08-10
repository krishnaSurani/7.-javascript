function findIndexOfFirstNegative(numbers) {
    
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 0) {
        return i;
      }
    }
    return 0;
  }
  
  const numbers = [1, 2, -3, 4, -5];
  
  console.log(findIndexOfFirstNegative(numbers));
  