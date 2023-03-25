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



function playRound(){
    let computerSelection = choiceArray[Math.round(Math.random()*2)];
    let playerSelection = prompt ("write to console one of the following choises:\n rock / paper / scissors").toLowerCase();

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
function game (){
    let rounds = prompt("type in how many rounds youd like to play min is 3 rounds max is 10 rounds");
    for (let i = 0; i < rounds; i++){
        playRound();
    }
    calcScore(computerScore, userScore);
}
// computer score =scoreA, player score = scoreB
function calcScore(scoreA , scoreB){
    if(scoreA == scoreB){
        console.log("this session is a tie");
    }else if (scoreA > scoreB){
        console.log("computer wins this session")
    }else{
        console.log("You win this session!")
    }
}

game();