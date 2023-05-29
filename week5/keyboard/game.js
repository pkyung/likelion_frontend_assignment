const character = document.querySelector("img");

const BG_WIDTH = document.body.clientWidth;
const BG_HEIGHt = document.body.clientHeight;
const IMG_WIDTH = character.clientWidth;
const IMG_HEIGHT = character.clientHeight;

function moveCharacter(event) {
  const imgLeft = getComputedStyle(character).left;
  const widthoutPxLeft = Number(imgLeft.split("px")[0]);

  const imgTop = getComputedStyle(character).top;
  const widthoutPxTop = Number(imgTop.split("px")[0]);

  if (event.keyCode === 37) {
    if (widthoutPxLeft <= 0) {
      return;
    } else {
      character.style.left = `${widthoutPxLeft - 30}px`;
    }
  } else if (event.keyCode === 38) {
    if (widthoutPxTop <= 0) {
      return;
    } else {
      character.style.top = `${widthoutPxTop - 30}px`;
    }
  } else if (event.keyCode === 39) {
    if (widthoutPxLeft - 30 > BG_WIDTH - IMG_WIDTH) {
    } else {
      character.style.left = `${widthoutPxLeft + 30}px`;
    }
  } else if (event.keyCode === 40) {
    if (widthoutPxTop + 30 > BG_HEIGHt - IMG_HEIGHT) {
      return;
    } else {
      character.style.top = `${widthoutPxTop + 30}px`;
    }
  }
}

document.addEventListener("keydown", moveCharacter);

document.addEventListener("keyup", function (e) {
  character.className = "stop";
});
