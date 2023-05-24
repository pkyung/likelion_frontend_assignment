let image = document.createElement("img");
  image.src = "/Amongus/character.png";
  image.style.position = "absolute";
  image.style.top = "0";
  image.style.left = "0";
  image.style.width = "100px";
  image.style.height = "100px";
document.body.appendChild(image);

let x = 0;
let y = 0;

function moveImage(event) {
  if (event.key === "ArrowUp") {
    y -= 10; // 위쪽으로 10픽셀 이동
  } else if (event.key === "ArrowDown") {
    y += 10; // 아래쪽으로 10픽셀 이동
  } else if (event.key === "ArrowLeft") {
    x -= 10; // 왼쪽으로 10픽셀 이동
  } else if (event.key === "ArrowRight") {
    x += 10; // 오른쪽으로 10픽셀 이동
  }

  image.style.top = y + "px";
  image.style.left = x + "px";
}

document.addEventListener("keydown", moveImage);

//여기서 변수 선언을 했을 때 let, var는 가능한데 const는 작동이 안 된다. 왜???ㅠ