function CalculateLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return ("Leap Year");
    } else {
        return ("Not Leap Year");
    }
}

console.log(CalculateLeapYear(2048));