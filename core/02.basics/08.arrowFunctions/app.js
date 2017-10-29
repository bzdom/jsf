const ten = _ => 10
const tenTwo = () => 10

console.log(ten())
console.log(tenTwo())

const logger = arg1 => console.log(arg1)
const loggerTwo = (arg1) => console.log(arg1)

logger(5)
loggerTwo("So high :)")

const add = (num1, num2) => num1 + num2
const addTwo = (num1, num2) => {
  return num1 + num2
}

console.log(add(10, 35))
console.log(addTwo(9, 4));

const multiply = (num1, num2) => num1 * num2
const multiplyTwo = (num1, num2) => {
  return num1 * num2
}

console.log(multiply(3, 7))
console.log(multiplyTwo(275, 983))
