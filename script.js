/*
FUNCTION getComputerChoice
    GET random number
    IF random number == 1 THEN
        RETURN rock
    ELSE IF random number == 2 THEN
        RETURN paper
    ELSE
        RETURN scissors

FUNCTION getHumanChoice
    GET humanChoice of rock paper or scissors
    RETURN humanChoice (make it case sensitive)

FUNCTION playGame
    INIT humanScore as 0
    INIT computerScore as 0

    FUNCTION playRound
        const computerChoice as getComputerChoice
        const humanChoice as getHumanChoice

        IF player beats computer THEN
            increment humanScore by 1
            console.log(You win! X beats Y)
        Else
            increment ComputerScore by 1
            console.log(You lose! X beats Y)

    CALL playRound()
    CALL playRound()
    CALL playRound()
    CALL playRound()
    CALL playRound()

Call playGame()
*/

let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors", );
    return humanChoice;
}

getHumanChoice();