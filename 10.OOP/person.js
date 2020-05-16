// Prototypal Inheritance
const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
};

Person.prototype.location = 'Thailand';

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}`;

    // Normal function doesn't know this.
    // Arrow function just use this variable from upper function
    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}`;
    });
    return bio;
};

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
};

const me = new Person('Nolbu', 'Son', 27, ['Teaching', 'Biking']);
me.test = 'son';
console.log(me.getBio());
console.log(me.location);
console.log(me.test);

const person2 = new Person('Clancey', 'Turner', 51);
console.log(person2.getBio());
console.log(person2.location);
console.log(person2.test);

const son = function () {
    console.log('Test');
};

son();

// ----------------------------------------------------------------------
// Constructor Function
// ----------------------------------------------------------------------
// const Person = function (firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     // Not recommended
//     //return {};
// };

// const me = new Person('Nolbu', 'Son', 27);

// console.log(me);
// console.log(me.firstName, me.lastName, me.age);

// const person2 = new Person('Clancey', 'Turner', 51);
// console.log(person2);

// ----------------------------------------------------------------------
// Arrow Constructor Function Test : Error , it is not allowed
// ----------------------------------------------------------------------
// const ArrowTest = (firstName) => {
//     this.firstName = firstName;
//     console.log(this.firstName);
// };

// const test1 = new ArrowTest('Nolbu');
// console.log(test1);
