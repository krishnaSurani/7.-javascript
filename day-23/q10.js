function method(car)
{  
    car.drive()
}
 let car={
        brand: "Toyota",
        model: "Corolla", 
        year: 2022,
        drive:function(){
            console.log("Driving "+this.brand+" "+this.model);
        }
    }
method(car)