// Rock Paper Scissors
//variable array of ,rock, paper, scissors,
//variable to choose how many rounds to play max 10 rounds
//variable to randomly pick  any of the 3 options
//input variable asks player to choose one of 3 options
//function that compares and decidses the winner per round
//function that counts and declares the winner per session

// logic of the game:
//-scissors beat paper,
//-paper beats rock,
//-rock beats scissors,


let choiceArray = ["rock", "paper", "scissors"];
// randomizer ai
function computerChoice(){

    let computerSelection = choiceArray[Math.round(Math.random()*2)];    
    return computerSelection;
    };

// player choiceS
function playerChoice(){
    const buttons = this.document.querySelectorAll('button');
    buttons.forEach((btn) => btn.addEventListener('click', () =>{
        playRound(btn.id, computerChoice());
    }));



}



// handles main gamelogic + keeping score by returning a number  
function playRound(playerInput , aiInput){
    let scoreCount =0;
    let computerSelection = aiInput;
    let playerSelection = playerInput;
    const display = document.querySelector('#display'); 
    const para = document.createElement('p');

    let resultText = `computer chose ${computerSelection} , you chose ${playerSelection} `; 
    switch(playerSelection){
        case choiceArray[0]:
            if(computerSelection == playerSelection){
                if(!display.firstChild ){
                para.textContent =`${resultText}its a tie!`;
                display.appendChild(para);
                } else {display.removeChild(para)}

            }
            else if(computerSelection == choiceArray[1]){
              
                para.textContent =`${resultText} Computer win!`;
                display.appendChild(para);
                scoreCount--;
            }
            else if(computerSelection == choiceArray[2]){
             
                para.textContent =`${resultText} You win`;
                display.appendChild(para);
                scoreCount++;
            }
            break;
        case choiceArray[1]:
            if(computerSelection == playerSelection){
               
                para.textContent =`${resultText} its a tie!`;
                display.appendChild(para);
            }
            else if(computerSelection == choiceArray[0]){
              
                para.textContent =`${resultText} You win!`;
                display.appendChild(para);
                scoreCount++;
            }
            else if(computerSelection == choiceArray[2]){
               
                para.textContent =`${resultText} Computer wins!`;
                display.appendChild(para);
                scoreCount--;
            }
            break;
        case choiceArray[2]:
            if(computerSelection == playerSelection){
                
                para.textContent =`${resultText} its s tie!`;
                display.appendChild(para);
            }
            else if(computerSelection == choiceArray[1]){
                
                para.textContent =`${resultText} You wins!`;
                display.appendChild(para);
                scoreCount++;
            }
            else if(computerSelection == choiceArray[0]){

                para.textContent =`${resultText} Computer win`;
                display.appendChild(para);
                scoreCount--;
            }
            break;
        default:
    }

    return scoreCount;


}

//handles calculatin the winner using a recived number
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

    let i =0;
    if(i < 3){
        playerChoice();
        i++;
    }

}
game();
