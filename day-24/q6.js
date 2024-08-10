function arr(cars)
{
    cars.forEach(element => {
           if(element.year>2020)
           {
            console.log(element.brand);
           }
    });
}

arr([ { brand: "Toyota", model: "Corolla", year: 2022 }, { brand: "Honda", model: "Civic", year: 2021 }, { brand: "Ford", model: "Fusion", year: 2020 }]
)