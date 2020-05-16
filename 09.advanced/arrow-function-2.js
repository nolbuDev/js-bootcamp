const add = function (a, b) {
    console.log(arguments);
};
add(11, 22, 33, 44);

const add1 = function () {
    return arguments[0] + arguments[1];
};
console.log(add1(11, 22, 33, 44));

const car = {
    color: 'Red',
    getSummary: function () {
        console.log(this);
        return `The car is ${this.color}`;
    },
};
console.log(car.getSummary());

const car1 = {
    color: 'Red',
    getSummary: () => {
        console.log(this);
        return `The car is ${this.color}`;
    },
};
console.log(car1.getSummary());
