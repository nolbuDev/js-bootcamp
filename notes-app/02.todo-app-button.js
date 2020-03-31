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
const filter = {
    searchText: '',
};

const h1 = document.querySelector('h1');
const div = document.querySelector('#todos');

const renderTodos = (todos, filter) => {
    div.innerHTML = '';
    todos
        .filter(todo => {
            return todo.completed;
        })
        .filter(todo => {
            return todo.text.toLowerCase().includes(filter.searchText.toLowerCase());
        })
        .forEach(todo => {
            const p = document.createElement('p');
            p.textContent = todo.text;
            div.appendChild(p);
        });
};

document.querySelector('#add-todo').addEventListener('click', event => {
    console.log('Add a new todo...');
});

// Listen for todo text change
document.querySelector('#new-todo-text').addEventListener('input', e => {
    console.log(e.target.value);
});

document.querySelector('#search-text').addEventListener('input', e => {
    filter.searchText = e.target.value;
    renderTodos(todos, filter);
});
