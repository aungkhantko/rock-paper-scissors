let playerScore = 0;
let computerScore = 0;
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const result = document.getElementById("result");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const choices = ["rock", "paper", "scissor"];

function main() {
	rock.addEventListener("click", function(){
		game("rock");
	});
		
	paper.addEventListener("click", function(){
		game("paper");	
	});

	
	scissors.addEventListener("click", function(){
		game("scissors");	
	});
}

function game(playerMove) {
	let cMove = computerMove();
	let val = playerMove + cMove;
	switch(val) {
		case "rockscissors":
		case "paperrock":
		case "scissorspaper":
			win();
			break;
		case "rockpaper":
		case "paperscissors":
		case "scissorsrock":
			lose();
			break;
		default:
			draw();
	}	
}

function computerMove() {
	let val = Math.floor(Math.random() * 3);
	return choices[val];
}

function win() {
	result.innerHTML = "Win";	
	playerScoreSpan.innerHTML = ++playerScore;
}

function lose() {
	result.innerHTML = "Lose";
	computerScoreSpan.innerHTML = ++computerScore;
}

function draw() {
	result.innerHTML = "Draw";
}



main();
