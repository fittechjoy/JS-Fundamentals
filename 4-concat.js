#!/usr/bin/node
/*
$ node 4-concat.js c cool c is cool
$ node 4-concat.js c c is undefined
$ node 4-concat.js undefined is undefined
*/
const arg1 = process.argv[2];
const arg2 = process.argv[3];
console.log('${arg1} is ${arg2}');
 
