#!/usr/bin/node

const arg = process.argv[2];
const num = parseInt(arg);

function factorial(n) {
  if (isNaN(n) || n < 2) {
    return 1;
  }
  return n * factorial(n - 1);
}

if (arg === '-h' || arg === '--help') {
  console.log('Usage: node 10-factorial.js <integer>');
  console.log('Computes the factorial of <integer> recursively.');
  console.log('If no integer or NaN is provided, factorial is 1.');
} else {
  console.log(factorial(num));
}
