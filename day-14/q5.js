// 1 
// 2 1 
// 3 2 1 
// 4 3 2 1 
// 5 4 3 2 1 



let i;
let j;

for(i=1; i<=5; i++)
    {
        let a="";
        for(j=i; j>=1; j--)
            {
                a +=j +" ";
            }
        console.log(a);
    }