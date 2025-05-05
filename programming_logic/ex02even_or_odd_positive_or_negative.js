let num = 0;

function compNum() {
  let value = num % 2;

  if (value === 0 && num === 0) {
    return `The Number ${num} is neutral`;
  } else if (value === 0 && num > 0) {
    return `The Number ${num} is positive and even`;
    // even and positive
  } else if (value === 0 && num < 0) {
    // even and negative
    return `The Number ${num} is negative and even`;
  } else if (value != 0 && num > 0) {
    // odd and positive
    return `The Number ${num} is positive and odd`;
  } else {
    //odd and negative
    return `The Number ${num} is negative and odd`;
  }
}

console.log(compNum());
