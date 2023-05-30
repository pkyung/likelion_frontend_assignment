var a = Number(prompt("첫 번째 숫자를 입력하세요."))
var b = prompt("연산자를 입력하세요.")
var c = Number(prompt("두 번째 숫자를 입력하세요."))

var d = 0;
function calcul(num1,cal,num2){
    if (cal=='+'){
        d = num1+num2;
    }
    else if (cal=='-'){
        d = num1-num2;
    }
    else if (cal=='*'){
        d = num1*num2;
    }
    else if (cal=='/'){
        d = num1/num2;
    }
    else{
        alert("잘 못 입력하셨습니다.")
    }

    return document.write(num1+" "+cal+" "+num2+' = '+d);

}
console.log(calcul(a,b,c));