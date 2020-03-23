//const options = ['rock', 'paper', 'scissors']
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const playerMarker = document.getElementById('player-score');
const cpuMarker = document.getElementById('cpu-score');
const cpuMove = document.getElementById('cpuMove')

let cpuScore = 0;
let playerScore = 0;
function computer() {
    return Math.floor(Math.random() * 3);
};

rock.onclick = function () {
    const computerPlay = computer();
    if (computerPlay == 2) {
        playerScore += 1;
        cpuMove.src = 'scissors.png'
    } else if (computerPlay == 1) {
        cpuScore += 1;
        cpuMove.src = 'paper.png'
    } else {
        cpuMove.src = 'rock.png'
    }
    playerMarker.innerHTML = playerScore;
    cpuMarker.innerHTML = cpuScore;
};

paper.onclick = function () {
    const computerPlay = computer();
    if (computerPlay == 0) {
        playerScore += 1;
        cpuMove.src = 'rock.png'
    } else if (computerPlay == 2) {
        cpuScore += 1;
        cpuMove.src = 'scissors.png'
    } else {
        cpuMove.src = 'paper.png'
    }
    playerMarker.innerHTML = playerScore;
    cpuMarker.innerHTML = cpuScore;
};

scissors.onclick = function () {
    const computerPlay = computer();
    if (computerPlay == 1) {
        playerScore += 1;
        cpuMove.src = 'paper.png'
    } else if (computerPlay == 0) {
        cpuScore += 1;
        cpuMove.src = 'rock.png'
    } else {
        cpuMove.src = 'scissors.png'
    }
    playerMarker.innerHTML = playerScore;
    cpuMarker.innerHTML = cpuScore;
};