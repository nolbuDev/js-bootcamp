const todos = getSavedTodos();
const filter = {
    searchText: '',
    hideCompleted: false,
};

document.querySelector('#search-text').addEventListener('input', (e) => {
    filter.searchText = e.target.value;
    renderTodos(todos, filter);
});

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target.elements.text.value);
    todos.push({
        text: e.target.elements.text.value,
        completed: false,
    });
    saveTodos(todos);
    console.log(todos);
    e.target.elements.text.value = '';
    renderTodos(todos, filter);
});

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filter.hideCompleted = e.target.checked;
    renderTodos(todos, filter);
});

renderTodos(todos, filter);
