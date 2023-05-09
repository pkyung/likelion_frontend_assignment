const increaseButton = document.querySelector('.increase')
const resetButton = document.querySelector('.reset')
let h1 = document.querySelector('h1')

let i = 0
function handleincreasenumber () {
    h1.innerHTML = ++i;
}

 increaseButton.addEventListener ('click', handleincreasenumber) 


function handleresetnumber () {
    i = 0
    h1.innerHTML = 0
}
 resetButton.addEventListener ('click', handleresetnumber)