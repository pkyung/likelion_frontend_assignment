const calculator = (num1, cal, num2) => {
  let result
  switch (cal) {
    case '+':
      result = num1 + num2
      break
    case '-':
      result = num1 - num2
      break
    case '*':
      result = num1 * num2
      break
    case '/':
      result = num1 / num2
      break
  }
  return document.write(`${num1}${cal}${num2}=${result}`)
}

const init = () => {
  const fstNumber = parseInt(prompt('첫 번째 숫자를 입력하세요.'))
  const operator = prompt('연산자를 입력하세요.')
  const secNumber = parseInt(prompt('두 번째 숫자를 입력하세요.'))

  calculator(fstNumber, operator, secNumber)
}

init()
