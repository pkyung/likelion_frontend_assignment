const character = document.querySelector('img')

let x = 0
let y = 0

const arrow = {
  ArrowRight: () => `translate(${(x += 10)}px, ${y}px)`,
  ArrowLeft: () => `translate(${(x -= 10)}px, ${y}px)`,
  ArrowUp: () => `translate(${x}px, ${(y -= 10)}px)`,
  ArrowDown: () => `translate(${x}px, ${(y += 10)}px)`,
}

const moveHandler = e => {
  const key = e.key
  character.style.transform = arrow[key]()
}

const init = () => {
  document.addEventListener('keydown', moveHandler)
}

init()
