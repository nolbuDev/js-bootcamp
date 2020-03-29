let converterfahrenheitToCelsius = function(fahrenheit) {
    let celsius = ((fahrenheit - 32) * 5) / 9;
    if (celsius <= 0) {
        let isFreezing = true;
    }
    return celsius;
};

let tempOne = converterfahrenheitToCelsius(32);
let tempTwo = converterfahrenheitToCelsius(68);

console.log(tempOne);
console.log(tempTwo);
