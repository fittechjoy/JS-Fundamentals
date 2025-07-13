#!/usr/bin/node

/*
Usage examples:

$ node 7-multi_c.js 2
C is fun
C is fun

$ node 7-multi_c.js
Missing number of occurrences

$ node 7-multi_c.js School
Missing number of occurrences
*/

const arg = process.argv[2];
const x = Number(arg);

if (!arg || isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  let result = '';
  for (let i = 0; i < x; i++) {
    result += 'C is fun\n';
  }
  console.log(result.trim());
}
