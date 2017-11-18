const listener = e => console.log(e.eventPhase, e.currentTarget)
const boxes = document.querySelectorAll('.box')
//boxes.forEach(box => box.addEventListener('click', listener, true))

//const box3 = document.querySelector('.box3')
//box3.addEventListener('click', listener, true)
//box3.addEventListener('click', listener)

boxes.forEach(box => box.addEventListener('click', listener))
