// Function - input(argument), code, output

let greetUser = function() {
    console.log(`Welcome user!`);
};

greetUser();
greetUser();
greetUser();

let square = function(num) {
    console.log(num);
};

let num = 3;
square(3);

let converterfahrenheitToCelsius = function(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
};

let converterfahrenheitToKelvin = function(fahrenheit) {
    return ((fahrenheit + 459.67) * 5) / 9;
};

console.log("Celsius", converterfahrenheitToCelsius(32));
console.log("Kelvin", converterfahrenheitToKelvin(32));
