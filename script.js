
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

function computerPlay() {
    return HAND_OPTIONS[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);

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

function evalWinLoseResult(playerSelection, computerSelection, computerWinSelection, computerLoseSelection) {
    if (computerSelection === computerWinSelection) {
        return `You lose! ${computerWinSelection} beats ${playerSelection}!`;
    }
    // Since there's only one case remaining to deal with
    // We don't need to write any more conditions for that!
    return `You win! ${playerSelection} beats ${computerLoseSelection}!`;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}

function game() {
    let winCounter = 0;
    let loseCounter = 0;
    let playerInput = null;

    

    console.group("Game Result");
    if (playerInput === null) {
        console.log(`Uh oh! You lost! You forfeited the game!`);
    }
    else if (winCounter === loseCounter) {
        console.log("It is a tie!");
    }
    else if (winCounter > loseCounter) {
        console.log(`Congratulations! You won against the computer by ${winCounter - loseCounter} point(s)!`);
    }
    else {
        console.log(`Uh oh! You lost against the computer by ${loseCounter - winCounter} point(s)!`);
    }
    console.groupEnd("Game Result");
}

function promptPlayerInput(round) {
    let input = prompt("ROUND " + (round + 1)
        + "\nChoose between 'Rock', 'Paper', and 'Scissors' by typing it below:"
        + "\n(Pressing Esc stops the game.)");

    while (!(input === null || INPUT_EVALUATION_REGEX.test(input))) {
        input = prompt("ROUND " + (round + 1)
        + "\nChoose between 'Rock', 'Paper', and 'Scissors' by typing it below:"
        + "\n(Pressing Esc or Cancel below will end the game.)"
        + "\n"
        + "\nInvalid input: " + input);
    }

    return input;
}

game();
