//DOM tree manipulation

let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("compScore");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");
const score_div = document.querySelector(".score");
const images_div = document.querySelector(".fate");
const button_div = document.querySelector(".btn");

// Makes Rock, Paper, Scissors into a number between 0 and 2 and returning it back as a number.
function getComputerChoice() { 
    const fate = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() *3);
    return fate [randomNumber];
}

// Adds user score and winning text color
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.style.color = "#077A33"
}
// Adds comp score and losing text color
function lose(userChoice, computerChoice) {
    compScore++;
    compScore_span.innerHTML = compScore;
    result_p.style.color = "#7A071E"

}

function endGame(){
    if (compScore === 5 || userScore === 5) {
    images_div.style.display = 'none';
    result_p.innerHTML = "GAME OVER";
    button_div.style.visibility = "visible";  
}
}

// Gets and prints round result
function game(userChoice) {
       const computerChoice = getComputerChoice();
       result_p.style.color = "#14aacf9f";
       switch (userChoice + computerChoice) {
       case "RockScissors":
        result_p.innerHTML = "Your Rock crushed the Scissors.";
        win()
        break;
       case "ScissorsPaper":
        result_p.innerHTML = "Your Scissors slashed the Paper.";
        win()
        break;
       case "PaperRock":
        result_p.innerHTML = "Your Paper extinguished their Rock.";
        win()
        break;
       case "RockPaper":
        result_p.innerHTML = "Paper plastered your Rock.";
        lose()
        break;
       case "ScissorsRock":
        result_p.innerHTML = "Rock smashed your Scissors.";
        lose()
        break;
       case "PaperScissors":
        result_p.innerHTML = "Scissors sliced your Paper.";
        lose()
        break;
       case "RockRock":
       case "ScissorsScissors":
       case "PaperPaper":
        result_p.innerHTML = "Draw. Try again.";
        result_p.style.color = "#14aacf9f"
        break;
    }    
    endGame();
}

// Plays the game
function main(){ 
    rock_div.addEventListener('click', function() {
    game('Rock');
})

paper_div.addEventListener('click', function() {
    game('Paper');
})

scissors_div.addEventListener('click', function() {
    game('Scissors');
})
}

main();



