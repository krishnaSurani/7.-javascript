function b(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return true;
        }
    }
    return false;
}

let str = "Hello";
let char = 'a';


console.log(b(str, char));
