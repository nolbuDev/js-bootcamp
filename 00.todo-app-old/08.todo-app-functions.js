// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos');
    if (todosJSON !== null) {
        return JSON.parse(todosJSON);
    } else {
        return [];
    }
};

// Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

// Render application todos based on filters
const renderTodos = (todos, filter) => {
    const selectedTodos = todos
        .filter((todo) => {
            const hide = !filter.hideCompleted || todo.completed;
            const search = todo.text.toLowerCase().includes(filter.searchText.toLowerCase());
            return hide && search;
        })
        .filter((todo) => {
            return !todo.completed;
        });

    const div = document.querySelector('#todos');
    div.innerHTML = '';
    div.appendChild(generateSummaryDOM(selectedTodos));

    selectedTodos.forEach((todo) => {
        const p = generateTodoDOM(todo);
        div.appendChild(p);
    });
};

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button');

    // Setup Checkbox
    checkbox.setAttribute('type', 'checkbox');
    todoEl.appendChild(checkbox);

    // Setup the todo text
    todoText.textContent = todo.text;
    todoEl.appendChild(todoText);

    // Setup the remove button
    removeButton.textContent = 'x';
    todoEl.appendChild(removeButton);

    return todoEl;
};

// Get the DOM elements for list summary
const generateSummaryDOM = (selectedTodos) => {
    const p = document.createElement('h2');
    p.textContent = `You have ${selectedTodos.length} todos left`;
    return p;
};
