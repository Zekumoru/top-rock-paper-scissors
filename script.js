
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
    if (playerSelection === computerSelection) {
        return `It is a draw! ${capitalizeString(playerSelection)} cannot beat itself!`;
    }
    if (playerSelection.toUpperCase() === ROCK.toUpperCase()) {
        if (computerSelection.toUpperCase() === PAPER.toUpperCase()) {
            return `You lose! Paper beats Rock!`;
        }
        // Since there's only one case remaining to deal with
        // We don't need to write any more conditions for that!
        return `You win! Rock beats Scissors!`;
    }
    if (playerSelection.toUpperCase() === PAPER.toUpperCase()) {
        if (computerSelection.toUpperCase() === SCISSORS.toUpperCase()) {
            return `You lose! Scissors beats Paper!`;
        }
        return `You win! Paper beats Rock!`;
    }
    if (playerSelection.toUpperCase() === SCISSORS.toUpperCase()) {
        if (computerSelection.toUpperCase() === ROCK.toUpperCase()) {
            return `You lose! Rock beats Scissors!`;
        }
        return `You win! Scissors beats Paper!`;
    }
}

function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
}
