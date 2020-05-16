const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    console.log(this.word);
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = ['c', 'o'];
};

Hangman.prototype.getPuzzle = function () {
    let puzzle = '';

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter;
        } else {
            puzzle += '*';
        }
    });
    return puzzle;
};

const h1 = new Hangman('son', 3);
console.log(h1.getPuzzle());
const h2 = new Hangman('Nolbu', 4);
console.log(h2.getPuzzle());
