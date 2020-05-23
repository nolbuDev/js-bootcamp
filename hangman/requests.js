const getPuzzle = (callback) => {
    // callback('Some facke puzzle');

    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            console.log(e.target);
            const data = JSON.parse(e.target.responseText);
            console.log(data);
            callback(undefined, data.puzzle);
        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined);
        }
    });
    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3');
    request.send();
};
