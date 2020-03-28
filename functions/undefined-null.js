let name = "Jen";
console.log(name);

let name1;
console.log(name1); // undefined
if (name1 === undefined) {
    console.log("Please provide a name");
} else {
    console.log(name1);
}

let name2;
console.log(name2); // undefined
if (name2) {
    // True
    console.log("Please provide a name");
} else {
    console.log("Second", name2);
}

let square = function(num) {
    console.log("Function", num);
};
square();
let result = square(); // Undefined as function return default value
console.log(result);

// Null as assigned value
let age = 27;
age = null;
console.log("age", age);
