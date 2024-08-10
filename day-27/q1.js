function number(num) {
    if (num < 0) {
        throw new Error("Negative number");
    }
    return num;
}

try {
    console.log(number(19)); 
    console.log(number(-86)); 
} catch (error) {
    console.error(error.message); 
}
