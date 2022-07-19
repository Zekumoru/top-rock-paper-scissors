
const WINNING_POINTS = 5;
const INPUT_EVALUATION_REGEX = /^(rock|paper|scissors)$/i;

const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors';

const HAND_OPTIONS = [
    ROCK,
    PAPER,
    SCISSORS
];

const buttons = document.querySelectorAll('button[data-selection]');
const infoText = document.querySelector('.info');
const roundText = document.querySelector('.round');
const winText = document.querySelector('.win');
const loseText = document.querySelector('.lose');

const result = {
    round: 0,
    first: 0,
    second: 0,
    draw: 0
};

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
    const roundResult = playRoundWithComputer(event.target.dataset.selection);
    displayRoundResult(roundResult);
    updateTexts();

    const winner = checkWinner();
    if (winner) {
        displayWinner(winner);
        disableSelection();
    }
}

function playRoundWithComputer(playerSelection) {
    const roundResult = playRound(playerSelection, computerPlay());
    result.round++;

    if (roundResult.first) {
        result.first++;
    }
    else if (roundResult.second) {
        result.second++;
    }
    else {
        result.draw++;
    }
    
    return roundResult;
}

function displayRoundResult(roundResult) {
    if (roundResult.first) {
        infoText.textContent = `You won using ${roundResult.firstSelection} against ${roundResult.secondSelection} by the computer!`;
    }
    else if (roundResult.second) {
        infoText.textContent = `You lost using ${roundResult.firstSelection} against ${roundResult.secondSelection} by the computer!`;
    }
    else {
        infoText.textContent = `It is a draw! You and the computer both chose ${roundResult.firstSelection}.`;
    }
}

function updateTexts() {
    roundText.textContent = result.round;
    winText.textContent = result.first;
    loseText.textContent = result.second;
}

function checkWinner() {
    if (result.first >= WINNING_POINTS) {
        return 'Player';
    }
    if (result.second >= WINNING_POINTS) {
        return 'Computer';
    }
    return '';
}

function displayWinner(winner) {
    infoText.textContent = `${winner} has won! Press 'Restart' below to play again!`;
}

function disableSelection() {
    buttons.forEach((button) => {
        button.disabled = true;
    });
}

buttons.forEach((button) => {
    button.addEventListener('click', game);
});
