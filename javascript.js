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


// array for game options index positons are 0=rock , 1=paper , 2=scissors
let choiceArray = ["rock", "paper", "scissors"];


// handles main gamelogic + keeping score
function playRound(sessionNumber){

    let scoreCount=0;

   
    for (let i = 0; i< sessionNumber; i++) {

        let computerSelection = choiceArray[Math.round(Math.random()*2)];
        let playerSelection = prompt ("write to console one of the following choises:\n rock / paper / scissors").toLowerCase();
        let resultText = `computer chose ${computerSelection} , you chose ${playerSelection} `;  
        
        switch(playerSelection){
            case choiceArray[0]:
                if(computerSelection == playerSelection){
                    console.log(`${resultText}its a tie!`);
                }
                else if(computerSelection == choiceArray[1]){
                    console.log(`${resultText} Computer win!`)
                    scoreCount--;
                }
                else if(computerSelection == choiceArray[2]){
                    console.log(`${resultText} You win`);
                    scoreCount++;
                }
                break;
            case choiceArray[1]:
                if(computerSelection == playerSelection){
                    console.log(`${resultText} its a tie!`);
                }
                else if(computerSelection == choiceArray[0]){
                    console.log(`${resultText} You win!`)
                    scoreCount++;
                }
                else if(computerSelection == choiceArray[2]){
                    console.log(`${resultText} Computer wins!`);
                    scoreCount--;
                }
                break;
            case choiceArray[2]:
                if(computerSelection == playerSelection){
                    console.log(`${resultText} its s tie!`);
                }
                else if(computerSelection == choiceArray[1]){
                    console.log(`${resultText} You wins!`)
                    scoreCount++;
                }
                else if(computerSelection == choiceArray[0]){
                    console.log(`${resultText} Computer win`);
                    scoreCount--;
                }
                break;
            default:
        }
    }
    return scoreCount;

}

//handles calculatin the winner
function sessionWiner(numb){
    if (gameResult == 0){
        console.log("this sessioin is a tie");
    }else if(gameResult > 0){
        console.log("You are the winner of this session");
    }else{
        console.log("Computer is the winner of this session");
    }     
}

//main game function that launches all game related function
function game (){
    let rounds = prompt("type in how many rounds youd like to play min is 3 rounds max is 10 rounds");
    gameResult = playRound(rounds);
    sessionWiner(gameResult);
 
}

game();