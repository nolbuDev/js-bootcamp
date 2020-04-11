let notes = getSavedNotes();

const filters = {
    searchText: '',
};

renderNotes(notes, filters);

// ID, Class
document.querySelector('#create-note').addEventListener('click', event => {
    notes.push({
        title: '',
        body: '',
    });
    saveNotes(notes);
    renderNotes(notes, filters);
});

// Input Event : Change, Input
document.querySelector('#search-text').addEventListener('input', e => {
    console.log(e.target.value);
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change', e => {
    console.log(e.target.value);
});
