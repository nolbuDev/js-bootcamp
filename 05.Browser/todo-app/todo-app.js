// remove dom
const ps = document.querySelectorAll('p');
ps.forEach((p) => {
    if(p.textContent.toLowerCase().includes('the')){
        p.remove()
    }
})

const todos = [
    {
        text: 'Order cat food',
        completed: false,
    },
    {
        text: 'Clean kitchen',
        completed: true,
    },
    {
        text: 'Buy food',
        completed: true,
    },
    {
        text: 'Do work',
        completed: false,
    },
    {
        text: 'Exercise',
        completed: true,
    },
];

const h1 = document.querySelector('h1')
// todos.forEach(todo => {
//     if(todo.completed){
//         let p = document.createElement('p');
//         p.textContent = todo.text;
//         h1.appendChild(p);
//     }
// })
const incompleteTodos = todos.filter(todo => {
    return !todo.completed
}).forEach(incompleteTodo => {
    let p = document.createElement('p');
    p.textContent = `You have ${incompleteTodo.text} todos left`;
    h1.appendChild(p);
})
