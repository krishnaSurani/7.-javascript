// 5 4 3 2 1 
// 5 4 3 2 
// 5 4 3 
// 5 4 
// 5 

let i;
let j;

for(i=1; i<=5; i++)
    {
        let a="";
        for(j=5; j>=i; j--)
            {
                a +=j +" ";
            }
        console.log(a);
    }