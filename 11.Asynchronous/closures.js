const myfunction = () => {
    const message = 'This is my message';
    const printMessage = () => {
        console.log(message);
    };
    //printMessage();
    return printMessage;
};

//myfunction();
const myPrintMessage = myfunction();
myPrintMessage();

//*************************************************
// private property
//*************************************************
const createCounter = () => {
    let count = 0;

    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        get() {
            return count;
        },
    };
};

const counter = createCounter();
counter.increment();
counter.decrement();
counter.decrement();
counter.count = 0; // Useless
console.log(counter.get());

//*************************************************
// Adder
//*************************************************
const createAdder = (a) => {
    return (b) => {
        return a + b;
    };
};

const add10 = createAdder(10);
console.log(add10(-2));
console.log(add10(20));
const add100 = createAdder(100);
console.log(add100(-90));

//*************************************************
// Tipper
//*************************************************
const createTipper = (tip = 0.15) => {
    return (amount) => {
        return amount * tip;
    };
};

const createTipperDefault = createTipper();
console.log(createTipperDefault(20));
const createTipper20 = createTipper(0.2);
console.log(createTipper20(20));
