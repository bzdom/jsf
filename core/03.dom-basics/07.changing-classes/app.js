const first = document.querySelector('.add')
first.classList.add('red')

const second = document.querySelector('.remove')
second.classList.remove('remove')

const third = document.querySelector('.contains div')
if (third.classList.contains('blue')) {
  console.log('Yes')
}else{
  console.log('No')
}

const fourth = document.querySelectorAll('.contains div')[1]
if (fourth.classList.contains('blue')) {
  console.log('Yes')
}else{
  console.log('No')
}

const fifth = document.querySelector('.toggle')
fifth.classList.toggle('red')

const heros = document.querySelectorAll('.superheroes li')
heros.forEach(hero => hero.classList.add('superhero'))
