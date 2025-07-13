#!/usr/bin/node

/*
Usage examples:

$ node 4-concat.js Python fun
Python is fun

$ node 4-concat.js HBTN
HBTN is undefined

$ node 4-concat.js
undefined is undefined
*/

const arg1 = process.argv[2];
const arg2 = process.argv[3];

console.log(`${arg1} is ${arg2}`);
