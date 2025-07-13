#!/usr/bin/node
/*
Usage examples:
$ node 3-value-argument.js No argument
$ node 3-value_argument.js School School
*/
const arg = process.argv[2];
if (arg === undefined)
{ console.log("No argument"); }
else { console.log(arg); }

