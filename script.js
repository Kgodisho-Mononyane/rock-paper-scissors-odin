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
    const target = e.target;
    const buttonMap = {
        "rock-btn": "rock",
        "paper-btn": "paper",
        "scissors-btn": "scissors"
    };
    
    if (buttonMap[target.id]) {
        playRound(buttonMap[target.id]);
    } else if (target.id === "reset-btn") {
        reset();
    }; 
});

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
    playerCounter.textContent = humanScore;
    computerCounter.textContent = computerScore;
}

function playRound(humanChoice) {
        const computerChoice = getComputerChoice();

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

        playerCounter.textContent = humanScore;
        computerCounter.textContent = computerScore;
    }




