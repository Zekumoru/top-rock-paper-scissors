
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