


// First option


function calculateLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return ("Leap Year");
    } else {
        return ("Not Leap Year");
    }
}

console.log(calculateLeapYear(1900));




// Another way to do it


// function leapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 
//     ? "Leap Year" 
//     : "Not Leap Year";
// }

// console.log(leapYear(2000));