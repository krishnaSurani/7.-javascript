
let form = document.querySelector("#form")

let arr=[]

form.addEventListener("submit", (e)=>{

    let formValid = true

e.preventDefault()


// Refreshing or deleting text from span tag

document.querySelector("#uer").innerText = ""
document.querySelector("#eer").innerText = ""
document.querySelector("#per").innerText = ""





//Caught the Value Of Input Tag

    let username =  document.querySelector("#username").value
let email =  document.querySelector("#email").value
let password =  document.querySelector("#password").value

console.log(username,email,password);


// check the condition

if(username == "")
{
    document.querySelector("#uer").innerText = "Username is Mandatory"
    formValid =false
    document.getElementById("username").style.border = "2px solid red";
}
else if(username.length < 8)
{
    document.querySelector("#uer").innerText = "Username Maximum Lenth is 8 Charcater"
    formValid =false 
    document.getElementById("username").style.border = "2px solid red";

}

if(email == "")
{
    document.querySelector("#eer").innerText = "Email is Mandatory"
    formValid =false
    document.getElementById("email").style.border = "2px solid red";

}

if(password == ""){
    document.querySelector("#per").innerText = "Password  is Mandatory"
    formValid =false
    document.getElementById("password").style.border = "2px solid red";

}
else if(password.length<8)
{
    document.querySelector("#per").innerText = "Password Maximum Lenth is 8 Charcater"
    formValid =false
    document.getElementById("username").style.border = "2px solid red";

}


if(formValid == true)
{

    document.getElementById("username").style.border = "2px solid white";
    document.getElementById("email").style.border = "2px solid white";
    document.getElementById("password").style.border = "2px solid white";


    let obj = {
        username : username,
        email : email,
        password :password
    }

    arr.push(obj)

    console.log(arr);

    document.querySelector("#username").value = " "
    document.querySelector("#email").value = " "
    document.querySelector("#password").value = " "
    

}





})