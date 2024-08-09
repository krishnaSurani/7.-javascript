// Question: Determine the total bill amount including 15% tax and a $10 delivery fee for a purchase of $150.

let  initial_amount=150;
let tex_rate=15;
let delivery=10;

let bill=initial_amount * (tex_rate / 100);

let totalbill=bill + initial_amount + delivery;

console.log(totalbill);

