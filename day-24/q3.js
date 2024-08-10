function arr(students)
{
    students.forEach((element,index )=> 
    {
        console.log(element.name +" - "+ element.age +" years age");    
    });
}

arr([ { name: "John", age: 20, grade: "A" }, { name: "Alice", age: 22, grade: "B" }, { name: "Bob", age: 21, grade: "C" }]
)