function add(a, b) {
  return a + b;
}
console.log(add(1, 2));

function subtract(a, b) {
  return a - b;
}
console.log(subtract(1, 2));

function multiply(a, b) {
  return a * b;
}
console.log(multiply(1, 2));

function divide(a, b) {
  return a / b;
}
console.log(divide(1, 2));

function increment(n) {
  return (n += 1);
}
console.log(increment(5));

function decrement(n) {
  return (n -= 1);
}
console.log(decrement(5));

function makeInt(n) {
  return parseInt(n, 10);
}
console.log(makeInt("0x2328"));

function preserveDecimal(n) {
  return parseFloat(n);
}
console.log(preserveDecimal("2.222"));
