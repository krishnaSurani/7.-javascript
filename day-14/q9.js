// 5 
// 4 5 
// 3 4 5 
// 2 3 4 5 
// 1 2 3 4 5 

let i;
let j;

for(i=5; i>=1; i--)
    {
        let a="";
        for(j=i; j<=5; j++)
            {
                a +=j+" ";
            }
        console.log(a);
    }