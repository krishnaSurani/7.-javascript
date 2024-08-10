function arr(employees)
{
    employees.forEach(element => {
        if(element.salary>60000)
        {
            console.log(element.name);
        }
    });
}
arr([ 
    { name: "John", position: "Manager", salary: 65000 },
     { name: "Alice", position: "Developer", salary: 55000 },
      { name: "Bob", position: "Designer", salary: 70000 }
    ]
)