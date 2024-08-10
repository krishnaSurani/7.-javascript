function findIndexOfChar(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return 0;
}

let str = "Hello";
let char = 'o';


console.log(findIndexOfChar(str, char));
