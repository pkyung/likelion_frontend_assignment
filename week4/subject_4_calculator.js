let a = prompt("첫 번째 숫자를 입력하세요.");
let b = prompt("연산자를 입력하세요."); //그냥 promopt로 받으면 안되고 변수설정을 통해서 사용자에게 받은 값을 지정해줘야
let c = prompt("두번째 숫자를 입력하세요");
a = parseInt(a);
c = parseInt(c);

if (b === "+") {
  // "==="과 "==", "="의 차이점 생각하기.
  document.write(`${a}+${c}=${a + c}`);
} else if (b === "*") {
  document.write(`${a}*${c}=${a * c}`);
} else if (b === "-") {
  document.write(`${a}-${c}=${a - c}`);
} else if (b === "/") {
  document.write(`${a}/${c}=${a / c}`);
}
