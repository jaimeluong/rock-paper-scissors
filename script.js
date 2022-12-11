// Get nodes on page
const rockButton = document.querySelector('#rockBtn'); // Rock button
const paperButton = document.querySelector('#paperBtn'); // Paper button
const scissorsButton = document.querySelector('#scissorsBtn'); // Scissors button

const choiceMade = document.querySelector('.choiceMade'); // Line of text saying the player's most recent choice

const playerRunningScore = document.querySelector('.playerRunningScore'); // Number showing the player's current score
playerRunningScore.textContent = 0;
const computerRunningScore = document.querySelector('.computerRunningScore'); // Number showing the computer's current score
computerRunningScore.textContent = 0;

const roundWinner = document.querySelector('.roundWinner'); // Line of text saying who won that round
const finalWinner = document.querySelector('.finalWinner'); // Line of text displaying the final winner

// Array of possible answers
let choices = ['rock', 'paper', 'scissors'];

// Generate computer choice
// When this function is called, it returns a string of rock, paper, or scissors
const getComputerChoice = () => {
    let num = Math.floor(Math.random() * 3 + 1);
    let computerChoice;
    switch(num) {
        case 1: computerChoice = choices[0];
            break;
        case 2: computerChoice = choices[1];
            break;
        case 3: computerChoice = choices[2];
            break;
    }
    return computerChoice;
}

// Array of computer's choices to play against
const cpuChoices = [];
for(var i=0; i<5; i++) {
    cpuChoices.push(getComputerChoice());
}
console.log(cpuChoices);

// Add event listeners to 3 buttons
rockButton.addEventListener('click', () => {
    playGame('rock');
});
paperButton.addEventListener('click', () => {
    playGame('paper');
});
scissorsButton.addEventListener('click', () => {
    playGame('scissors');
});

// Initialize counter variables
let playerScore = 0;
let cpuScore = 0;

// Play a game
const playGame = (choice) => { // Choice is a string
    choiceMade.textContent = `You chose ${choice}`;
    if(choice === cpuChoices[0]) { // If a tie is found for the first round, works for R/P/S
        roundWinner.textContent = `Computer and you both chose ${choice}, so you've tied`;
    } else if(choice === 'rock' && cpuChoices[0] === 'scissors') {
        roundWinner.textContent = `Rock beats scissors, so you win`;
        playerScore++;
    } else {
        roundWinner.textContent = `Scissors beats rock, so you lost`;
    }
}