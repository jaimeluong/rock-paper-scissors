// Array of possible answers
let choices = ['rock', 'paper', 'scissors'];

// Generate computer choice
const getComputerChoice = () => {
    let num = Math.floor(Math.random() * 3 + 1);
    console.log(num);
    let computerChoice;
    switch(num) {
        case 1: computerChoice = 'Rock';
            break;
        case 2: computerChoice = 'Paper';
            break;
        case 3: computerChoice = 'Scissors';
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