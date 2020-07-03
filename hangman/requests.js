// const getPuzzle = (wordCount, callback) => {
//     // callback('Some facke puzzle');

//     const request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             console.log(e.target);
//             const data = JSON.parse(e.target.responseText);
//             console.log(data);
//             callback(undefined, data.puzzle);
//         } else if (e.target.readyState === 4) {
//             callback('An error has taken place', undefined);
//         }
//     });
//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//     request.send();
// };

// Callback function => Promise
const getPuzzle = (wordCount) =>
    new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', (e) => {
            if (e.target.readyState === 4 && e.target.status === 200) {
                console.log(e.target);
                const data = JSON.parse(e.target.responseText);
                console.log(data);
                resolve(data.puzzle);
            } else if (e.target.readyState === 4) {
                reject('An error has taken place');
            }
        });
        request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
        request.send();
    });

//*****************************************************
//  Synchronous is deprecated
//***************************************************** */
// const getPuzzleSync = () => {
//     const request = new XMLHttpRequest();
//     // This is configuration : false
//     request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3', false);
//     request.send();
//     if (request.readyState === 4 && request.status === 200) {
//         console.log(request);
//         const data = JSON.parse(request.responseText);
//         console.log(data);
//         return(data.puzzle);
//     } else if (request.readyState === 4) {
//         throw new Error('Things did not go well');
//     }
// };

// const getCountry = (countryCode, callback) => {
//     const countryRequest = new XMLHttpRequest();
//     countryRequest.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             console.log(e.target);
//             const data = JSON.parse(e.target.responseText);
//             const country = data.find((country) => country.alpha2Code === countryCode);
//             callback(undefined, country);
//         } else if (e.target.readyState === 4) {
//             callback('Unable to fetch data', undefined);
//         }
//     });
//     countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all');
//     countryRequest.send();
// };

const getCountry = (countryCode) =>
    new Promise((resolve, reject) => {
        const countryRequest = new XMLHttpRequest();
        countryRequest.addEventListener('readystatechange', (e) => {
            if (e.target.readyState === 4 && e.target.status === 200) {
                console.log(e.target);
                const data = JSON.parse(e.target.responseText);
                const country = data.find((country) => country.alpha2Code === countryCode);
                resolve(country);
            } else if (e.target.readyState === 4) {
                reject('Unable to fetch data');
            }
        });
        countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all');
        countryRequest.send();
    });
