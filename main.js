function userPlay() {
    let user_input = prompt("Rock Paper or Scissors?").toLowerCase();
    return user_input;
}

function compPlay() {
    let options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random * 3)];
}

function game(userInput, compInput) {
    if(userInput === 'rock') {
        if(compInput === "paper") {
            return ("Computer brings out paper, YOU LOSE");
        }
        else if(compInput === "scissors") {
            return ("Computer brings out scissors, YOU WIN");
        }
        else {
            return ("Computer brings out rock, MATCH TIED");
        }
    }
    else if(userInput === "paper") {
        if(compInput === "paper") {
            return ("Computer brings out paper, MATCH TIED");
        }
        else if(compInput === "scissors") {
            return ("Computer brings out scissors, YOU LOSE");
        }
        else {
            return ("Computer brings out rock, YOU WIN");
        }
    }
    else if(userInput === "scissors"){
        if(compInput === "paper") {
            return ("Computer brings out paper, YOU WIN");
        }
        else if(compInput === "scissors") {
            return ("Computer brings out scissors, MATCH TIED");
        }
        else {
            return ("Computer brings out rock, YOU LOSE");
        }
    }
    else {
        return ("INVALID INPUT");
    }
}

let choice = 'y';

while(true) {
    choice = prompt("DO YOU WISH TO PLAY ROCK PAPER SCISSORS!!!!!???!!!?!?!?!?!?uwu(y/n)").toLowerCase();
    if(choice === 'n') {
        break;
    }

    alert(game(userPlay(), compPlay()));
}