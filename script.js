
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

function playRound(firstSelection, secondSelection) {
    firstSelection = capitalize(firstSelection);
    secondSelection = capitalize(secondSelection);

    const result = {
        firstSelection: firstSelection,
        secondSelection: secondSelection,
        first: 0,
        second: 0,
        draw: 0
    };

    if (firstSelection === secondSelection) {
        result.draw++;
    }
    else if (firstSelection === ROCK) {
        evalWinLoseResult(result, firstSelection, secondSelection, PAPER, SCISSORS);
    }
    else if (firstSelection === PAPER) {
        evalWinLoseResult(result, firstSelection, secondSelection, SCISSORS, ROCK);
    }
    else {
        evalWinLoseResult(result, firstSelection, secondSelection, ROCK, PAPER);
    }

    return result;
}

function evalWinLoseResult(result, firstSelection, secondSelection, winSelection, loseSelection) {
    if (secondSelection === winSelection) {
        result.second++;
        return;
    }
    // Since there's only one case remaining to deal with
    // We don't need to write any more conditions for that!
    result.first++;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}

function game(event) {
    let winCounter = 0;
    let loseCounter = 0;
    let playerInput = event.target.dataset.selection;
    
    roundResult = playRound(playerInput, computerPlay());
    if (roundResult.first) {
        result.textContent = `You won using ${roundResult.firstSelection} against ${roundResult.secondSelection} by the computer!`;
    }
    else if (roundResult.second) {
        result.textContent = `You lost using ${roundResult.firstSelection} against ${roundResult.secondSelection} by the computer!`;
    }
    else {
        result.textContent = `It is a draw! You and the computer both chose ${playerInput}.`;
    }
}

document.querySelectorAll('button[data-selection]').forEach((button) => {
    button.addEventListener('click', game);
});
