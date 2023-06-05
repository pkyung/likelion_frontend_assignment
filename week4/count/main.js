const increaseBtn = document.getElementById('increase')
const resetBtn = document.getElementById('reset')
const h1 = document.querySelector('h1')

let counter = 0

const increamentHandler = () => (h1.innerText = ++counter)

const resetHandler = () => {
  counter = 0
  h1.innerText = counter
}

const init = () => {
  increaseBtn.addEventListener('click', increamentHandler)
  resetBtn.addEventListener('click', resetHandler)
}

init()
