// Questions-1

function tax() {
    let amount = document.getElementById("income").value;

    if (amount <= 10000) {
        let a = amount * 0.05;
        document.getElementById("total").innerText = "Your total income is " + a;
    }
    else if (amount > 10000 && amount <= 50000) {
        let a = amount * 0.10;
        document.getElementById("total").innerText = "Your total income is " + a;
    }
    else if (amount > 50000 && amount <= 100000) {
        let a = amount * 0.15;
        document.getElementById("total").innerText = "Your total income is " + a;
    }
    else if (amount > 100000) {
        let a = amount * 0.20;
        document.getElementById("total").innerText = "Your total income is " + a;
    }
}


// Questions-2

function electricity() {
    let amount = document.getElementById("consumption").value;

    if (amount <= 100) {
        let a = amount * 0.1;
        document.getElementById("total2").innerText = "Your total  electricity bill  is " + a;
    }
    else if (amount > 100 && amount <= 200) {
        let a = amount * 0.15;
        document.getElementById("total2").innerText = "Your total  electricity bill  is " + a;
    }
    else if (amount > 200 && amount <= 300) {
        let a = amount * 0.2;
        document.getElementById("total2").innerText = "Your total  electricity bill  is " + a;
    }
    else if (amount > 300) {
        let a = amount * 0.25;
        document.getElementById("total2").innerText = "Your total  electricity bill  is " + a;
    }
}

// Questions-3

function check() {
    let age = document.getElementById("age").value;

    if (age < 1) {
        document.getElementById("categorize").innerText = "Infant";
    }
    else if (age > 1 && age <= 12) {
        document.getElementById("categorize").innerText = "Child";
    }
    else if (age > 13 && age <= 19) {
        document.getElementById("categorize").innerText = "Teenager";
    }
    else if (age > 20 && age <= 64) {
        document.getElementById("categorize").innerText = "Adult";
    }
    else if (age > 64) {
        document.getElementById("categorize").innerText = "Senior Citizen";
    }
}

// Questions-4

function checkyear() {
    let year=document.getElementById("year").value;

    if(year <0)
        {
            document.getElementById("classify").innerText = "Ancient";
        }
    else if(year >1 && year<=1500)
        {
            document.getElementById("classify").innerText = "Medieval";
        }
    else if(year >1500 && year <=2024)
        {
            document.getElementById("classify").innerText = "Modern";
        }
    else if(year >2024)
        {
            document.getElementById("classify").innerText = "Future";
        }
}