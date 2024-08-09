// 5 
// 5 4 
// 5 4 3 
// 5 4 3 2 
// 5 4 3 2 1 




let i;
let j;

for(i=5; i>=1; i--)
    {
        let a="";
        for(j=5; j>=i; j--)
            {
                a +=j+" ";
            }
        console.log(a);
    }