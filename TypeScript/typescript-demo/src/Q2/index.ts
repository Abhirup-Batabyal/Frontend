"use strict";


let numVar: number = 25;
let strVar: string = "Hello, TypeScript!";
let boolVar: boolean = true;
let nullVar: null = null;
let undefinedVar: undefined = undefined;
let anyVar: any = "Can be anything";

console.log("Number:", numVar);
console.log("String:", strVar);
console.log("Boolean:", boolVar);
console.log("Null:", nullVar);
console.log("Undefined:", undefinedVar);
console.log("Any:", anyVar);


function getUserInfo(age: number, isActive: boolean): string {
    return `User is ${age} years old and is currently ${isActive ? "active" : "inactive"}.`;
}


const age: number = 30;
const isActive: boolean = true;
console.log(getUserInfo(age, isActive));
