// Rock Paper Scissors
//array of ,rock, paper, scissors,
//function to choose how many rounds to play max 10 rounds
//function to randomly pick  any of the 3 options
//function allows player to choose one of 3 options
//function that compares and decidses the winner per round
//function that counts and declares the winner per session


let choiceArray = ["rock", "paper", "scissors"];


let ComputerChoice = choiceArray[Math.round(Math.random()*2)];


let userChoice = prompt ("write to console one of the following choises:\n rock / paper / scissors").toLowerCase();

console.log(userChoice);