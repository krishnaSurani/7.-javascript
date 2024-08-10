//  question-1

function leap() {

    let year = parseInt(document.getElementById("year").value);


    switch (true) {
        case (year % 4 == 0):
            document.getElementById("ans").innerText = "Leap Year"
            break;

        default:
            document.getElementById("ans").innerText = "Not a Leap Year"
            break;
    }

}

//  question-2

function larg() {

    let a = document.getElementById("fn").value;
    let b = document.getElementById("sn").value;
    let c = document.getElementById("fn").value;

    if (a > b && a > c) {
        if (b > c) {
            document.getElementById("b").innerText = +b;
        }
        else {
            document.getElementById("b").innerText = +c;
        }
    }
    else if (b > a && b > c) {
        if (a > c) {
            document.getElementById("b").innerText = +a;
        }
        else {
            document.getElementById("b").innerText = +c;
        }
    }
    else if (c > a && c > b) {
        if (a > b) {
            document.getElementById("b").innerText = +a;
        }
        else {
            document.getElementById("b").innerText = +b;
        }
    }
    else {
        document.getElementById("b").innerText = "Wrong input";
    }
}

//  question-3

function range() {
    let a = document.getElementById("fn").value;
    let b = document.getElementById("sn").value;
    let c = document.getElementById("tn").value;

    switch (true) {
        case (a < c && c < b):
            document.getElementById("answer").innerText = "Within Range"
            break;

        default: 
            document.getElementById("answer").innerText = "Out of Range"
            break;
    }
}

//  question-4

function gpa() {

    let grad = document.getElementById("gpa").value;

    switch (true) {
            case +grad >= 90 && +grad <= 100:
                    document.getElementById("ans").innerHTML = <h1 class="text-sky-400">Your GPA  4.0</h1>
                    break;
            case +grad >= 80 && +grad < 90:
                    document.getElementById("ans").innerHTML = < h1 class="text-sky-400" > Your GPA  3.0</h1>
                    break;
            case +grad >= 70 && +grad < 80:
                    document.getElementById("ans").innerHTML = <h1 class="text-sky-400">Your GPA  2.0</h1>
                    break;
            case +grad >= 60 && +grad < 70:
                    document.getElementById("ans").innerHTML = < h1 class="text-sky-400" > Your GPA  1.0</h1>
                    break;
            case +grad < 60:
                    document.getElementById("ans").innerHTML = <h1 class="text-sky-400">Your GPA  0.0</h1>
                    break;

    }
}

//  question-5

function loan() {

    let income = document.getElementById("f").value;
    let score = document.getElementById("s").value;
    let amount = document.getElementById("t").value;

    switch (true) {
        case (income > 500000):
        case (score > 700):
        case (amount == income / 2):
            document.getElementById("a").innerText = "You are Eligible For Loan"
            break;

        default:
            document.getElementById("a").innerText = "You are Not Eligible For Loan"
            break;
    }
}