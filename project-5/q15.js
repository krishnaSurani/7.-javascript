function c(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}

let array = [1, 2, 3];
let value = 4;


console.log(c(array, value));
