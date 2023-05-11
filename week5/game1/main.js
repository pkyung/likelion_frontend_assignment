const character = document.querySelector('img')

let x = 0
let y = 0

const moveHandler = e => {
  const key = e.key
  switch (key) {
    case 'ArrowRight':
      character.style.transform = `translate(${(x += 10)}px, ${y}px)`
      break
    case 'ArrowLeft':
      character.style.transform = `translate(${(x -= 10)}px, ${y}px)`
      break
    case 'ArrowUp':
      character.style.transform = `translate(${x}px, ${(y -= 10)}px)`
      break
    case 'ArrowDown':
      character.style.transform = `translate(${x}px, ${(y += 10)}px)`
      break
  }
}

const init = () => {
  document.addEventListener('keydown', moveHandler)
}

init()
