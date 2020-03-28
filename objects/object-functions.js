let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326,
};

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zim',
    pageCount: 723,
};

let getSummary = function(book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`,
    };
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);

// Challenge area

let convertTemp = function(fahrenheit) {
    //let celsius = ((fahrenheit - 32) * 5) / 9;
    //let kelvin = ((fahrenheit + 459.67) * 5) / 9;

    return {
        fahrenheit: fahrenheit,
        celsius: ((fahrenheit - 32) * 5) / 9,
        kelvin: ((fahrenheit + 459.67) * 5) / 9,
        summary: function() {
            return `${this.fahrenheit} is converted into ${this.celsius} and ${this.kelvin}`;
        },
    };
};

let temp = convertTemp(32);
console.log(temp.summary());
