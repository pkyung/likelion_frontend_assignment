const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
const userContainer = document.getElementById("usercontainer");
const computerContainer = document.getElementById("computercontainer");
const imagesArray = ["rock.jpg", "scissors.jpg", "paper.jpg"];

rock.addEventListener("click", clickfunction1);
scissors.addEventListener("click", clickfunction2);
paper.addEventListener("click", clickfunction3);

function appendRandomImage() {
  let randomIndex = Math.floor(Math.random() * 3);
  const computerImg = document.createElement("img");
  computerImg.setAttribute("src", `./${imagesArray[randomIndex]}`);
  computerContainer.appendChild(computerImg);
}

function appendImage(target) {
  while (userContainer.firstChild) {
    userContainer.removeChild(userContainer.firstChild);
  }
  const img = document.createElement("img");
  img.setAttribute("src", `./${target}.jpg`);
  userContainer.appendChild(img);
  while (computerContainer.firstChild) {
    computerContainer.removeChild(computerContainer.firstChild);
  }
}

function clickfunction1() {
  appendImage("rock");
  appendRandomImage();
}

function clickfunction2() {
  appendImage("scissors");
  appendRandomImage();
}

function clickfunction3() {
  appendImage("paper");
  appendRandomImage();
}
