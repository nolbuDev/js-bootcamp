// ----------------------------------------------------------------------------------
// 94. Primitives and Objects: Part 2
// ----------------------------------------------------------------------------------
// Primitive values : string, number, boolean, null, undefined

// String: myString --> String.prototype --> Object.prototype --> null
// Number: Same
// Boolean: Same
const productString = 'Computer';
console.log(productString);
console.log(productString.split(''));

const otherProduct = new String('Phone');
console.log(otherProduct);

// Array: myArray ---> Array.prototype ---> Object ---> null
const team = ['Luke', 'Naddison'];
console.log(team);
console.log(team.hasOwnProperty('length'));

// It's possible
const team1 = new Array(['Luke', 'Naddison']);
console.log(team1);

// Array: myfunction ---> Function.prototype ---> Object ---> null
const getScore = () => 1;
console.log(getScore);
console.log(getScore());

// ----------------------------------------------------------------------------------
// 94. Primitives and Objects: Part 1
// ----------------------------------------------------------------------------------
// product ===> Object.prototype  ===> null
const product = {
    name: 'Influence',
};

// we don't recommend to override standard function.
//Object.prototype.hasOwnProperty = () => `This is the new function`;
Object.prototype.someNewMethod = () => `This is the new function`;

// hasOwnProperty
console.log(product.hasOwnProperty('hasOwnProperty'));
console.log(product.someNewMethod());
console.log(product);

// New
const product1 = new Object();
product1.name = 'Son';
console.log(product1.hasOwnProperty('hasOwnProperty'));
console.log(product1.someNewMethod());
console.log(product1);

// Function Object
const Product2 = function (name) {
    this.name = name;
};
const test = new Product2('test');
console.log(test);
