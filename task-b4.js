/*
    ====================================================================================================================
    Task:   BONUS - Create a command-line utility that will be run using 'node greet.js "some name"' and will pass the 
            input contained in that argument to the 'greet' function and output the result to the screen.
    Files:  task-b4.js
    Author: Aaron R. Martone
    Date:   April 27, 2015
    ====================================================================================================================
*/

'use strict';

/*
    The Node 'process' global provides a property called 'argv' which is an array of the command line parameters. At 
    index 0 is 'node', and index 1 is the name of the file being executed, so the 'some name' argument should exist at
    index 2.
*/

// Require the greet function
var greet = require('./task-1');

// Output the passing of the command-line argument into the 'greet' function to the console.
console.log(greet.greet(process.argv[2]));