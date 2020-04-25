// Unix Epoch - January 1st 1970 00:00:00
//
let now = new Date('January 21 2001 6:25:01');
console.log(now.toString());

console.log(`Year: ${now.getFullYear()}`);
console.log(`Month: ${now.getMonth()}`);
console.log(`Day of month : ${now.getDate()}`);
console.log(`Hour : ${now.getHours()}`);
console.log(`Minute : ${now.getMinutes()}`);
console.log(`Second : ${now.getSeconds()}`);

now = new Date();
console.log(now.getTime());
const timestamp = now.getTime();
const myDate = new Date(timestamp);
console.log(myDate.getFullYear());

const date1 = new Date('March 4 2020 16:04:03');
const date2 = new Date('July 4 2020 08:03:02');

console.log(date1 > date2);
console.log(date1.getTime());
console.log(date2.getTime());
