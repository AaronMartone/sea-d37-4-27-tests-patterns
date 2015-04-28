/*
    ====================================================================================================================
    Task:   BONUS - Write a test that makes sure that the arguments are being processed.
    Files:  task-b5.js
    Author: Aaron R. Martone
    Date:   April 27, 2015
    ====================================================================================================================
*/

/*
    I could not fathom how to complete this bonus assignment. To my understanding, we are wanted to ensure that the
    arguments which are initially passed to the 'node <filename> <argument>' exists. Though with that implementation,
    I could simply add code to <filename> which would ensure that the length of the process.argv array is greater than
    2, but the problem still remains that I cannot perform a test of this. I attempted to referece the Mocha docs but
    could not even locate the basic syntax for the command itself. It seems to want 'mocha <test_filename>', and if I
    created a <test_filename> that contained the necessary describe() and assertion-based functions, it seemed when
    that command was run, the process.argv property was populated with the 'mocha' call. I could not find a way in
    which Node could call a file and then possibly perform a require() on mocha from within that JS file. After 
    researching this particular problem form well over 3 hours, I've come to the conclusion that I currently don't have
    the familiarity with Mocha/Chai/Node this early in the training to devise a solution. As I gain knowledge about
    this tech, I will make an attempt to apply that knowledge to this issue at a later time, despite it being too late
    to gain bonus credit. There is a good possibility that I over-complicated what was being asked of me with this
    assignment, but with my plan of action, I simply cannot find documentation which conveys that it is feasible, let
    alone syntactically correct in its approach.
*/