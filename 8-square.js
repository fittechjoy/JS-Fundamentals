#!/usr/bin/node

/*
Usage examples:

$ node 8-square.js
Missing size

$ node 8-square.js School
Missing size

$ node 8-square.js 2
XX
XX

$ node 8-square.js 6
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
*/

const arg = process.argv[2];
const size = Number(arg);

if (!arg || isNaN(size)) {
  console.log('Missing size');
} else if (size > 0) {
  for (let i = 0; i < size; i++) {
    console.log('X'.repeat(size));
  }
}
