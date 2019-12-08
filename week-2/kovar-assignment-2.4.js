/*
============================================
; Title: Assignment 2.4
; Author: Sarah Kovar
; Date: 8 December 2019
; Description: This program demonstrates 
; creating functions with and without
; parameters.
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 2.3'));

//fullName function returning firstName + lastName. Params firstName, lastName
function fullName(firstName, lastName)  {
    return firstName + " " + lastName;
}

//dateWriter function returning a new date with three parameters - year, month, day
function dateWriter (year, month, day)  {
  date = new Date(year, month, day);
  return date.toLocaleDateString();
}

//formatNumber to fixed position with two params - number, numOfFixedPositions
function formatNumber (number, numOfFixedPositions)  {
  return number.toFixed(numOfFixedPositions);
}

//convertToInt to parse a string to an integer.  One param - string
function convertToInt (string)  {
    return parseInt(string);
  }

//convertToFloat to parse a string as a float number.  One param - string
function convertToFloat(string)  {
    return parseFloat(string);
  }
  
//tests
var firstName = 'Sarah';
var lastName = 'Kovar'
console.log('\nFull name: ' + fullName('Sarah', 'Kovar\n'));

var year = 2012;
var month = 11;
var day = 25;
console.log(dateWriter(year, month, day));
console.log(date + '\n');

var number = 9.789;
var numOfFixedPositions = 2;
console.log(number + ' formatted to ' + numOfFixedPositions + ' positions: ' + formatNumber(number, numOfFixedPositions) + '\n');

var floatString = '5215685454590000000000000000000';
var intString = "3465.47896";
console.log(intString + ' converted to an integer: ' + convertToInt(intString));
console.log(floatString + ' converted to a float: ' + convertToFloat(floatString));