
function count(id)  {
  const resultElement = document.getElementById('result');
  
  let number = resultElement.innerText;
  
  if(id === 'increase') {
    number = parseInt(number) + 1;
  }
  else if(id === 'reset')  {
    number = parseInt(number) * 0;
  }
  
  resultElement.innerText = number;
}
