const myAge = 27;
const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.';

// if (myAge >= 18) {
//     message = 'You can vote!';
// } else {
//     message = 'You cannot vote.';
// }

console.log(message);

const myAge1 = 27;
const showPage = () => {
    console.log('Showing the page');
};
const showErrorPage = () => {
    console.log('Showing the error page');
};

myAge >= 21 ? showPage() : showErrorPage();

const team = ['Tyler', 'Porter'];
team.length <= 4 ? console.log(team.length) : console.log('Too many people on your team');
