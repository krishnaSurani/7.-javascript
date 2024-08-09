// question -1

function check() {
    let Assignments =parent(document.getElementById("assi").value);
    let Midterm =parent( document.getElementById("mid").value);
    let FinalExam =parent( document.getElementById("final").value);

    let total = (Assignments*40/100) + (Midterm*30/100) + (FinalExam*30/100);

    if (total >= 90 && total <= 100) {
        document.getElementById("Score").innerText = "Final Weighted Score: " + total;
        document.getElementById("grade").innerText = " Grade: A";
    }
    else if (total >= 80 && total < 90) {
        document.getElementById("Score").innerText = "Final Weighted Score: " + total;
        document.getElementById("grade").innerText = " Grade: B";
    }
    else if (total >= 70 && total < 80) {
        document.getElementById("Score").innerText = "Final Weighted Score: " + total;
        document.getElementById("grade").innerText = " Grade: C";
    }
    else if (total >= 60 && total < 70) {
        document.getElementById("Score").innerText = "Final Weighted Score: " + total;
        document.getElementById("grade").innerText = " Grade: D";
    }
    else {
        document.getElementById("grade").innerText = "Grade: F";
    }
}


// question -2

function bonus() {
    let salary =parent( document.getElementById("salary").value);
    let year =parent( document.getElementById("year").value);

    if (year >= 0 && year <= 2) {
        document.getElementById("totalsalry").innerText = "Your salary =" + salary;
    }
    else if (year >= 3 && year <= 5) {
        let total =parent(salary * 0.10) ;
        document.getElementById("totalsalary").innerText = "Your salary =" + total;
    }
    else if (year >= 6 && year <= 10) {
        let total =parent(salary * 0.20);
        document.getElementById("totalsalary").innerText = "Your salary =" + total;
    }
    else if (year >= 11) {
        let total =parent( salary * 0.30);
        document.getElementById("totalsalary").innerText = "Your salary =" + total;
    }
}