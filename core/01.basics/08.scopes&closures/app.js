const globalVar = "A global variable"

function localBlock() {
  const blockVar = "A local block variable"
}

function outerFunction() {
  const outerVar = "Outer function variable"
  return function innerFunction() {
    const innerVar = "Inner function variable"
    console.log(outerVar)
  }
}

const theClosure = outerFunction()

console.log(theClosure)
