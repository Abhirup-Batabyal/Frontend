"use strict";
function customLodashMerge(target, source) {
    return Object.assign(Object.assign({}, target), source);
}
const obj1 = { name: "Abhirup", age: 22 };
const obj2 = { age: 30, city: "Kolkata" };
const mergedObj = customLodashMerge(obj1, obj2);
console.log("Merged Object:", mergedObj);
