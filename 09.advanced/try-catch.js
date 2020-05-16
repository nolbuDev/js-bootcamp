// Error
const getTip1 = (amount) => {
    if (typeof amount === 'number') {
        return amount * 0.25;
    } else {
        throw Error('Argument must be a number');
        //throw 'Argument must be a number';
    }
};

try {
    const result1 = getTip1(true);
    console.log(result1);
} catch (e) {
    console.log('catch block is running');
}

console.log('--------------------------------------------');

// primitive
const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * 0.25;
    } else {
        throw 'Argument must be a number';
    }
};

const result = getTip(true);
console.log(result);
console.log('--------------------------------------------');
