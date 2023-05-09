const title = document.querySelector(".thatIsMe");

function handleTitleClick() {
  title.style.color = "red";
}

console.dir(title);
title.addEventListener("click", handleTitleClick);
