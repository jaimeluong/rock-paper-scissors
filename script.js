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
        return 0;
    } else if (computerChoice == 'rock' && playerChoice == 'paper') {
        console.log("Computer chose rock and you chose paper, so you win!");
        return true;
    } else if (computerChoice == 'rock' && playerChoice == 'scissors') {
        console.log("Computer chose rock and you chose scissors, so you lose!");
        return false;
    } else if (computerChoice == 'paper' && playerChoice == 'rock') {
        console.log("Computer chose paper and you chose rock, so you lose!");
        return false;
    } else if (computerChoice == 'paper' && playerChoice == 'paper') {
        console.log("Computer chose paper and you chose paper, so tie!");
        return 0;
    } else if (computerChoice == 'paper' && playerChoice == 'scissors') {
        console.log("Computer chose paper and you chose scissors, so you win!");
        return true;
    } else if (computerChoice == 'scissors' && playerChoice == 'rock') {
        console.log("Computer chose scissors and you chose rock, so you win!");
        return true;
    } else if (computerChoice == 'scissors' && playerChoice == 'paper') {
        console.log("Computer chose scissors and you chose paper, so you lose!");
        return false;
    } else {
        console.log("Computer chose scissors and you chose scissors, so tie!");
        return 0;
    }
}

// Determine a winner out of the 5 rounds
const determineWinner = (computer, player) => {
    if(computer > player) {
        console.log(`The computer won ${computer} round(s) and you won ${player} round(s). Good luck next time!`);
    } else if (computer === player) {
        console.log(`The computer won ${computer} round(s) and you won ${player} round(s). You tied!`);
    } else {
        console.log(`The computer won ${computer} round(s) and you won ${player} round(s). Congratulations!`);
    }
}

// Initialize counters to keep track of score throughout games
let computerCounter = 0;
let playerCounter = 0;

// Play five rounds
for(var i=0; i<5; i++) {
    let result = game(getComputerChoice(), askPlayerChoice());
    if(result === true) {
        playerCounter++;
    } else if (result === false) {
        computerCounter++;
    } else {
    }
}

// Declare a winner
determineWinner(computerCounter, playerCounter);