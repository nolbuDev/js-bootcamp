// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos');
    if (todosJSON !== null) {
        return JSON.parse(todosJSON);
    } else {
        return [];
    }
}

// Saved todos to localStorage
const savedTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Render application todos based on filters
const renderTodos = (todos, filter) => {
    const div = document.querySelector('#todos');
    div.innerHTML = '';
    todos
        .filter(todo => {
            const hide = !filter.hideCompleted || todo.completed;
            const search = todo.text.toLowerCase().includes(filter.searchText.toLowerCase());
            return hide && search;
        })
        .forEach(todo => {
            div.appendChild(generateTodoDOM(todo));
        });
    div.appendChild(generateSummaryDOM(todos));
};

// Get the DOM elements for an individal note
const generateTodoDOM = (todo) => {
    const p = document.createElement('p');
    p.textContent = todo.text;
    return p;
}

// Get the DOM elements for list summary
const generateSummaryDOM = (todos) => {
    const p = document.createElement('p');
    p.textContent = `You have ${todos.length} todos`;
    return p;
}