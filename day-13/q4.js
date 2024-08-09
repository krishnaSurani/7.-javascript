let a = 0;
let b = 1;


for (let i = 0; i < 10; i++) {
    if (i <= 1) {
        console.log(i); 
    } 
    else {
        let c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}