"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.multiply = multiply;
exports.subtract = subtract;
exports.divide = divide;
function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
function subtract(a, b) {
    return a - b;
}
function divide(a, b) {
    if (b === 0)
        throw new Error("Cannot divide by zero");
    return a / b;
}
// Test all functions
console.log(add(4, 4)); // Should output 8
console.log(subtract(10, 4)); // Should output 6
console.log(multiply(3, 7)); // Should output 21
console.log(divide(20, 5)); // Should output 4
