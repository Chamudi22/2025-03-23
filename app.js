document.addEventListener("DOMContentLoaded", function () {
    const randomNumber = Math.floor(Math.random() * 10) + 1; 
    let attempts = 3; 
    const guessButton = document.getElementById("guessButton");
    const guessInput = document.getElementById("guessInput");
    const messageDiv = document.getElementById("message");

    guessButton.addEventListener("click", function () {
        const userGuess = parseInt(guessInput.value);
        if (userGuess == randomNumber) {
            messageDiv.textContent = "Congratulations! You guessed the right number.";
        }else if(attempts < 3) {
            messageDiv.textContent = "Wrong guess! attempts left";
        }else{
            messageDiv.textContent = "Wrong guess. Try again!";
        }
    })
});

