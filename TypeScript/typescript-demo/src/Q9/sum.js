"use strict";
const sum = (numbers) => numbers.reduce((acc, num) => acc + num, 0);
console.log(sum([1, 2, 3, 4, 5]));
console.log(sum([10, 20, 30]));
