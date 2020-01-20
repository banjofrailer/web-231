/*
============================================
; Title: Exercise 6.3
; Author: Sarah Kovar
; Date: 19 January 2020
; Description: This program utilizes object
; literals.
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 6.3'));

var ticket = {
  id: 349,
  name: 'Database',
  requestor: 'Chris Stefano'
};

console.log('id: '+ ticket.id + ', name: ' + ticket.name + ', requestor: ' + ticket.requestor);