

// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
// Using Heron's formula
// The formula is given by: A = √(s(s-a)(s-b)(s-c)) where s = (a+b+c)/2
// a, b, c are the sides of the triangle
// s is the semi-perimeter of the triangle





let side1 = 5;
let side2 =6;
let side3 =7;

let s = (side1 + side2+ side3)/2;

let area = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));

console.log(area);





// Another way to solve the problem Function
//To run the code below, you n need to comment out the code above:


// function triangleArea(a, b, c) {
//     let s = (a + b + c) / 2;
//     let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
// }

// console.log(triangleArea(5, 6, 7));