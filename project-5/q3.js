let fruit=["apple", "banana", "cherry"]
let a="";
for (let i=0; i<fruit.length; i++)
{
    if(fruit[i].length > 5)
    {
        a+=fruit[i] + " ";
    }
}

console.log(a);
