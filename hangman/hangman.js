// const root = document.querySelector('body');

// const displayPuzzle = (text) => {
//     const dom = document.createElement('h1');
//     dom.textContent = text;
//     root.appendChild(dom);
// };

const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    console.log(this.word);
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = 'playing';
};

Hangman.prototype.calculateStatus = function () {
    // let finished = true;

    // this.word.forEach((letter) => {
    //     if (this.guessedLetters.includes(letter)) {
    //     } else {
    //         finished = false;
    //     }
    // });

    // const lettersUnguessed = this.word.filter((letter) => {
    //     return !this.guessedLetters.includes(letter)
    // })
    // const finished = lettersUnguessed.length === 0

    const finished = this.word.every((letter) => this.guessedLetters.includes(letter));

    if (this.remainingGuesses === 0) {
        this.status = 'failed';
    } else if (finished) {
        this.status = 'finished';
    } else {
        this.status = 'playing';
    }
};

Hangman.prototype.getPuzzle = function () {
    let puzzle = '';
    console.log('getPuzzle', this.guessedLetters);
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter;
        } else {
            puzzle += '*';
        }
    });
    return puzzle;
};

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if (isUnique) {
        this.guessedLetters.push(guess);
    }

    if (isUnique && isBadGuess) {
        this.remainingGuesses--;
    }

    this.calculateStatus();
};
