const h1 = document.querySelector('h1');

let todos = getSavedTodos();
const filter = {
    searchText: '',
    hideCompleted: false,
};

document.querySelector('#search-text').addEventListener('input', e => {
    filter.searchText = e.target.value;
    renderTodos(todos, filter);
});

document.querySelector('#new-todo').addEventListener('submit', e => {
    e.preventDefault();
    todos.push({
        text: e.target.elements.text.value,
        completed: false,
    });
    savedTodos(todos);
    e.target.elements.text.value = '';
    renderTodos(todos, filter);
});

document.querySelector('#hide-completed').addEventListener('change', e => {
    filter.hideCompleted = e.target.checked;
    renderTodos(todos, filter);
});

renderTodos(todos, filter);
