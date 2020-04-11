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
    hideCompleted: false,
};

// localStorage always support string.
// localStorage.setItem('location', 'Philadelphia');
// console.log(localStorage.getItem('location'));
// localStorage.removeItem('location');
// console.log(localStorage.getItem('location'));
// localStorage.clear();

// const user = {
//     name: 'Jason',
//     age: 27,
// };

// const userJSON = JSON.stringify(user);
// console.log(userJSON);
// localStorage.setItem('user', userJSON);

const userJSON = localStorage.getItem('user');
const user = JSON.parse(userJSON);
console.log(user);
console.log(`${user.name} is ${user.age}`);

const h1 = document.querySelector('h1');
const div = document.querySelector('#todos');

const renderTodos = (todos, filter) => {
    div.innerHTML = '';
    todos
        .filter(todo => {
            const hide = !filter.hideCompleted || todo.completed;
            const search = todo.text.toLowerCase().includes(filter.searchText.toLowerCase());
            return hide && search;
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

document.querySelector('#hide-completed').addEventListener('change', e => {
    filter.hideCompleted = e.target.checked;
    renderTodos(todos, filter);
});

renderTodos(todos, filter);
