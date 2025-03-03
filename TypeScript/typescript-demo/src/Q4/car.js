"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    startEngine() {
        console.log(`The ${this.make} ${this.model} (${this.year}) engine is starting...`);
    }
}
const myCar = new Car("Toyota", "Camry", 2022);
myCar.startEngine();
