
const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors';

const HAND_OPTIONS = [
    ROCK,
    PAPER,
    SCISSORS
];

/*
    Returns a random choice between 'Rock',
    'Paper', and 'Scissors'.
*/
function computerPlay() {
    return HAND_OPTIONS[Math.floor(Math.random() * 3)];
}

/*
    Returns the result of a single round
    of this game.
*/
function playRound(playerSelection, computerSelection) {
    playerSelection = capitalizeString(playerSelection);
    computerSelection = capitalizeString(computerSelection);

    if (playerSelection === computerSelection) {
        return `It is a draw! ${playerSelection} cannot beat itself!`;
    }
    if (playerSelection === ROCK) {
        return evalWinLoseResult(playerSelection, computerSelection, PAPER, SCISSORS);
    }
    if (playerSelection === PAPER) {
        return evalWinLoseResult(playerSelection, computerSelection, SCISSORS, ROCK);
    }
    if (playerSelection === SCISSORS) {
        return evalWinLoseResult(playerSelection, computerSelection, ROCK, PAPER);
    }
}

/*
    A helper function of the playRound function which returns
    the result of a non-draw round.
*/
function evalWinLoseResult(playerSelection, computerSelection, computerWinSelection, computerLoseSelection) {
    if (computerSelection === computerWinSelection) {
        return `You lose! ${computerWinSelection} beats ${playerSelection}!`;
    }
    // Since there's only one case remaining to deal with
    // We don't need to write any more conditions for that!
    return `You win! ${playerSelection} beats ${computerLoseSelection}!`;
}

/*
    Returns a string where the first character is upper cased
    and the rest are lower cased.
*/
function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}
