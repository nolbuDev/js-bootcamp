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

// Input Event : Change, Input
document.querySelector('#search-text').addEventListener('input', e => {
    console.log(e.target.value);
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector('#name-form').addEventListener('submit', e => {
    e.preventDefault();
    console.log(e.target.elements.firstName.value);
    e.target.elements.firstName.value = '';
});
