// Question: Find the compound interest for $3000 at 8% compounded semi-annually for 4 years.

let principal=3000;
let rate=0.08;
let time=4;
let n=2;

let a=(1+rate/n);
let CI=principal * Math.pow(a,n*time);

console.log(CI-principal);