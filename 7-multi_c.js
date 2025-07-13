#!/usr/bin/node

const arg = process.argv[2];
const x = Number(arg);

if (!arg || isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  let result = '';
  for (let i = 0; i < x; i++) {
    result += 'C is fun\n';
  }
  console.log(result.trimEnd());
}
