// Get nodes on page
// Rock, paper, scissors buttons and reset button
const rockButton = document.querySelector('#rockBtn'); // Rock button
const paperButton = document.querySelector('#paperBtn'); // Paper button
const scissorsButton = document.querySelector('#scissorsBtn'); // Scissors button
const resetButton = document.querySelector('#resetBtn'); // Reset button

// Text showing the choice the player just made
const choiceMade = document.querySelector('.choiceMade');
choiceMade.textContent = 'You chose...';

// Running scores for player and computer
const playerRunningScore = document.querySelector('.playerRunningScore');
playerRunningScore.textContent = 0;
const computerRunningScore = document.querySelector('.computerRunningScore');
computerRunningScore.textContent = 0;

// Text showing who won the last round
const roundWinner = document.querySelector('.roundWinner');
// Text showing the final winner
const finalWinner = document.querySelector('.finalWinner')

// Array of possible choices
let choices = ['rock', 'paper', 'scissors'];

// Generate computer choice
// When this function is called, it returns a string of rock, paper, or scissors
const getComputerChoice = () => {
    let num = Math.floor(Math.random() * 3 + 1);
    let computerChoice;
    switch(num) {
        case 1: computerChoice = choices[0]; // Rock
            break;
        case 2: computerChoice = choices[1]; // Paper
            break;
        case 3: computerChoice = choices[2]; // Scissors
            break;
    }
    return computerChoice;
}

// Initialize counter variables
let playerScore = 0;
let cpuScore = 0;
let rounds = 0;

// Add event listeners to 3 buttons
// On click, run playGame with the specifed choice
// Stop after 5 rounds and declare winner
rockButton.addEventListener('click', () => {
    playGame('rock');
    rounds++;
    if(rounds === 5) {
        if(playerScore > cpuScore) {
            finalWinner.textContent = `Player won ${playerScore} round(s) and computer won ${cpuScore} round(s), so you win!`;
        } else if(playerScore < cpuScore) {
            finalWinner.textContent = `Player won ${playerScore} round(s) and computer won ${cpuScore} round(s), so you lose!`;
        } else {
            finalWinner.textContent = `Player won ${playerScore} round(s) and computer won ${cpuScore} round(s), so you tie!`;
        }
    }
});
paperButton.addEventListener('click', () => {
    playGame('paper');
    rounds++;
    if(rounds === 5) {
        if(playerScore > cpuScore) {
            finalWinner.textContent = `Player won ${playerScore} round(s) and computer won ${cpuScore} round(s), so you win!`;
        } else if(playerScore < cpuScore) {
            finalWinner.textContent = `Player won ${playerScore} round(s) and computer won ${cpuScore} round(s), so you lose!`;
        } else {
            finalWinner.textContent = `Player won ${playerScore} round(s) and computer won ${cpuScore} round(s), so you tie!`;
        }
    }
});
scissorsButton.addEventListener('click', () => {
    playGame('scissors');
    rounds++;
    if(rounds === 5) {
        if(playerScore > cpuScore) {
            finalWinner.textContent = `Player won ${playerScore} round(s) and computer won ${cpuScore} round(s), so you win!`;
        } else if(playerScore < cpuScore) {
            finalWinner.textContent = `Player won ${playerScore} round(s) and computer won ${cpuScore} round(s), so you lose!`;
        } else {
            finalWinner.textContent = `Player won ${playerScore} round(s) and computer won ${cpuScore} round(s), so you tie!`;
        }
    }
});

// Update running score display
const updateRunningScore = () => {
    playerRunningScore.textContent = playerScore;
    computerRunningScore.textContent = cpuScore;
}

// Play a game
const playGame = (playerChoice) => { // Choice is a string
    choiceMade.textContent = `You chose ${playerChoice}`;
    let computerChoice = getComputerChoice();

    if(playerChoice === computerChoice) { // Tie condition
        roundWinner.textContent = `You both chose ${playerChoice}, so you tie!`;
        updateRunningScore();
    } else {
        if(playerChoice === choices[0] && computerChoice === 'paper') { // Player chose rock, computer chose paper
            roundWinner.textContent = `You chose ${playerChoice} and computer chose ${computerChoice}, so you lose!`;
            cpuScore++;
            updateRunningScore();
        } else if(playerChoice === choices[0] && computerChoice === 'scissors') { // Player chose rock, computer chose scissors
            roundWinner.textContent = `You chose ${playerChoice} and computer chose ${computerChoice}, so you win!`;
            playerScore++;
            updateRunningScore();
        } else if(playerChoice === choices[1] && computerChoice === 'rock') { // Player chose paper, computer chose rock
            roundWinner.textContent = `You chose ${playerChoice} and computer chose ${computerChoice}, so you win!`;
            playerScore++;
            updateRunningScore();
        } else if(playerChoice === choices[1] && computerChoice === 'scissors') { // Player chose paper, computer chose scissors
            roundWinner.textContent = `You chose ${playerChoice} and computer chose ${computerChoice}, so you lose!`;
            cpuScore++;
            updateRunningScore();
        } else if(playerChoice === choices[2] && computerChoice === 'rock') { // Player chose scissors, computer chose rock
            roundWinner.textContent = `You chose ${playerChoice} and computer chose ${computerChoice}, so you lose!`;
            cpuScore++;
            updateRunningScore();
        } else { // Final case for playing chose scissors and computer chose paper
            roundWinner.textContent = `You chose ${playerChoice} and computer chose ${computerChoice}, so you win!`;
            playerScore++;
            updateRunningScore();
        }
    }
}

// Reset the game if reset button is clicked
resetButton.addEventListener('click', () => {
    playerRunningScore.textContent = 0;
    computerRunningScore.textContent = 0;
    playerScore = 0;
    cpuScore = 0;
    rounds = 0;
    roundWinner.textContent = '';
    finalWinner.textContent = '';
    choiceMade = '';
});