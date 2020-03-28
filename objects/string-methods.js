let name = 'Jason Son';

// Length property
console.log(name.length);

// Convert to uppder case
console.log(name.toUpperCase());
console.log(name);

// Convert to lower case
console.log(name.toLowerCase());

// Includes
let password = 'abc123password678';
console.log(password.includes('password'));

// Trim
let trimSample = ' this is trim ';
console.log(trimSample.trim());

// Challenge
let isValidPassword = function(password) {
    if (password.includes('password')) {
        return `Your password [${password}] is include password`;
    } else if (password.length < 8) {
        return `Your password [${password}] is less than 8`;
    } else {
        return `Your password [${password}] is Good`;
    }
};

console.log(isValidPassword('asdfd'));
