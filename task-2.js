/*
    ====================================================================================================================
    Task:   Create at least 1 test that verifies the output of #1.
    Files:  task-2.js
    Author: Aaron R. Martone
    Date:   April 27, 2015
    ====================================================================================================================
*/

'use strict';

// Require the Chai Assertion module and greet function.
var expect = require('chai').expect,
    greet = require('./task-1');

// Create a test that verifies the output of the 'greet' function.
describe('greet', function() {
    it('should greet someone', function() {
        expect(greet.greet('Aaron, Ambassador to the Pizza Bagel.')).to.eql('hello Aaron, Ambassador to the Pizza Bagel.');
    });
});