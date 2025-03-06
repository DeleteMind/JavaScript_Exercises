// Get teh current date and time
let today = new Date();
// Get the current date	
let day = today.getDay();
// Array of days
let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Display the day
console.log("Today is :  " + daylist[day] + ".");

// Get the current hour, minute and second
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();

// Determine if it's PM or AM
let prepand = (hour >= 12) ? "PM" : "AM";

// Convert the hour to 12-hour format
hour = (hour >= 12 ? hour - 12 : hour);

// If hour is 0, set it to 12
if (hour === 0 && prepand === "Pm" ) {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = "Noon"
    } else {
        hour = 12;
        prepand = "PM";
    }
}

// If hour is 0, set it to 12
if (hour === 0 && prepand === "AM") {
    if (minute === 0 && second === 0 ) {
        hour = 12;
        prepand = "Midnight";
    } else {
        hour = 12;
        prepand = "AM"; 
    }
}

// Display the current time
console.log("Current time is : " + hour + " " + prepand + " : " + minute + " : " + second);