let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326,
};

console.log(myBook);
console.log(myBook.title);
console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';
console.log(`${myBook.title} by ${myBook.author}`);

// Challenge area

let person = {
    name: 'Son',
    age: 23,
    location: 'CA',
    // increaseAge: () => {
    //     this.age += 1;
    // },
    // printlog: () => {
    //     console.log(`${this.name} is ${this.age} and lives in ${this.location}.`);
    //     this.increaseAge();
    // },
};

// person.printlog();
// person.printlog();

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);
person.age += 1;
console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);
