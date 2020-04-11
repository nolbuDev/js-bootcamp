let todos = [];
const filter = {
    searchText: '',
    hideCompleted: false,
};

const todosJSON = localStorage.getItem('todos');
if (todosJSON !== null) {
    todos = JSON.parse(todosJSON);
}

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
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log(todos);
    e.target.elements.text.value = '';
    renderTodos(todos, filter);
});

document.querySelector('#hide-completed').addEventListener('change', e => {
    filter.hideCompleted = e.target.checked;
    renderTodos(todos, filter);
});

renderTodos(todos, filter);
