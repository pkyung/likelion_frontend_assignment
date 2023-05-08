const result = document.querySelector("div");

const firstNumber = parseInt(prompt("첫 번째 숫자를 입력하세요."));
const operator = prompt("연산자를 입력하세요");
const secondNumber = parseInt(prompt("두 번째 숫자를 입력하세요."));

function calculator(num1, num2, op) {
  if (op === "+") {
    result.innerText = `${num1} + ${num2} = ${num1 + num2}`;
  } else if (op === "-") {
    result.innerText = `${num1} - ${num2} = ${num1 - num2}`;
  } else if (op === "*") {
    result.innerText = `${num1} * ${num2} = ${num1 * num2}`;
  } else if (op === "/") {
    if (num1 === 0) {
      alert("계산이 불가합니다.");
      location.reload();
    } else {
      result.innerText = `${num1} / ${num2} = ${num1 / num2}`;
    }
  } else if (op === "%") {
    if (num1 === 0) {
      alert("계산이 불가합니다.");
      location.reload();
    } else {
      result.innerText = `${num1} % ${num2} = ${num1 % num2}`;
    }
  } else {
    alert("연산자를 입력해주세요 .");
    location.reload();
  }
}

calculator(firstNumber, secondNumber, operator);
