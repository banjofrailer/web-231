/*
============================================
; Title: Assignment 2.3
; Author: Sarah Kovar
; Date: 8 December 2019
; Description: This program demonstrates 
; displaying data using function properties.
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 2.3'));

//function to return a function property only
function myName () {
    return myName.sarah;
}

//define property
myName.sarah = 'Sarah Kovar';

//display, passing in myName() function
console.log('\n' + myName());