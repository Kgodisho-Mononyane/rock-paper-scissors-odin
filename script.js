let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3) + 1;
    if (randNum == 1) {
        return "Rock";
    } else if (randNum == 2) {
        return "Paper"
    } else {
        return "Scissors"
    } 
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors", );
    return humanChoice;
}

getHumanChoice();