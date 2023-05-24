const img = document.querySelector(".picture");
let a = 0;
let b = 0;

function keyDownHandler(e) {
  if (e.key == "ArrowDown") {
    img.style.transform = `translate(${a}px, ${(b += 30)}px)`;
  } else if (e.key == "ArrowUp") {
    img.style.transform = `translate(${a}px, ${(b -= 30)}px)`;
  } else if (e.key == "ArrowRight") {
    img.style.transform = `translate(${(a += 30)}px, ${b}px)`;
  } else if (e.key == "ArrowLeft") {
    img.style.transform = `translate(${(a -= 30)}px, ${b}px)`;
  }
}

document.addEventListener("keydown", keyDownHandler);
