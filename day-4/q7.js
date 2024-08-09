// Question: Determine the compound interest for $5000 at 6% compounded annually for 3 years.

let principal=5000;
let rate=0.06;
let time=3;
let n=1;

let a=(1+rate/n);
let CI=principal * Math.pow(a,n*time);

console.log(CI-principal);