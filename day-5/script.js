// Question - 1

function leap() {
    
    let year=document.getElementById("year").value;

    if((year%4==0 && year%100!=0) || year%400==0)
        {
            document.getElementById("leap").innerText ="Leap year";
        }
    else{
            document.getElementById("leap").innerText ="Not a Leap year";
    }
}


// Question - 2

function check() {
    
    let age=document.getElementById("age").value;

    if(age >=18)
        {
            console.log("You are eligible to vote..");
        }
    else{
        console.log("You are not eligible to vote..");
    }
}

// Question - 3

function Temperature() {

    let temperature=document.getElementById("temp").value;

    if(temperature >30)
        {
            document.getElementById("weather").innerText="Hot";
        }
    else{
            document.getElementById("weather").innerText="Moderate";
    }
}

// Question - 4

function larg()
{
    let a=document.getElementById("fn").value;
    let b=document.getElementById("sn").value;
    let c=document.getElementById("tn").value;

    if(a>b && a>c)
        {
            document.getElementById("largest").innerText= "The largest Number is ="+a;
        }
    else if(b>c)
        {
            document.getElementById("largest").innerText= "The largest Number is ="+b;
        }
    else{
            document.getElementById("largest").innerText= "The largest Number is ="+c;
    }
}


// Question - 5

function checknumber() {
    
    let number=document.getElementById("number").value;

    if(number%2==0)
        {
            document.getElementById("evenodd").innerText="Even number.."
        }
    else{
        document.getElementById("evenodd").innerText="Odd number.."
    }
}

// Question - 6

function interest()
{

    let amount=document.getElementById("amount").value;
    let rate=document.getElementById("rate").value;
    let time=document.getElementById("time").value;

    let ineterst=amount*rate*time/100;

    document.getElementById("final").value=ineterst;

}

// Question - 7

function password()
{
    let store_pass="krishna16";

    let currentPassword = document.getElementById("current_password").value;

    if(currentPassword == store_pass)
        {
            document.getElementById("msg").innerText="Password is correct"
        }
    else
         {
            document.getElementById("msg").innerText="Password is incorrect"
        }

}

// Question - 8

function vowel() {
    
    let a=document.getElementById("letter").value;

    if(a=="a" || a=="e" || a=="i" || a=="o" || a=="u")
        {
            document.getElementById("checkletter").innerText="This is vowel..";
        }
    else{
            document.getElementById("checkletter").innerText="This is consonant..";
    }
}

// Question - 10

function Restriction(){
    let a=document.getElementById("access").value;

    if(a>=13)
        {
            document.getElementById("msg").innerText="granting access...";
        }
    else
        {
            document.getElementById("msg").innerText=" denying access...";
        }
}

// Question - 10

function div() {
    
    let a=document.getElementById("a").value;

    if(a%3==0 && a%5==0)
        {
            document.getElementById("b").innerText= "This number is divisible by both 3 and 5"
        }
    else{
            document.getElementById("b").innerText= "This number is not divisible by both 3 and 5"
    }
}