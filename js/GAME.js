let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector("score-board");
const result_p=document.querySelector(".result>p");
const stone_div=document.getElementById("r")
const paper_div=document.getElementById("p")
const scissor_div=document.getElementById("s")


function getComputerChoice(){
	const choices=['r','p','s'];
	const randomNumber=Math.floor(Math.random()*3);
	return choices[randomNumber];
}
/*console.log(getComputerChoice());*/

function convertToWord(letter){
	if (letter=="r") return "Stone";
	if (letter=="p") return "Paper";
	return "Scissor";
}

function win(userChoice,computerChoice){
	userScore++;
	userScore_span.innerHTML=userScore;
	computerScore_span.innerHTML=computerScore;
	result_p.innerHTML=convertToWord(userChoice) +" beats " +convertToWord(computerChoice)+"."+" Yipee! You Won! ";	

}

function lose(userChoice,computerChoice ){
	/*console.log("LOST");*/
	computerScore++;
	userScore_span.innerHTML=userScore;
	computerScore_span.innerHTML=computerScore;
	result_p.innerHTML=convertToWord(userChoice) +" loses to " +convertToWord(computerChoice)+"."+" Oops! You Lose... ";	
}

function draw(userChoice,computerChoice){
	/*console.log("DRAWW");*/
	result_p.innerHTML=convertToWord(userChoice) +" equals " +convertToWord(computerChoice)+"."+" Hey! It's a draw... ";	
}


function game(userChoice){
	console.log("Hey you clicked "+ userChoice);
	const computerChoice=getComputerChoice();
    switch(userChoice+computerChoice){
    case"rs":
    case"pr":
    case"sp":
   /* console.log("USER WINS");*/
   win(userChoice,computerChoice);
    break;

    case"rp":
    case"ps":
    case"sr":
   /* console.log("USER LOSES");*/
   lose(userChoice,computerChoice);
    break;

    case"rr":
    case"pp":
    case"ss":
   /* console.log("IT'S A DRAW");*/
   draw(userChoice,computerChoice);
    break;
}
}
function main(){
stone_div.addEventListener('click',function(){
	game("r")
})
paper_div.addEventListener('click',function(){
	game("p")
})
scissor_div.addEventListener('click',function(){
	game("s")
})

}
main();

