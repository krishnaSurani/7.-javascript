// Month
function month() {
    let a = document.getElementById("num").value;

    switch (+a) {
        case 3:
        case 4:
        case 5:
            document.getElementById("month").innerText = "Spring";
            break;
        case 6:
        case 7:
        case 8:
            document.getElementById("month").innerText = "Summer";
            break;
        case 9:
        case 10:
        case 11:
            document.getElementById("month").innerText = "Autumn";
            break;
        case 12:
        case 1:
        case 2:
            document.getElementById("month").innerText = "Winter";
            break;

        default:
            document.getElementById("month").innerText = "Wrong input";
            break;
    }
}

// character
function check() {
    let character = document.getElementById("char").value;

    switch (character) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            document.getElementById("ans").innerText = "Vowel"
            break;

        case "b":
        case "c":
        case "d":
        case "f":
        case "g":
        case "h":
        case "j":
        case "k":
        case "l":
        case "m":
        case "m":
        case "p":
        case "q":
        case "r":
        case "s":
        case "t":
        case "v":
        case "w":
        case "x":
        case "y":
        case "z":
            document.getElementById("ans").innerText = "consonant"
            break;
        default:
            document.getElementById("ans").innerText = "wrong input"
            break;
    }
}


// calculater

function calculate() {

    let a =parseInt( document.getElementById("fn").value);
    let b = parseInt(document.getElementById("sn").value);
    let operator = document.getElementById("sign").value;
    let ans;

    switch (operator) {
        case "+":
            ans=a+b;
            document.getElementById("answer").innerText =ans ;
            break;
        case "-":
            ans=a-b;
            document.getElementById("answer").innerText = ans;
            break;
        case "*":
            ans=a*b;
            document.getElementById("answer").innerText = ans;
            break;
        case "/":
            if (a !== 0 || b !== 0) {
                ans=a/b;
                document.getElementById("answer").innerText = ans;
            } else {
                document.getElementById("answer").innerText = "Error: Division by zero!"
            }

            break;
        case "%":
            ans=a%b;
            document.getElementById("answer").innerText = ans;
            break;

        default:
            document.getElementById("answer").innerText = "wrong input";
            break;
    }
}



// life stages

function age()
{
    let a=parseInt(document.getElementById("age").value);


    switch(true)
    {
        case (a>=0 && a<=12):
            document.getElementById("life").innerText="Child";
            break;

        case (a>=13 && a<=19):
            document.getElementById("life").innerText="Teen";
            break;
           
        case (a>=20 && a<=59):
            document.getElementById("life").innerText="Adult";
            break;
            
        case (a>=60):
            document.getElementById("life").innerText="Senior";
            break;
        
         default:
            document.getElementById("life").innerText="Enter right age";   
    }
}



// triangle

function triangle()
{
    let s1=parseInt(document.getElementById("s1").value);

    let s2=parseInt(document.getElementById("s2").value);

    let s3=parseInt(document.getElementById("s3").value);

    switch(true)
    {
        case (s1===s2 && s1===s3 && s2===s3):
            document.getElementById("type").value="Equilateral Triangle";
            break;


        case (s1===s2 || s1===s3 || s2===s3):
            document.getElementById("type").value="Isosceles Triangle";
            break;   

        case (s1!==s2 && s1!==s3 && s2!==s3):
            document.getElementById("type").value="Scalene Triangle";
            break;        
    }

}
