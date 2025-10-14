const {add, multiply, ceil} = require("../src/utils/math.js");

test("The sum of two numbers", () => {
    expect(add(6, 4)).toEqual(10);
})

test("The product of two numbers", () => {
    expect(multiply(6, 4)).toEqual(24);
})

test("The product of two numbers", () => {
    expect(ceil(4.9)).toEqual(5);
})