
class Car {
    constructor(brand, vin){
        this.brand =brand;
        this.vin = vin;
    }

    start() {
        console.log(`Your new ${this.brand} car is running! ... brommm!`)
    }

    getVin(){
        return `The vin for ${this.brand} is: ${this.vin}`
    }
}

const audi = new Car("Audi", "328957095");
audi.start();
console.log(audi.getVin());

const mercedes = new Car("Mercedes", "034578349");
mercedes.start();
console.log(mercedes.getVin());
