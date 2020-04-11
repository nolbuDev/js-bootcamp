const notes = [
    {
        title: 'my next trip',
        body: 'I would like to go to Spain.',
    },
    {
        title: 'Habbits to work on',
        body: 'Exercise. Eating a bit better.',
    },
    {
        title: 'Office modification',
        body: 'Get a new seat.',
    },
];

// Tag Name
// document.querySelector('button').addEventListener('click', event => {
//     event.target.textContent = 'This button was clicked';
//     console.log('Did this work?');
//     console.log(event);
// });

// document.querySelectorAll('button')[1].addEventListener('click', () => {
//     console.log('Delete all notes');
// });

const filters = {
    searchText: '',
};

const renderNotes = (notes, filters) => {
    const filteredNotes = notes.filter(note => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach(note => {
        const noteEl = document.createElement('p');
        noteEl.textContent = note.title;
        document.querySelector('#notes').appendChild(noteEl);
    });
};

renderNotes(notes, filters);

// ID, Class
document.querySelector('#create-note').addEventListener('click', event => {
    event.target.textContent = 'This button was clicked';
    console.log('Did this work?');
    console.log(event);
});

document.querySelector('#remove-all').addEventListener('click', () => {
    console.log('Delete all notes');
    document.querySelectorAll('.note').forEach(note => note.remove());
});

// Input Event : Change, Input
document.querySelector('#search-text').addEventListener('input', e => {
    console.log(e.target.value);
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});
