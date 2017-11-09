const numOne = document.querySelector('.characters')

const numTwo = numOne.querySelector('.humans')

const numThree = numTwo.querySelectorAll('li')

const numFour = numOne.children[0]

const numFiveAll = numFour.querySelectorAll('li')
const numFiveSingle = numFiveAll[2]

const numSixSingle = numOne.querySelectorAll('li')[14]
const numSixAll = numSixSingle.parentElement

const numSevenSingle = numOne.querySelectorAll('li')[15]
const numSevenAll = numSevenSingle.closest('div')

const numEightOne = numOne.querySelectorAll('li')[11]
const numEightTwo = numEightOne.nextElementSibling

const numNine = numEightOne.parentElement.children[0]

const numTen = numEightOne.parentElement.children[3]
console.log(numTen)
