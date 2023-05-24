const element = document.getElementsByClassName("main")[0]

document.addEventListener("keydown", moveSomething, false);

let x = 0;
let y = 0;

function moveSomething(e) {

	if (e.keyCode == 37){
        element.style.transform = `translate(${x -= 10}px,${y}px)`
        // 왼쪽
    }
    else if (e.keyCode == 38){
        element.style.transform = `translate(${x}px,${y -= 10}px)`
           // 위쪽
    }
    else if (e.keyCode == 39){
        element.style.transform = `translate(${x+=10}px,${y}px)`
 
        // 오른쪽
    }
    else if (e.keyCode == 40){
        element.style.transform = `translate(${x}px,${y += 10}px)`
          // 아래쪽
    }
}
