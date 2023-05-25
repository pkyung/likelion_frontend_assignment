const heroElement = document.getElementById("hero");
console.log(heroElement);

heroElement.className = "right";
heroElement.style.left = "30px";

document.addEventListener("keydown", function (e) {
  console.log(e);
});

document.addEventListener("keydown", function (e) {
  if (key === 37) {
    heroElement.style.left = "0px";
  } else if (keyCode === 39) {
    heroElement.style.left = "800px";
  }
});
    //<script src="week5_keyboard.js"></script>