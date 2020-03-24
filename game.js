const options = ['rock', 'paper', 'scissors']
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const playerMarker = document.getElementById('player-score');
const cpuMarker = document.getElementById('cpu-score');
const cpuMove = document.getElementById('cpuMove')
const heading = document.getElementById('declaration')
const menu = document.getElementById('menu')
const theme = document.querySelector('.theme')
const blue = document.getElementById('blue')
const orange = document.getElementById('orange')
const html = document.getElementsByTagName('html')[0]

let cpuScore = 0;
let playerScore = 0;

orange.onclick = function () {
    html.style.setProperty('--darkestColor', 'rgb(255, 120, 57)');
    html.style.setProperty('--midColor', 'rgb(255, 162, 118)');
    html.style.setProperty('--lightestColor', 'rgb(255, 225, 210)');
}

blue.onclick = function () {
    html.style.setProperty('--darkestColor', 'rgb(57, 110, 255)');
    html.style.setProperty('--midColor', 'rgb(130, 163, 253)');
    html.style.setProperty('--lightestColor', 'rgb(210, 222, 255)');
}

menu.onclick = function () {
    theme.classList.toggle('theme-active')
    theme.classList.toggle('theme')
}

function computer() {
    return Math.floor(Math.random() * 3);
};

rock.onclick = function () {
    const computerPlay = computer();
    if (computerPlay == 2) {
        playerScore += 1;
        cpuMove.src = 'scissors.png'
        headingModifier('Player', 'Computer')
    } else if (computerPlay == 1) {
        cpuScore += 1;
        cpuMove.src = 'paper.png'
        headingModifier('Computer', 'Player')
    } else {
        cpuMove.src = 'rock.png'
        headingModifier()
    }
    playerMarker.innerHTML = playerScore;
    cpuMarker.innerHTML = cpuScore;
};

paper.onclick = function () {
    const computerPlay = computer();
    if (computerPlay == 0) {
        playerScore += 1;
        cpuMove.src = 'rock.png'
        headingModifier('Player', 'Computer')
    } else if (computerPlay == 2) {
        cpuScore += 1;
        cpuMove.src = 'scissors.png'
        headingModifier('Computer', 'Player')
    } else {
        cpuMove.src = 'paper.png'
        headingModifier()
    }
    playerMarker.innerHTML = playerScore;
    cpuMarker.innerHTML = cpuScore;
};

scissors.onclick = function () {
    const computerPlay = computer();
    if (computerPlay == 1) {
        playerScore += 1;
        cpuMove.src = 'paper.png'
        headingModifier('Player', 'Computer')
    } else if (computerPlay == 0) {
        cpuScore += 1;
        cpuMove.src = 'rock.png'
        headingModifier('Computer', 'Player')
    } else {
        cpuMove.src = 'scissors.png'
        headingModifier()
    }
    playerMarker.innerHTML = playerScore;
    cpuMarker.innerHTML = cpuScore;
};

function headingModifier(winner, loser) {
    if (loser !== undefined && winner !== undefined) {
        heading.innerHTML = `${winner} beats ${loser}`
    } else {
        heading.innerHTML = `Draw`
    }
}