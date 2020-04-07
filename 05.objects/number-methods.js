let num = 103.941;
console.log(num.toFixed(2));

console.log(Math.round(num));

console.log(Math.floor(num));

console.log(Math.ceil(num));

let min = 10;
let max = 20;
let randomNum = Math.random();
console.log(randomNum);
randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

// Challenge area
// 1-5 true if correct - false if not correct
let makeGuess = function(guess) {
    let max = 5,
        min = 1;
    let real = Math.floor(Math.random() * (max - min + 1)) + min;
    if (real === guess) {
        return `You are right, the number is ${real}`;
    } else {
        return `Your are wrong, the number is ${real} and you are ${guess}`;
    }
};

console.log(makeGuess(2));
