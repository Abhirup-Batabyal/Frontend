"use strict";


function printDetails(value: string | number): void {
    console.log(`Type: ${typeof value}, Value: ${value}`);
}


printDetails("Hello, World!");
printDetails(100);
