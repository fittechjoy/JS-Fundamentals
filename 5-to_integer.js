#!/usr/bin/node

/*
Usage examples:

$ node 5-to_integer.js
Not a number

$ node 5-to_integer.js 89
My number: 89

$ node 5-to_integer.js "89"
My number: 89

$ node 5-to_integer.js 89.89
My number: 89

$ node 5-to_integer.js School
Not a number
*/

const arg = process.argv[2];

if (arg === undefined || isNaN(Number(arg))) {
  console.log('Not a number');
} else {
  console.log('My number: ' + Math.floor(Number(arg)));
}
