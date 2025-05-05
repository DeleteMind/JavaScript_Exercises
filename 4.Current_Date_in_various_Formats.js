let today = new Date();

let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

let formattedDay = day < 10 ? '0' + day : day.toString();
let formattedMonth = month < 10 ? '0' + month : month.toString();

today = formattedMonth + '-' + formattedDay + '-' + year;
console.log(today);

today = formattedMonth + '/' + formattedDay + '/' + year;
console.log(today);

today = formattedDay + '-' + formattedMonth + '-' + year;
console.log(today);

today = formattedDay + '/' + formattedMonth + '/' + year;
console.log(today);

