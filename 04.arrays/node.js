const nodes = ['Note 1', 'Note 2', 'Note 3'];
console.log(nodes);
console.log(nodes.length);

console.log(nodes[0]);
console.log(nodes[1]);
console.log(nodes[nodes.length - 1]);

// push, pop
nodes.push('My new note');
console.log(nodes);

console.log(nodes.pop());
console.log(nodes);

// shift, unshift
console.log(nodes.shift());
console.log(nodes);

console.log(nodes.unshift('New Shift Node'));
console.log(nodes);

// splice
console.log(nodes.splice(1, 0, 'This is the splice item'));
console.log(nodes.length);
console.log(nodes);

// forEach
nodes.forEach((cur, index) => {
    console.log(`${index} number is ${cur}`);
});

// Counting... 1
for (let count = 0; count < 3; count++) {
    console.log(count);
}

for (let count = 0; count < nodes.length; count++) {
    console.log(nodes[count]);
}

// index of
console.log(nodes.indexOf('Note 2'));

const notes = [
    {
        title: 'My next trip',
        body: 'I would like to go to Spain',
    },
    {
        title: 'Habbits to work on',
        body: 'Exercise. Eating a bit better.',
    },
    {
        title: 'Office modification',
        body: 'Get a new sear',
    },
];

console.log(notes.length);
console.log(notes);
console.log(notes.indexOf({})); // -1 , ===
console.log({} === {}); // false

let someObject = {};
let otherObject = someObject;
console.log(someObject === otherObject); // true

const index = notes.findIndex((item, index) => {
    console.log(item);
    return item.title === 'Habbits to work on';
});
console.log(index);

console.log('Check it', notes);

// find index
const findNote = function(notes, noteTitle) {
    return notes[
        notes.findIndex(note => {
            console.log(typeof note.title);
            console.log(note.title);
            return noteTitle === note.title;
        })
    ];
};

const note = findNote(notes, 'Office modification');
console.log(note);

// find return object
const findNoteObject = function(notes, noteTitle) {
    return notes.find(note => {
        console.log(typeof note.title);
        console.log(note.title);
        return noteTitle === note.title;
    });
};
const noteItem = findNoteObject(notes, 'Office modification');
console.log(noteItem);

// filter
const filteredNotes = function(notes, query) {
    return notes.filter((note, index) => {
        const isTitleMatch = note.title.toLowerCase().includes(query);
        const isBodyMatch = note.body.toLowerCase().includes(query);
        return isTitleMatch || isBodyMatch;
    });
};
console.log('filteredNotes', filteredNotes(notes, 'ne'));

// compare
const sortNotes = function(notes) {
    return notes.sort((a, b) => {
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
        } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
        } else {
            return 0;
        }
    });
};
console.log('Sort Nodes', sortNotes(notes));
