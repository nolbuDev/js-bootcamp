let add = function(a, b, c) {
    return a + b + c;
};

let result = add(10, 1, 5);
console.log(result);

// Default arguments
let getScoreText = function(name = 'Anonymous', getScore = 0) {
    console.log(name, getScore);
};

getScoreText();
getScoreText('Andrew', 100);
getScoreText(undefined, 100);

let calcTip = function(total, tip = 0.2) {
    return total * tip;
};

console.log(calcTip(30));
