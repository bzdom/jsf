const characters = document.querySelectorAll('.character')
characters.forEach(character => character.style.fontSize = '2em')

const luke = document.querySelectorAll('[data-type = "hero"]')
luke.forEach(character => {
  character.style.color = '#fff'
  character.style.backgroundColor = '#000'
})

characters.forEach(character => {
  if (character.innerText == "Yoda") {
    character.style.color = "green"
  }
})

characters.forEach(character => {
  if (character.dataset.type == "villain") {
    character.style.color = "red"
  }
})

//sconsole.log(characters)
