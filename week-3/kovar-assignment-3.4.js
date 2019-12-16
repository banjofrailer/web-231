/*
============================================
; Title: Assignment 3.4
; Author: Professor Krasso
; Date: 15 December 2019
; Modified By: Sarah Kovar
; Description: This program uses a loop to 
; check if a random number matches preset value. 
;===========================================
*/ 

// Require statement that imports the header.js file from my root directory
const header = require('../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 3.4'));

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
    return Math.floor((Math.random() * 10) + 1)
  }
  
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
  
  var matchNumber = 6;
  
  //display game title
  console.log("-- DO THE NUMBERS MATCH GAME --");
  //for loop to compare matchNumber and a random number, displaying the output.
  for(i = 0; i < 10; i++) {
    var random = randomNumber();
    if (match(matchNumber, random) == true) {
      console.log(logMatch(matchNumber, random));
    } else {
      console.log(logMismatch(matchNumber, random));
    }
  }
