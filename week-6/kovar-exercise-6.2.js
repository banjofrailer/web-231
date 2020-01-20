/*
============================================
; Title: Exercise 6.2
; Author: Sarah Kovar
; Date: 19 January 2020
; Description: This program utilizes exception
; handling.
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 6.2'));


try {
  //variables
  var instrumentArray = ["piano", "guitar", "mandolin", "banjo", "saxophone", "trombone"];
  instrumentArray.length = -1;

  //if statement
  if (instrumentArray.length < 0) throw RangeError("Invalid array length");

  //output
  console.log(instrumentArray.length);
} catch (err) {
  console.log("Catch clause: " + err);
} finally {
  console.log('Finally clause reached...');
}