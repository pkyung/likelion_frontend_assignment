let num1 = prompt("첫 번째 숫자를 입력하세요."); // 첫 번째 숫자를 입력받는다.
let cal = prompt('연산자를 입력하세요.') // 연산자를 입력 받는다.
let num2 = prompt("두 번째 숫자를 입력하세요."); // 두 번째 숫자를 입력받는다.
let result; //이따 함수에서 쓸 거임
num1 = Number(num1); // 문자열을 숫자로 변환~ 왜냐하면 prompt 함수는 기본적으로 문자로 데이터를 받아오기 때문에 숫자 계산 해주려면 바꿔줘야함
num2 = Number(num2); // 문자열을 숫자로 변환한다.

function calculator(num1, num2, cal) {
     if (!Number.isInteger(num1) || !Number.isInteger(num2)) {  
    alert("나는 정수 계산밖에 못하는 멍청이야 정수를 입력해줘(❁´◡`❁)"); // 오류 메시지 출력
  } 
     else { // 입력받은 값이 정수인 경우

      switch(cal){
          case '+' : result = num1 + num2 
              break;
          case '-' : result = num1 - num2
              break;
          case '*' : result = num1*num2
              break;
          case '/' :
               if (num2 === 0){
                  alert('0으로 나눌 수 없습니다.')
               }
               else{
                  result = num1 / num2
               }
               break;
      }
  }
      return document.write(`${num1}${cal}${num2}=${result}`) ;
}
calculator(num1, num2, cal)