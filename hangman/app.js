// HTTP ( Hypertext Transfer Protocol )
// Request - What do we want to do
// Response -
const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const h1 = new Hangman('Cat', 3);
puzzleEl.textContent = h1.getPuzzle();
guessesEl.textContent = h1.getStatusMessage();

console.log(h1.puzzle);
console.log(h1.remainingGuesses);
console.log(h1.status);

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    h1.makeGuess(guess);
    puzzleEl.textContent = h1.getPuzzle();
    guessesEl.textContent = h1.getStatusMessage();

    // console.log(e.charCode);
    // console.log(e);
    // console.log(h1.getPuzzle());
    // console.log(h1.remainingGuesses);
    // h1.getPuzzle();
    // h1.remainingGuesses;
});

// const puzzle = getPuzzle();
// console.log(puzzle);

getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`);
    } else {
        console.log(puzzle);
    }
});

// // Making an HTTP request
// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         console.log(e.target);
//         const data = JSON.parse(e.target.responseText);
//         console.log(data);
//     } else if (e.target.readyState === 4) {
//         console.log('And error has taken place');
//     }
// });

// request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3');
// request.send();

// const countryCode = 'US';
// const countryRequest = new XMLHttpRequest();
// countryRequest.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         console.log(e.target);
//         const data = JSON.parse(e.target.responseText);
//         const country = data.find((country) => country.alpha2Code === countryCode);
//         console.log('us', country.name);
//     } else if (e.target.readyState === 4) {
//         console.log('Unable to fetch data');
//     }
// });
// countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all');
// countryRequest.send();
