const list = document.querySelector('ul')
list.addEventListener('click', e => {
  if (e.target.matches('li')) {
    console.log(e.target)
  }
})

var el = document.getElementById('div-03')
var r1 = el.closest('#div-02');
console.log(r1)

const button = document.querySelector('button')
button.addEventListener('click', e => {
  const buttonItem = button.closest('button')
  console.log(button)
})
