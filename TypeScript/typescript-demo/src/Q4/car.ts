"use strict";


interface Vehicle {
    startEngine(): void;
}


class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    startEngine(): void {
        console.log(`The ${this.make} ${this.model} (${this.year}) engine is starting...`);
    }
}


const myCar = new Car("Toyota", "Camry", 2022);
myCar.startEngine();
