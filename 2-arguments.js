#!/usr/bin/node
/*
$ node 2-arguments.js No argument
$ node 2-arguments.js Best Argument found
$node 2-arguments.js Best School Arguments found
*/
const numArgs = process.argv.length - 2;
if (numArgs === 0)
{ console.log("No argument"); }
else if (numArgs === 1)
{ console.log("Argument found"); }
else { console.log("Arguments found"); }

