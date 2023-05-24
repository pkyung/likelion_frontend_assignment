const choices = document.getElementsByClassName("choice");
const computerChoiceElement = document.getElementById("computer-choice");
const userChoiceElement = document.getElementById("user-choice");

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', function(event) {
  const userChoice = event.target.className;
  playGame(userChoice);
});

paper.addEventListener('click', function(event) {
  const userChoice = event.target.className;
  playGame(userChoice);
});

scissors.addEventListener('click', function(event) {
  const userChoice = event.target.className;
  playGame(userChoice);
});

function playGame(userChoice) {
  const computerChoice = generateComputerChoice();
  
  computerChoiceElement.innerHTML = "<img src='" + computerChoice + ".jpg' alt='컴퓨터 선택'>";
  userChoiceElement.innerHTML = "<img src='" + userChoice + ".jpg' alt='사용자 선택'>";
}

function generateComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}


// function playGame(userChoice) {
//   const computerChoice = generateComputerChoice();
    
//   computerChoiceElement.innerHTML = "<img src='" + computerChoice + ".jpg' alt='컴퓨터 선택'>";
//   userChoiceElement.innerHTML = "<img src='" + userChoice + ".jpg' alt='사용자 선택'>";
// }

// function generateComputerChoice(computerChoice) {
//   const choices = ["rock", "paper", "scissors"];
//   const randomIndex = Math.floor(Math.random() * choices.length);
//   return choices[randomIndex];
// }


// function playGame(userChoice) {
//     const computerChoice = generateComputerChoice();
  
//     computerElement.innerHTML = "<img src='" + computer + ".jpg' alt='컴퓨터 선택'>";
//     userElement.innerHTML = "<img src='" + user + ".jpg' alt='사용자 선택'>";

//   }
  
// function generateComputerChoice() {
//     const choices = ["rock", "paper", "scissors"];
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     return choices[randomIndex];
//   }

// for (let i = 0; i < choices.length; i++) {
//       choices[i].addEventListener("click", function() {
//         let userChoice = this.id;
//         let computerChoice = generateComputerChoice();
        
//         computerChoiceElement.innerHTML = "<img src='" + computerChoice + ".jpg' alt='컴퓨터 선택'>";
//         userChoiceElement.innerHTML = "<img src='" + userChoice + ".jpg' alt='사용자 선택'>";
        
//         let result = determineResult(userChoice, computerChoice);
//         resultElement.textContent = result;
//       });
//     };
