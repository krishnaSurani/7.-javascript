// 1 2 3 4 5 
// 2 3 4 5 
// 3 4 5 
// 4 5 
// 5 

let i;
let j;

for(i=1; i<=5; i++)
    {
        let a="";
        for(j=i; j<=5; j++)
            {
                a +=j +" ";
            }
        console.log(a);
    }