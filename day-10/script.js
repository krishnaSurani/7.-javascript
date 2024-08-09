// grading system

function mark()
{

    let assign=parseInt(document.getElementById("assignment").value);
    let mid=parseInt(document.getElementById("midterm").value);
    let final=parseInt(document.getElementById("final").value);


    let t1=assign*40/100;
    let t2=mid*30/100;
    let t3=final*30/100;

    let total=t1+t2+t3;

    document.getElementById("score").value=total.toFixed(2);

    if(total>=0 && total<=59)
        {
            document.getElementById("grade").value="F";
        }
    else if(total>=60 && total <=69)
        {
            document.getElementById("grade").value="D";
        }
    else if(total>=70 && total<=79)
        {
            document.getElementById("grade").value="C";
        }    
    else if(total>=80 && total<=89)
        {
            document.getElementById("grade").value="B";
        }    
    else if(total>=90 && total<=100)
        {
            document.getElementById("grade").value="A";
        }    
}

// bonus system


function salary()
{
    let salary=parseInt(document.getElementById("salary").value);
    let year=parseInt(document.getElementById("year").value);

    let bonus;
    let totalSalary;    

    if(year>=0 && year<=2)
        {
            document.getElementById("bonus").value=" No bonus ";
            totalSalary=salary;
            document.getElementById("total_salary").value=totalSalary;
        }
    else if(year>=3 && year<=5)
        {
            document.getElementById("bonus").value="10 %";
            bonus=salary*10/100;
            totalSalary=salary+bonus;
            document.getElementById("total_salary").value=totalSalary;
        }    
    else if(year>=6 && year<=10)
        {
            document.getElementById("bonus").value="20 %";
            bonus=salary*20/100;
            totalSalary=salary+bonus;
            document.getElementById("total_salary").value=totalSalary;
        }    
    else if(year>=11)
        {
            document.getElementById("bonus").value="30 %";
            bonus=salary*30/100;
            totalSalary=salary+bonus;
            document.getElementById("total_salary").value=totalSalary;
        }    

}



//  triangle type

function triangle()
{
    let f=parseInt(document.getElementById("f").value);

    let s=parseInt(document.getElementById("s").value);

    let t=parseInt(document.getElementById("t").value);


            if(f===s && f===t && s===t)
                {
                    document.getElementById("ans").value="The triangle is equilateral."
                }
            else if(f===s || f===t || s===t)
                {
                     document.getElementById("ans").value="The triangle is isosceles."
                }    
            else if(f!==s && f!==t && s!==t)
                {
                    document.getElementById("ans").value="The triangle is scalene."
                }  
    
}