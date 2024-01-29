// script.js
let playerScore = 0;
let computerScore = 0;
let highestScore = 0;

const choices = ["rock", "paper", "scissors"];

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        if (playerScore > highestScore) {
            highestScore = playerScore;
        }
        return "You win!";
    } else {
        computerScore++;
        if (computerScore > highestScore) {
            highestScore = computerScore;
        }
        return "You lose!";
    }
}

const buttons = document.querySelectorAll('.choice-btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const userChoice = button.id;
        const computerChoice = computerPlay();
        const result = playRound(userChoice, computerChoice);

        document.getElementById('result-text').textContent = result;
        document.getElementById('computer-choice-text').textContent = computerChoice;
        document.getElementById('score-text').textContent = `Player: ${playerScore} Computer: ${computerScore}`;
        document.getElementById('highest-score-text').textContent = `Highest Score: ${highestScore}`;
    });
});
