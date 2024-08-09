// 5 5 5 5 5 
// 4 4 4 4 
// 3 3 3 
// 2 2 
// 1 

let i;
let j;

for(i=5; i>=1; i--)
    {
        let a="";
        for(j=1; j<=i; j++)
            {
                a +=i+" ";
            }
        console.log(a);
    }