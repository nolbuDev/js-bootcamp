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
            return !todo.completed;
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

document.querySelector('#search-text').addEventListener('input', e => {
    filter.searchText = e.target.value;
    renderTodos(todos, filter);
});

document.querySelector('#new-todo').addEventListener('submit', e => {
    e.preventDefault();
    console.log(e.target.elements.text.value);
    todos.push({
        text: e.target.elements.text.value,
        completed: false,
    });
    console.log(todos);
    e.target.elements.text.value = '';
    renderTodos(todos, filter);
});

renderTodos(todos, filter);
