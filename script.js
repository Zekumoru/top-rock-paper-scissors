
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

/*
    Starts a game of rock, paper, and scissors.
*/
function game() {
    let winCounter = 0;
    let loseCounter = 0;
    
    for (let round = 0; round < NUMBER_OF_ROUNDS; round++) {
        let playerInput = promptPlayerInput(round);
        
        if (playerInput === null) {
            console.log(`You forfeited the game!`);
            break;
        }
        else {
            let roundResult = playRound(playerInput, computerPlay());
            if (/win/i.test(roundResult)) {
                winCounter++;
            }
            else if (/lost/i.test(roundResult)) {
                loseCounter++;
            }
            console.log(`Round ${round + 1}:`, roundResult);
        }
    }

    console.group("Game Result");
    if (winCounter === loseCounter) {
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

/*
    Checks the user's play input if valid then
    returns it.
*/
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
