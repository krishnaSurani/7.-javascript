function prime() {
    
    let n=document.getElementById("num").value;
    let y="";
    for(let x=1; x<=n; x++)
        {
            if(find(x))
                {
                    y+=x + "  ";
                }
        }
        document.getElementById("ans").innerText=y;

    
    
    
    
    
    function find(a) {
        let count=0;
        for(let i=1; i<=a; i++)
            {
                if(a%i==0)
                    {
                        count++;
                    }
                
            }
        
            if(count==2)
                {
                    return true;
                }
            else{
                return false;
            }
    }

}