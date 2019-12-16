/*
============================================
; Title: Assignment 3.2
; Author: Sarah Kovar
; Date: 15 December 2019
; Description: This program uses control 
; statements to demonstrate conditionals.
;===========================================
*/ 

// Require statement that imports the header.js file from my root directory
const header = require('../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 3.2'));

//match function checking to see if 2 parameters are equal. Parameters: itemOne, itemTwo. Return Boolean.
function match(itemOne, itemTwo) {
  if(itemOne === itemTwo) {
    return true;
  } else {
    return false;
  }
}

//log mismatch function to display a message if parameters do not match. Parameters: itemOne, itemTwo. Return string.
function logMismatch(itemOne, itemTwo) {
 return(itemOne + " and " + itemTwo + " don't match!");
}

//log match function to display a message if parameters match. Parameters: itemOne, itemTwo. Return string.
function logMatch(itemOne, itemTwo) {
  return(itemOne + " and " + itemTwo + " match!");
}

//local test variables and tests
var numberOne = 1;
var numberTwo = 8;
var stringOne = "dog";
var stringTwo = "cat";
var booleanOne = true;
var booleanTwo = false;

if(match(stringOne, stringOne) == true) {
  console.log(logMatch(stringOne, stringOne));
} else {
  console.log(logMismatch(stringOne, stringOne));
};

if(match(numberOne, numberTwo) == true) {
  console.log(logMatch(numberOne, numberTwo));
} else {
  console.log(logMismatch(numberOne, numberTwo));
};

if(match(stringOne, stringTwo) == true) {
  console.log(logMatch(stringOne, stringTwo));
} else {
  console.log(logMismatch(stringOne, stringTwo));
};

if(match(booleanOne, booleanTwo) == true) {
  console.log(logMatch(booleanOne, booleanTwo));
} else {
  console.log(logMismatch(booleanOne, booleanTwo));
};