/*
============================================
; Title:  Discussion 3.1
; Author: Emily Richter
; Date:   11 December 2019
; Modified By:  Sarah Kovar
; Description: Create a program using a
; control statement with at least 2 errors.
;===========================================
*/

// Required import statement for header
const header = require('../RichterEmily');
// Output header
console.log(header.display("Emily", "Richter", "Discussion 3.1"));

/* This program is meant to test the value for x to see whether it is an even or odd number. */

// Variable declaration
var x = 24;

// Conditional statement
if (x % 2 == 0)    /*var x % 2 == 0 should be encapsulated by parenthesis not brackets; in addition
var is is used to declare variables, which was already done.  The use of var is not needed.*/
  console.log("This number is even.");
else
  console.log("This number is odd.");

// End program