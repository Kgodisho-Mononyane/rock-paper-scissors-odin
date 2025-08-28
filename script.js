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
    let humanChoice = prompt("Rock, Paper or Scissors", ).toLowerCase();
    return humanChoice;
}

console.log(getHumanChoice())

// FUNCTION playGame
//     INIT humanScore as 0
//     INIT computerScore as 0

//     FUNCTION playRound
//         const computerChoice as getComputerChoice
//         const humanChoice as getHumanChoice

//         IF player beats computer THEN
//             increment humanScore by 1
//             console.log(You win! X beats Y)
//         Else
//             increment ComputerScore by 1
//             console.log(You lose! X beats Y)

//     CALL playRound()
//     CALL playRound()
//     CALL playRound()
//     CALL playRound()
//     CALL playRound()

// Call playGame()


let humanScore = 0;
let computerScore = 0;


getHumanChoice();