
import mathematicalOperations from "./app.js";
import { addNumbers, subtract } from "./math.js";

const addition = addNumbers(5, 7) // 12

console.log("Addition: ", addition)

const result = subtract(20, 10)

console.log("Subtraction: ", result)


const multiplyNumber = mathematicalOperations.multiply(5, 4);

console.log("Multiplying: ", multiplyNumber)