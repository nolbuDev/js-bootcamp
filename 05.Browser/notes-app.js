// DOM - Document Object Model

// Query first element and remove
// const p = document.querySelector('p');
// p.remove();

// Query all element and remove
const ps = document.querySelectorAll('p');
//console.log(ps);
ps.forEach((p) => {
    // console.log(p.textContent)
    // p.remove();
    p.textContent = '**************'
})

// Add a new element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from JavaScript'
document.querySelector('body').appendChild(newParagraph);
