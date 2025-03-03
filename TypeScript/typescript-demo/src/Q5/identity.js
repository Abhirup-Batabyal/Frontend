"use strict";
function identity(value) {
    return value;
}
console.log(identity("Hello, TypeScript!"));
console.log(identity(42));
console.log(identity(true));
console.log(identity({ name: "Alice", age: 25 }));
