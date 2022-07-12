
const HAND_OPTIONS = [
    'Rock',
    'Paper',
    'Scissors'
];

/*
    Returns a random choice between 'Rock',
    'Paper', and 'Scissors'.
*/
function computerPlay() {
    return HAND_OPTIONS[Math.floor(Math.random() * 3)];
}