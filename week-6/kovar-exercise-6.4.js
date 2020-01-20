/*
============================================
; Title: Exercise 6.4
; Author: Sarah Kovar
; Date: 19 January 2020
; Description: This program utilizes nested
; object literals.
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 6.4'));

//nested object

let ticket = {
person: {
    id: 349,
    firstName: 'Chris',
    lastName: 'Stefano',
    jobTitle: 'Administrator II'
  },
  id: 1368,
  name: 'Database',
  dateCreated: new Date().toLocaleDateString('en-US'),
  priority: 'Low'
};

//output
console.log('Ticket ' + ticket.id + ' was created on ' + ticket.dateCreated + ' and assigned to employee ' + ticket.person.firstName + ' ' + ticket.person.lastName + ' ' + '(' 
+ ticket.person.jobTitle + ').' );