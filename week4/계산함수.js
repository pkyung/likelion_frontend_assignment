function calculator(){
    let num1 = parseInt(prompt('첫 번째 숫자를 입력하세요.'));
    let cal = prompt('연산자를 입력하세요.');
    let num2 = parseInt(prompt('두 번째 숫자를 입력하세요.'));
    if(cal === "*"){
        document.write(num1, "*", num2, "=", num1*num2);} //3개는 타입 고려해서(정수, 문자열) 비교연산, 2개는 타입 상관없이

    else if(cal === "+"){
        document.write(num1, "+", num2, "=", num1+num2);

    }
    else if(cal === "-"){
        document.write(num1, "-", num2, "=", num1-num2);

    }
    else if(cal === "/"){
        document.write(num1, "/", num2, "=", num1/num2);
    }
    else{ //else() 이렇게 쓰면 안되는 이유
        document.write("이 연산은 할 수 없어요.");
    }



    return document.write(num1 + cal + num2 + "=" + result );
}

calculator()