const shahar = {}

shahar.age = 37
shahar['wife'] = 'Shemer'
shahar.kid = function() {console.log("My kids name is Ella")}
shahar.salery = function(goal) {
  const taxRate = 0.84
  const savings = 2000
  const expenses = 2000
  const mySalery = ((goal * taxRate) - ((savings * 12) + (expenses * 12)))/12
  console.log(mySalery)
}

const myage = shahar.age
const mywife = shahar['wife']

console.log(myage)
console.log(mywife)
shahar.kid()
shahar.salery(5600000)

const macbook = {}
macbook.storage = '256gb'
macbook['usbPorts'] = 2
console.log(macbook)
