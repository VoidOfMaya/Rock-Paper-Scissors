// Rock Paper Scissors
//array of ,rock, paper, scissors,
//function to choose how many rounds to play max 10 rounds
//function to randomly pick  any of the 3 options
//function allows player to choose one of 3 options
//function that compares and decidses the winner per round
//function that counts and declares the winner per session
// logic of the game:
//-scissors beat paper,
//-paper beats rock,
//-rock beats scissors,

let choiceArray = ["rock", "paper", "scissors"];
let computerScore = 0;
let userScore = 0;


let computerChoice = choiceArray[Math.round(Math.random()*2)];


let userChoice = prompt ("write to console one of the following choises:\n rock / paper / scissors").toLowerCase();


function playRound(playerSelection, computerSelection){
    switch(playerSelection){
        case "rock":
            if(computerSelection == playerSelection){
                console.log("tie!");
            }
            else if(computerSelection == "paper"){
                console.log("Computer wins!")
                return computerScore + 1;
            }
            else if(computerSelection == "scissors"){
                console.log("You win");
                return userScore + 1;
            }
            break;
        case "paper":
            if(computerSelection == playerSelection){
                console.log("tie!");
            }
            else if(computerSelection == "rock"){
                console.log("You win!")
                return userScore + 1;
            }
            else if(computerSelection == "scissors"){
                console.log("Computer wins!");
                return computerScore + 1;
            }
            break;
        case "scissors":
            if(computerSelection == playerSelection){
                console.log("tie!");
            }
            else if(computerSelection == "paper"){
                console.log("You wins!")
                return userScore + 1;
            }
            else if(computerSelection == "rock"){
                console.log("Computer win");
                return computerScore + 1;
            }
            break;
        default:
    }
}

