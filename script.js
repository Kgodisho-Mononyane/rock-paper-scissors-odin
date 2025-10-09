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
            //call playRound function playRound(rock)
            //playRound(rock)
            break;
        case "paper-btn":
            //call playRound function playRound(paper)
            //playRound(paper)
            break;
        case "scissors-btn":
            //call playRound function playRound(scissors)
            //playRound(scissors)
            break;
        case "reset-btn":
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

function reset() {
    headingOne.textContent = "Choose Your Weapon!";
    headingTwo.textContent = "First to 5 wins!"
    humanScore = 0;
    computerScore = 0; 
    playerCounter.textContent = "0";
    computerCounter.textContent = "0";
}

function playRound(choice) {
        const computerChoice = getComputerChoice();
        const humanChoice = choice;

        if (humanChoice === computerChoice) {
            headingOne.textContent = "You tied!"
            headingTwo.textContent = `You both picked ${computerChoice}`;
        } else if 
            (humanChoice == "rock" && computerChoice == "scissors" ||
            humanChoice == "paper" && computerChoice == "rock" ||
            humanChoice == "scissors" && computerChoice == "paper") {
                humanScore++;
                headingOne.textContent = "You Win!"
                headingTwo.textContent = `${humanChoice} beats ${computerChoice}.`;
            } else {
                computerScore++;
                headingOne.textContent = "You Lose!"
                headingTwo.textContent = `${computerChoice} beats ${humanChoice}.`;
            }
    }

function playGame() {
    
//play rounds until either the player or computer gets 5 points
}



playGame();



