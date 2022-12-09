// Array of possible answers
let choices = ['rock', 'paper', 'scissors'];

// Generate computer choice
const getComputerChoice = () => {
    let num = Math.floor(Math.random() * 3 + 1);
    console.log(`Computer chose ${choices[num-1]}`);
    let computerChoice;
    switch(num) {
        case 1: computerChoice = 'rock';
            break;
        case 2: computerChoice = 'paper';
            break;
        case 3: computerChoice = 'scissors';
            break;
    }
    return computerChoice;
}

// Ask for player choice
const askPlayerChoice = () => {
    let playerChoice = prompt("Choose rock, paper, or scissors").toLowerCase();
    if (choices.indexOf(playerChoice) === -1) {
        console.log("You did not pick a valid choice!");
        askPlayerChoice();
    } else {
        console.log(`You chose ${playerChoice}`);
    }
    return playerChoice;
}

// Play a round
const game = (computerChoice, playerChoice) => {
    if (computerChoice == 'rock' && playerChoice == 'rock') {
        console.log("Computer chose rock and you chose rock, so tie!");
    } else if (computerChoice == 'rock' && playerChoice == 'paper') {
        console.log("Computer chose rock and you chose paper, so you win!");
    } else if (computerChoice == 'rock' && playerChoice == 'scissors') {
        console.log("Computer chose rock and you chose scissors, so you lose!");
    } else if (computerChoice == 'paper' && playerChoice == 'rock') {
        console.log("Computer chose paper and you chose rock, so you lose!");
    } else if (computerChoice == 'paper' && playerChoice == 'paper') {
        console.log("Computer chose paper and you chose paper, so tie!");
    } else if (computerChoice == 'paper' && playerChoice == 'scissors') {
        console.log("Computer chose paper and you chose scissors, so you win!");
    } else if (computerChoice == 'scissors' && playerChoice == 'rock') {
        console.log("Computer chose scissors and you chose rock, so you win!");
    } else if (computerChoice == 'scissors' && playerChoice == 'paper') {
        console.log("Computer chose scissors and you chose paper, so you lose!");
    } else {
        console.log("Computer chose scissors and you chose scissors, so tie!");
    }
}

// Determine a winner out of the 5 rounds
const determineWinner = () => {

}

// Play five rounds and declare winner
for(var i=0; i<5; i++) {
    let computerCounter = 0;
    let playerCounter = 0;
    game(getComputerChoice(), askPlayerChoice());
}