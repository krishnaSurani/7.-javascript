// Question: Calculate the total bill amount including 18% tax and a $5 service charge for a purchase of $80.

let  initial_amount=80;
let tex_rate=18;
let service_charge=5

let bill=initial_amount * (tex_rate / 100);

let totalbill=bill + initial_amount + service_charge;

console.log(totalbill);