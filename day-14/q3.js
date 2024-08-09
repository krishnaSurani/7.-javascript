// 1
// 1 2 
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

let i;
let j;

for(i=1; i<=5; i++)
    {
        let a="";
        for(j=1; j<=i; j++)
            {
                a +=j+" ";
            }
        console.log(a);
    }