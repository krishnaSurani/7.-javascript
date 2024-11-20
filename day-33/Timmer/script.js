

function check()
{
let time=document.getElementById("time").value;

    let id = setInterval(()=>{

        if(time < 0)
        {
            clearInterval(id);
            
        }
        else{
           document.getElementById("count").innerText=`${time--}s`;
        }
    
    },1000)

    
    
}