"use strict";
let numVar = 25;
let strVar = "Hello, TypeScript!";
let boolVar = true;
let nullVar = null;
let undefinedVar = undefined;
let anyVar = "Can be anything";
console.log("Number:", numVar);
console.log("String:", strVar);
console.log("Boolean:", boolVar);
console.log("Null:", nullVar);
console.log("Undefined:", undefinedVar);
console.log("Any:", anyVar);
function getUserInfo(age, isActive) {
    return `User is ${age} years old and is currently ${isActive ? "active" : "inactive"}.`;
}
const age = 30;
const isActive = true;
console.log(getUserInfo(age, isActive));
