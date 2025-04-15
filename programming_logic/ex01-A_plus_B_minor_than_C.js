

function sumAndComp(a, b, c) {
    let sum = a + b;

    if (sum < c) {
        return `The sum of ${a} and ${b} is less than ${c}. `
    } else if (sum > c) {
        return `The sum of ${a} and ${b} is greater than ${c}. `
    } else {
        return `The sum of ${a} and ${b} is equal to ${c}. `
    }
}

console.log(sumAndComp(1, 2, 3))