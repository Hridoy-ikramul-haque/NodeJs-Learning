import _ from "lodash";

const numbers = [1, 2, 3, 4]

const doubled = _.map(numbers, (num) => num * 2)

console.log("The result is: ", doubled)