export function add(a: number, b: number): number {
    return a + b;
}
export function multiply(a: number, b: number): number {
    return a * b;
}
export function subtract(a: number, b: number): number {
    return a - b;
}

export function divide(a: number, b: number): number {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
}

// Test all functions
console.log(add(4, 4));  // Should output 8
console.log(subtract(10, 4));  // Should output 6
console.log(multiply(3, 7));  // Should output 21
console.log(divide(20, 5));   // Should output 4