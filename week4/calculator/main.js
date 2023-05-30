let num1= parseInt(prompt("첫 번째 숫자를 입력하세요"))
let cal= prompt("연산자를 입력하세요")  
let num2= parseInt(prompt("두 번째 숫자를 입력하세요"))

let result 
function calculator(num1,num2,cal){
    if(cal == "*"){
        result = num1 * num2 
    }

    else if(cal == "+" ){
        result = num1 + num2
    }

    else if(cal == "-" ){
        result = num1 - num2
    }

    else if(cal == "/" ){
        result = num1 / num2 
    }

    return document.write(num1+ cal + num2 + "=" + result);
    
}
calculator(num1,num2,cal)