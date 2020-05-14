'use strict';

// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos');

    try {
        return todosJSON ? JSON.parse(todosJSON) : [];
    } catch (e) {
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
        .filter((todo) => !todo.completed);

    const div = document.querySelector('#todos');
    div.innerHTML = '';
    div.appendChild(generateSummaryDOM(selectedTodos));

    todos.forEach((todo) => {
        const p = generateTodoDOM(todo);
        div.appendChild(p);
    });
};

// Remove todo with id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
    }
};

// Checkbox Checked
const toggleTodo = (id, checkValue) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
        todo.completed = !todo.completed;
    }
};

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button');

    // Setup Checkbox
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', (e) => {
        toggleTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filter);
    });
    todoEl.appendChild(checkbox);

    // Setup the todo text
    todoText.textContent = todo.text;
    todoEl.appendChild(todoText);

    // Setup the remove button
    removeButton.textContent = 'x';
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filter);
    });
    todoEl.appendChild(removeButton);

    return todoEl;
};

// Get the DOM elements for list summary
const generateSummaryDOM = (selectedTodos) => {
    const p = document.createElement('h2');
    p.textContent = `You have ${selectedTodos.length} todos left`;
    return p;
};
