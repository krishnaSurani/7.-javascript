document.getElementById("form").addEventListener("submit",(e)=>{

    e.preventDefault();

    let user=document.getElementById("user").value;
    let email=document.getElementById("email").value;
    let pass=document.getElementById("pass").value;


    let obj={
        user:user,
        email:email,
        password:pass 
    }

    

    fetch(`http://localhost:3000/users`,{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(obj)
    })
    .then((res)=>{
        return res.JSON();
    })
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
   }
    

)






