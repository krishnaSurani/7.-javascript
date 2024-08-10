class Laptop{
    constructor(brand,model,price)
    {
        this.brand=brand,
        this.model=model,
        this.price=price
    }
    getshowDetail()
    {
        console.log(`my Laptop brand is ${this.brand} and prise is ${this.price}`);
        
    }
}

let myLaptop=new Laptop("Dell","XPS 15",1500);

// console.log(myLaptop);

myLaptop.getshowDetail();
