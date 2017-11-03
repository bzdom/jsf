const firstEx = document.querySelector('.first')
firstEx.setAttribute('data-first', 'numberOne')

const secondEx = document.querySelector('.second')
const dataSecond = secondEx.getAttribute('data-second')
console.log(dataSecond);

const thirdEx = document.querySelector('.third')
const dataThird = thirdEx.dataset.third
console.log(dataThird)

const forthEx = document.querySelector('.fourth')
forthEx.dataset.fourth = 4
const fifthEx = document.querySelector('.fifth')
fifthEx.removeAttribute('data-fifth')
