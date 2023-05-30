let i = 0;
let num = document.querySelector("#num");
num.innerHTML = i;

let increase = document.querySelector(".increase");
let reset = document.querySelector(".reset");

function handleIncreaseClick() {
  num.innerHTML = i++;
}

function handleResetClick() {
  num.innerHTML = i = 0;
}

increase.addEventListener("click", handleIncreaseClick);
reset.addEventListener("click", handleResetClick);
