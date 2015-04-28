/*
    ====================================================================================================================
    Task:   Create an exported object using the module pattern that contains a function 'greet' which takes a param and
            returns the string: 'hello ' + <name>.
    Files:  task-1.js
    Author: Aaron R. Martone
    Date:   April 27, 2015
    ====================================================================================================================
*/

'use strict';

// Create the object which is returned via 'require()'.
var result = {
    greet: function(name) {
        return 'hello ' + name;
    }
};

// Export the object.
module.exports = result;