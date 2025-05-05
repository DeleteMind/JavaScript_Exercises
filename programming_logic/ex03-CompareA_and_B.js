let a = -1;
let b = 2;
let c;

if (a >= 0 && b >= 0) {
  c = a === b ? a + b : a * b;
  console.log(c);
} else {
  console.log("Por favor, digite um número positivo.");
}
