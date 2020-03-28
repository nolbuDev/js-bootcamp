// Create an array with 5 todos
const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise'];
todos.forEach((todo, index) => {
    console.log(`my ${index} job is ${todo}`);
});

// Delete the 3rd item
todos.splice(2, 1);
// Add a new item onto the end
todos.push('Buy coffee');
// Remove the first item from the list
todos.shift();
console.log(todos);

// Challenge 2
// 1. Conver array to arry of objects -> text, completed
// 2. Create function to remove a todo by text value
const todos1 = [
    {
        text: 'Order cat food',
        completed: true,
    },
    {
        text: 'Clean kitchen',
        completed: false,
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

// findIndex
const deleteTodo = function(todos, todoText) {
    const index = todos.findIndex(todo => {
        return todo.text.toLowerCase() === todoText.toLowerCase();
    });
    if (index > -1) {
        todos.splice(index, 1);
    }
};

deleteTodo(todos1, 'buy food');
console.log(todos1);

// filter
let getThingTodDo = todos => {
    return todos.filter(item => {
        return item.completed;
    });
};
console.log('GetThinsDone', getThingTodDo(todos1));

// Sort
let sortTodos = todos1 => {
    return todos1.sort((a, b) => {
        if ((a.completed && b.completed) || (!a.completed && !b.completed)) {
            return 0;
            // if (a.title > b.title) {
            //     return 1;
            // } else if (a.title < b.title) {
            //     return -1;
            // } else {
            //     return 0;
            // }
        } else if (a.completed) {
            return 1;
        } else {
            return -1;
        }
    });
};
console.log('Sort todos', sortTodos(todos1));
