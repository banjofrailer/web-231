/*
============================================
; Title:  kovar-exercise-4.2
; Author: Sarah Kovar
; Date:   22 December 2019
; Description: Demonstrate iteration over
; a parameterized array
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 4.2'));

//declare array
const fruit = ["canteloupe", "ranier cherries", "peach", "apple", "banana"];

//iterating over array, displaying each element. Parameter: array. Output: string.
function getFruit(array) {
  for (i = 0; i < array.length; i++ ) {
    console.log(array[i]);
  }
}

//test
getFruit(fruit);