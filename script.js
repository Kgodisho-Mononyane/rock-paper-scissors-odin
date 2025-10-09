let humanScore = 0;
let computerScore = 0;

const headingOne = document.querySelector("#heading-one");
const headingTwo = document.querySelector("#heading-two");
const container = document.querySelector("#button-container");
const output = document.querySelector("#output");
const playerCounter = document.querySelector("#player-counter");
const computerCounter = document.querySelector("#computer-counter");

playerCounter.textContent = humanScore;
computerCounter.textContent = computerScore;

container.addEventListener("click", (e) => {
    let target = e.target;
    switch(target.id) {
        case "rock-btn":
            console.log("rock clicked");
            //call playRound function playRound(rock)
            playRound(rock)
            break;
        case "paper-btn":
            console.log("paper clicked");
            //call playRound function playRound(paper)
            playRound(paper)
            break;
        case "scissors-btn":
            console.log("scissors-btn");
            //call playRound function playRound(scissors)
            playRound(scissors)
            break;
        case "reset-btn":
            console.log("reset-btn")
            reset();
            break;
    }
})

function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3) + 1;
    if (randNum == 1) {
        return "rock";
    } else if (randNum == 2) {
        return "paper"
    } else {
        return "scissors"
    } 
}

function getHumanChoice(choice) {
    let humanChoice = choice;
    return humanChoice.toLowerCase();
}

function playRound(choice) {
        const computerChoice = getComputerChoice();
        const humanChoice = choice;

        if (humanChoice === computerChoice) {
            console.log(`It's a tie! You both picked ${humanChoice}. The score is ${humanScore}-${computerScore}.`)
        } else if 
            (humanChoice == "rock" && computerChoice == "scissors" ||
            humanChoice == "paper" && computerChoice == "rock" ||
            humanChoice == "scissors" && computerChoice == "paper") {
                humanScore++;
                console.log(`You win! ${humanChoice} beats ${computerChoice}. The score is ${humanScore}-${computerScore}.`);
            } else {
                computerScore++;
                console.log(`You lose! ${computerChoice} beats ${humanChoice}. The score is ${humanScore}-${computerScore}.`);
            }
    }

function playGame() {
    

}

function reset() {
    headingOne.textContent = "Choose Your Weapon!";
    headingTwo.textContent = "First to 5 wins!"
    humanScore = 0;
    computerScore = 0; 
    playerCounter.textContent = "0";
    computerCounter.textContent = "0";
}

playGame();



