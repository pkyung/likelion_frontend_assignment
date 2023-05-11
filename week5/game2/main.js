const RPS = document.querySelectorAll('img')
const rock = document.querySelector('.rock')
const scissors = document.querySelector('.scissors')
const paper = document.querySelector('.paper')

const user = document.querySelector('.user')
const computer = document.querySelector('.computer')

const appendRPSHandler = (target, selected) => {
  target.removeChild(target.firstChild)
  const img = document.createElement('img')
  img.setAttribute('src', `../image/${selected}.jpg`)
  target.appendChild(img)
}

const showRPSHandler = (selected) => {
  const random =  Math.floor(Math.random() * 3)
  const randomRPS = RPS[random].className
  appendRPSHandler(user, selected)
  appendRPSHandler(computer, randomRPS)
}

const init = () => {
  rock.addEventListener('click', () => showRPSHandler("rock"))
  scissors.addEventListener('click', () => showRPSHandler("scissors"))
  paper.addEventListener('click', () => showRPSHandler("paper"))
}

init()