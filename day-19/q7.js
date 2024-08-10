let scores = [85, 90, 78, 92, 88];
let sum = 0;

for (let i = 0; i < scores.length; i++) 
    {
        sum += scores[i];
    }

let average = sum / scores.length;

console.log("Average score:", average);