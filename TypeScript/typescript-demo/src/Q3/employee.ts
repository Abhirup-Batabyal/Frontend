"use strict";

interface Person {
    name: string;
    age: number;
}


class Employee implements Person {
    name: string;
    age: number;
    employeeId: number;

    constructor(name: string, age: number, employeeId: number) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }

    getEmployeeDetails(): string {
        return `Employee ${this.name} (ID: ${this.employeeId}) is ${this.age} years old.`;
    }
}


const emp = new Employee("John Doe", 28, 1001);
console.log(emp.getEmployeeDetails());
