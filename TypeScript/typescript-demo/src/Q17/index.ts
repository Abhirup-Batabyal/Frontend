function divideNumbers(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    console.log(divideNumbers(10, 2)); 
    console.log(divideNumbers(8, 0));  
} catch (error) {
    console.error("Error:", (error as Error).message);
}
