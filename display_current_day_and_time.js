let today = new Date();

let day = today.getDay();

let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "thursday", "Friday", "Saturday"];

// console.log("Today is : " + dayList[day] + ".");


let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();

let prepand = (hour >= 12) ? " PM " : " AM ";

hour = (hour >= 12) ? hour - 12 : hour;

