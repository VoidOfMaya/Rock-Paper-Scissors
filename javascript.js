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
    // logic objects
    let result;
    let computerCounter=0;
    let playerCounter=0;

    //DOM objects
    const buttons = this.document.querySelectorAll('button');
    const display = document.querySelector('#display');
    const score = document.querySelector('#score-tracker');
    const winnerDisplay = document.querySelector('.winner-display');
 


    buttons.forEach((btn) => btn.addEventListener('click', () =>{
        result = playRound(btn.id, computerChoice());


            if (result == 1){ playerCounter += 1}        //increments player wins
            else if( result == -1)(computerCounter += 1) //increments computer wins
            
            //console.log(`computer wins: ${computerCounter}, player wins: ${playerCounter}`);

            // keeps count of  wins for each player , and displays it to the DOM
            const aiScore = document.createElement('p');
            score.classList.add('airScore'); 
            aiScore.textContent = `computer: ${computerCounter}`;
            aiScore.style.padding ='20px';
            aiScore.style.border = '3px dotted';
            score.appendChild(aiScore);

            const userScore =document.createElement('p');
            score.classList.add('userScore');
            userScore.textContent = `player: ${playerCounter}`;
            userScore.style.padding ='20px';
            userScore.style.border = '3px dotted';
            score.appendChild(userScore);

            // replaces and updates DOM child to display updated results
            if(display.childNodes.length != 1){
                display.removeChild(display.firstChild);
            }     

            if(score.childNodes.length > 2 ){
                score.removeChild(score.firstChild);
                score.removeChild(score.firstChild);
            }

            // callculates the first to reach 5 wins and resets counters to 0, and displays  it in the DOM
            if( computerCounter == 5){
                console.log();
                computerCounter = 0;
                playerCounter = 0 ;

                const winnerComputer = document.createElement('p');
                winnerComputer.classList.add('winnerComputer'); 
                winnerComputer.textContent = 'COMPUTER IS THE WINNER';
                winnerDisplay.appendChild(winnerComputer);

            }else if(playerCounter == 5){
                console.log();
                computerCounter = 0;
                playerCounter = 0 ;

                const winnerPlayer= document.createElement('p');
                winnerPlayer.classList.add('winnerPlayer'); 
                winnerPlayer.textContent = 'PLAYER IS THE WINNER';
                winnerDisplay.appendChild(winnerPlayer);
            }

            if(winnerDisplay.childNodes.length > 1){
                winnerDisplay.removeChild(winnerDisplay.firstChild);
            }
    }));
  


}



// handles main gamelogic + keeping score by returning a number  returns [1 you win][-1 comuter win]
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
            
                para.textContent =`${resultText}its a tie!`;
                display.appendChild(para);

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

playerChoice();

