
const NUMBER_OF_ROUNDS = 5;
const INPUT_EVALUATION_REGEX = /^(rock|paper|scissors)$/i;

const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors';

const HAND_OPTIONS = [
    ROCK,
    PAPER,
    SCISSORS
];

const result = document.querySelector('.result');

function computerPlay() {
    return HAND_OPTIONS[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);

    const result = {
        player: playerSelection,
        computer: computerSelection,
        win: 0,
        lose: 0,
        draw: 0
    };

    if (playerSelection === computerSelection) {
        result.draw++;
    }
    else if (playerSelection === ROCK) {
        evalWinLoseResult(result, playerSelection, computerSelection, PAPER, SCISSORS);
    }
    else if (playerSelection === PAPER) {
        evalWinLoseResult(result, playerSelection, computerSelection, SCISSORS, ROCK);
    }
    else {
        evalWinLoseResult(result, playerSelection, computerSelection, ROCK, PAPER);
    }

    return result;
}

function evalWinLoseResult(result, playerSelection, computerSelection, computerWinSelection, computerLoseSelection) {
    if (computerSelection === computerWinSelection) {
        result.lose++;
        return;
    }
    // Since there's only one case remaining to deal with
    // We don't need to write any more conditions for that!
    result.win++;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}

function game(event) {
    let winCounter = 0;
    let loseCounter = 0;
    let playerInput = event.target.dataset.selection;
    
    roundResult = playRound(playerInput, computerPlay());
    if (roundResult.win) {
        result.textContent = `You won using ${playerInput} against ${roundResult.computer} by the computer!`;
    }
    else if (roundResult.lose) {
        result.textContent = `You lost using ${playerInput} against ${roundResult.computer} by the computer!`;
    }
    else {
        result.textContent = `It is a draw! You and the computer both chose ${playerInput}.`;
    }
}

document.querySelectorAll('button[data-selection]').forEach((button) => {
    button.addEventListener('click', game);
});
