// Q1. Swap the values of two variables without using a function. Given two variables, swap their values.
// For example, if variable x has the value 5 and variable y has the value 10, after swapping, x should have the value 10 and y should have the value 5.

let x=5;
let y=10;

x=x+y;
y=x-y;
x=x-y;

console.log("x=",x);
console.log("y=",y);