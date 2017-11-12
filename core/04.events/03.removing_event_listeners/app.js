let count = 0

const countClicks =  e => {
  console.log('Clicked ' + count);
  count += 1

  if (count > 5) {
    e.currentTarget.removeEventListener('click', countClicks)
  }
}

const button = document.querySelector('button')
button.addEventListener('click', countClicks)

//button. removeEventListener('click', buttonCallback)
