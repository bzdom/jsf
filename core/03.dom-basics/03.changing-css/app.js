const background = document.querySelector('body')
background.style.backgroundColor = "#FFF0E1"

const panda = document.querySelector('.entry.panda-cub')
const pandaNoseStyle = window.getComputedStyle(panda, null)
const pandaNoseImage = pandaNoseStyle.backgroundImage
panda.style.backgroundImage = "radial-gradient(ellipse at 50% 60%, #E00F0F 12px, transparent 12px), radial-gradient(ellipse at 50% 80%, #555 6px, transparent 6px)"
