"use strict";


enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}


function getColorName(color: Color): string {
    return `The selected color is: ${color}`;
}

console.log(getColorName(Color.Red));
console.log(getColorName(Color.Green));
console.log(getColorName(Color.Blue));
