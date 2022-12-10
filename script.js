// Array of possible answers
let choices = ['rock', 'paper', 'scissors'];

// Generate computer choice
const getComputerChoice = () => {
    let num = Math.floor(Math.random() * 3 + 1);
    console.log(`Computer chose ${choices[num-1]}`);
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
    if (computerChoice === choices[0]) {
        if (playerChoice === choices[0]) {
            announceRound(computerChoice, playerChoice, 'tie!');
            return 0;
        } else if (playerChoice === choices[1]) {
            announceRound(computerChoice, playerChoice, 'you win!');
            return true;
        } else {
            announceRound(computerChoice, playerChoice, 'you lose!');
            return false;
        }
    } else if (computerChoice === choices[1]) {
        if (playerChoice === choices[0]) {
            announceRound(computerChoice, playerChoice, 'you lose!');
            return false;
        } else if (playerChoice === choices[1]) {
            announceRound(computerChoice, playerChoice, 'tie!');
            return 0;
        } else {
            announceRound(computerChoice, playerChoice, 'you win!');
            return true;
        }
    } else {
        if (playerChoice === choices[0]) {
            announceRound(computerChoice, playerChoice, 'you win!');
            return true;
        } else if (playerChoice === choices[1]) {
            announceRound(computerChoice, playerChoice, 'you lose!');
            return false;
        } else {
            announceRound(computerChoice, playerChoice, 'tie!');
            return 0;
        }
    }
}

// Declare winner of round
const announceRound = (computerChoice, playerChoice, result) => {
    console.log(`Computer chose ${computerChoice} and you chose ${playerChoice}, so ${result}`);
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
        continue;
    }
}

// Declare a winner
determineWinner(computerCounter, playerCounter);