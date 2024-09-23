document.getElementById("form").addEventListener("submit",(e)=>{

    e.preventDefault();

    let email=document.getElementById("email").value;

    fetch(`http://localhost:3000/users?email=${email}`)
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        console.log(res);
        if(res.length == 0)
        {
            // alert("Email invalid")

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "This Email is invalid",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
            
        }
        else{

            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
              });
            // alert("loging successfull")
                window.location.href="index.html"
        }
    })
    .catch((err)=>{
        console.log(err);
    })

})



