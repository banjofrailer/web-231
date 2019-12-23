/*
============================================
; Title:  kovar-exercise-4.3
; Author: Sarah Kovar
; Date:   22 December 2019
; Description: Demonstrate the filter, sort,
; and forEach built in methods
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 4.4'));

//array of string values for states
const states = ["New York", "California", "Arizona", "Nebraska", "South Dakota"];

//output
console.log("-- ORIGINAL ARRAY --");
for (i = 0; i < states.length; i++) {
  console.log(states[i]);
}

//new line
console.log("\n");

//sorted array
console.log("-- SORTED ARRAY --")
states.sort().forEach(state => console.log(state));

//new line
console.log("\n");

//output
console.log("-- SELECTED STATE --");
var selectedState = states.filter(getStates);
console.log(selectedState[0]);


//filter function to compare a value and array elements. Parameters: state (string), filterValue (string). Return Boolean

function getStates(state, filterValue) {
  filterValue = "New York";
   if (state === filterValue) {
   return true;
 }
}