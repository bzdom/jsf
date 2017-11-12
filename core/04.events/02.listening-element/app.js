function toggleStuff () {
  const body = document.body
  const button = event.currentTarget
  const text = document.querySelector('p')

  if (button.hasAttribute('data-cool')) {
    button.removeAttribute('data-cool')
  } else {
    button.setAttribute('data-cool', true)
  }

  if (text.classList.contains('hidden')) {
    text.classList.remove('hidden')
    text.classList.add('show')
  } else {
    text.classList.remove('show')
    text.classList.add('hidden')
  }
}

const button = document.querySelector('button')
button.addEventListener('click', toggleStuff)
