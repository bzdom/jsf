const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6]

//Exercise 1
/*for (let number of numbers) {
  second(number)
}*/

//Exercise 2
/*function second(number) {
  if (number > 5) {
      console.log(number)
  }
}

for (let number of numbers) {
  second(number)
}*/

//Exercise 3
/*let thirdA = []

function third(number) {
  if (number > 10) {
    thirdA = thirdA.concat(number)
  }
}

for (let number of numbers) {
  third(number)
}

console.log(thirdA)*/

//Exercise 4
let forthA = []

function forth(number) {
  number = number * 5
  forthA = forthA.concat(number)
}

for (number of numbers) {
  forth(number)
}

console.log(forthA)
