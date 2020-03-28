// Lexical Scope (Static Scope) : use environment where function [and variable] is defined
// Dynamic Scope : use environment where function [and variable] is called
// Global Scope - Defined outside of all code blocks
// Local Scope - Deined inside a code block

let varOne = 'varOne';

if (true) {
    console.log(varOne);
    let varTwo = 'varTwo';
}

console.log(varTwo);
