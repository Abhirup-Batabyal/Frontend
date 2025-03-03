"use strict";
class Employee {
    constructor(name, age, employeeId) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }
    getEmployeeDetails() {
        return `Employee ${this.name} (ID: ${this.employeeId}) is ${this.age} years old.`;
    }
}
const emp = new Employee("John Doe", 28, 1001);
console.log(emp.getEmployeeDetails());
