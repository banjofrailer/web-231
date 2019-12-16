/*
============================================
; Title: Assignment 3.3
; Author: Sarah Kovar
; Date: 15 December 2019
; Description: This program uses switch 
; statement to replace if/else statements. 
;===========================================
*/ 

// Require statement that imports the header.js file from my root directory
const header = require('../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 3.3'));

let eventKeyCode = 13;

//switch statement for enter, shift, spacebar, and backspace keys
switch(eventKeyCode) {
  case eventKeyCode = 13:
    console.log('The enter key was pressed.');
    break;
  case eventKeyCode = 16:
    console.log('The shift key was pressed.');
    break;
  case eventKeyCode = 32:
    console.log('The spacebar key was pressed.');
    break;
  case eventKeyCode = 8:
    console.log('The backspace / delete key was pressed.');
    break;
  default:
    console.log('Unrecognized key.')
};
