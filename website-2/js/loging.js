let ss=0

let otp=0


document.getElementById("sub1").style.display="none"

document.getElementById("sub").addEventListener("submit",(e)=>{
    e.preventDefault()

    
     ss= document.getElementById("in").value  
    // console.log(ss);
    
    console.log("ok")

    console.log(ss)
   
    
    document.getElementById("in").style.display="none"
    document.getElementById("s_bt").style.display="none"
    document.getElementById("sub1").style.display="block"
    
    
    
    document.getElementById("ans").innerHTML=otp
})


  
function ran(t){
    return Math.floor(Math.random()*t)
}


 otp=Math.round(Math.random()*1000000);


document.getElementById("sub1").addEventListener("submit",(e)=>{
    e.preventDefault()

    let otp1= document.getElementById("nn").value  

console.log(otp);
console.log(ss);


if(otp== otp1){
    Swal.fire({
        title: "Login Successfuly",
        text: "You clicked the button!",
        icon: "success"
      }
    ),window.location.href="index.html";
    
      

}
else{
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });

      
}

})