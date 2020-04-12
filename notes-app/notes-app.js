const notes = getSavedNotes();

const filters = {
    searchText: '',
};

// ID, Class
document.querySelector('#create-note').addEventListener('click', (event) => {
    const id = uuidv4();
    notes.push({
        id: id,
        title: '',
        body: '',
    });
    savedNotes(notes);
    location.assign(`/edit.html#${id}`)
});

// Input Event : Change, Input
document.querySelector('#search-text').addEventListener('input', (e) => {
    console.log(e.target.value);
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change', (e) => {
    console.log(e.target.value);
});

renderNotes(notes, filters);
