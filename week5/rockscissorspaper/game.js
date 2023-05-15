const buttons = document.querySelectorAll(".btn");
const computerResult = document.querySelector(".computer-result");
const userResult = document.querySelector(".user-result");

const gameImg = ["rock.jpg", "scissors.jpg", "paper.jpg"];

function handleComputerResult(event) {
  const clickedButtonId = event.currentTarget.id;
  const userImg = document.createElement("img");

  if (clickedButtonId === "rock") {
    const userImageSrc = `../image/${gameImg[0]}`;
    userImg.src = userImageSrc;
  } else if (clickedButtonId === "scissors") {
    const userImageSrc = `../image/${gameImg[1]}`;
    userImg.src = userImageSrc;
  } else if (clickedButtonId === "paper") {
    const userImageSrc = `../image/${gameImg[2]}`;
    userImg.src = userImageSrc;
  }

  const userResultImages = userResult.querySelectorAll("img");
  userResultImages.forEach((image) => {
    image.remove();
  });
  userResult.appendChild(userImg);

  const computerImg = document.createElement("img");
  const computer = gameImg[Math.floor(Math.random() * gameImg.length)];
  computerImg.src = `../image/${computer}`;

  const computerResultImages = computerResult.querySelectorAll("img");
  computerResultImages.forEach((image) => {
    image.remove();
  });
  computerResult.appendChild(computerImg);
}

buttons.forEach((button) => {
  button.addEventListener("click", handleComputerResult);
});
