const result = document.querySelector("h1");
const increaseButton = document.querySelector(".increase-button");
const resetButton = document.querySelector(".reset-button");

function handleIncreaseButton() {
    const value = parseInt(result.innerText);
    result.innerText = `${value + 1}`;
}

function handleResetButton() {
    result.innerText = "0";
}

increaseButton.addEventListener("click", handleIncreaseButton);
resetButton.addEventListener("click", handleResetButton);