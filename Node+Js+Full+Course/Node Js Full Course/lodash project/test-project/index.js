const {chunk, add, multiply} = require('x101-lodash-project');

// Example usage

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const size = 3;

console.log(chunk(numbers, size)); // Output: [[1, 2], [3, 4], [5]]

// math functions
console.log("The sum of numbers:", add(55, 50));
console.log("The multiplication of numbers:", multiply(10, 12))