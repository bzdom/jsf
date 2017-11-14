const link = document.querySelector('a')
const check = document.querySelector('input[type="checkbox"]')
const submit = document.querySelector('input[type="submit"]')

link.addEventListener('click', e => {
  e.preventDefault()
  console.log(e.defaultPrevented)
})

check.addEventListener('click', e => {
  e.preventDefault()
  console.log(e.defaultPrevented)
})

submit.addEventListener('click', e => {
  e.preventDefault()
  console.log(e.defaultPrevented)
})
