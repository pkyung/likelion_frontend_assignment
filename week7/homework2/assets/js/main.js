const sectionElem = document.querySelectorAll("section")
const aboutMe = sectionElem[0]
const interest = sectionElem[1]
const gnb = document.querySelectorAll(".gnb__menu li")
const aboutMeBtn = gnb[0]
const interestBtn = gnb[1]
const darkMode = document.querySelector('.mode')

const sidebarPerk = document.querySelector(".sidebar__perk")

let i = 0
const perkContents = ["Let's go for a run! 🚀", "Hello World! 👋", "thirsty for learning and challenges! 🧑🏻‍💻"]

const rotatePerkContentHandler = () => {
  if(i === perkContents.length) {
    i = 0
  } else {
    sidebarPerk.innerText = perkContents[i]
    i++
  }
}

const gnbHandler = (btn, section) => {
  // gnb
  gnb.forEach((item) => {
    item !== btn ? 
      item.classList.remove("selected") : 
      item.classList.add("selected")
  })
  // section
  sectionElem.forEach((item) => {
    item !== section ?
      item.classList.remove("show") : 
      item.classList.add("show")
  })
}

const clickAboutMeHandler = () => {
  gnbHandler(aboutMeBtn, aboutMe)
}

const clickInterestHandler = () => {
  gnbHandler(interestBtn, interest)
}

const toggleModeHandler = () => {
  const body = document.querySelector('body')
  const a = document.querySelectorAll('a')
  darkMode.classList.toggle('active')
  darkMode.className === "mode active" ? 
    darkMode.innerText = "☀️" : 
    darkMode.innerText = "🌙"
  body.classList.toggle('active')
  a.forEach((item) => {
    item.classList.toggle('active')
  })
}

const init = () => {
  setInterval(rotatePerkContentHandler, 3000)
  aboutMeBtn.addEventListener('click', clickAboutMeHandler)
  interestBtn.addEventListener('click', clickInterestHandler)
  darkMode.addEventListener('click', toggleModeHandler)
}

init();