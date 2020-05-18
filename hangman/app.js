const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const h1 = new Hangman('Cat', 3);
puzzleEl.textContent = h1.getPuzzle();
guessesEl.textContent = h1.remainingGuesses;

console.log(h1.getPuzzle());
console.log(h1.remainingGuesses);
console.log(h1.status);

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    h1.makeGuess(guess);
    puzzleEl.textContent = h1.getPuzzle();
    guessesEl.textContent = h1.remainingGuesses;
    console.log(h1.status);

    // console.log(e.charCode);
    // console.log(e);
    // console.log(h1.getPuzzle());
    // console.log(h1.remainingGuesses);
    // h1.getPuzzle();
    // h1.remainingGuesses;
});
