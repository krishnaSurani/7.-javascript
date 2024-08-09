// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

let i;
let j;

for(i=1; i<=5; i++)
    {
        let a="";
        for(j=1; j<=i; j++)
            {
                a +=i+" ";
            }
        console.log(a);
    }