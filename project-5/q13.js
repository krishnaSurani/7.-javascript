function findIndex(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return 0;
}

let array = [1, 2, 3, 4, 5];
let value = 3;


console.log(findIndex(array, value));
