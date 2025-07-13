#!/usr/bin/node

/*
Usage examples:

$ node 9-add.js
NaN

$ node 9-add.js 1
NaN

$ node 9-add.js 1 7
8

$ node 9-add.js 13 89
102
*/

function add(a, b) {
  return a + b;
}

const arg1 = Number(process.argv[2]);
const arg2 = Number(process.argv[3]);

console.log(add(arg1, arg2));
