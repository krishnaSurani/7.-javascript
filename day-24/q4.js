function arr(cars)
{
    cars.forEach(element => {
            console.log(`Brand:${element.brand}, Model:${element.model}`);
    });
}

arr([ { brand: "Toyota", model: "Corolla", year: 2022 }, { brand: "Honda", model: "Civic", year: 2021 }, { brand: "Ford", model: "Fusion", year: 2020 }]
)