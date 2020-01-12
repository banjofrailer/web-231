/*
============================================
; Title: Exercise 5.2
; Author: Sarah Kovar
; Date: 11 January 2020
; Description: This program utilizes an array   
; that contains a forEach() method.
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 5.2'));

//String array of five (5) favorite food types
const foodArray = ["Pizza", "Steak", "Curry", "Sushi", "French Fries"];

//output
foodArray.forEach((food) => {
  console.log(food)
});