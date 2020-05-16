const square = (num) => num * num;

const squareLong = (num) => {
    return num * num;
};

console.log(square(5));

const people = [
    {
        name: 'Andrew',
        age: 27,
    },
    {
        name: 'Vikram',
        age: 31,
    },
    {
        name: 'Jesis',
        age: 22,
    },
];

const under30 = people.filter((person) => person.age < 30);
console.log(under30);

const exact22 = people.filter((person) => person.age === 22);
console.log(exact22);
if (exact22) exact22.forEach((exact) => console.log(exact.name));
