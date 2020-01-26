/*
============================================
; Title: Exercise 7.2
; Author: Sarah Kovar
; Date: 25 January 2020
; Description: This program utilizes constructor
; functions.
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 7.2'));


//employee object
var employee = {
  id: 0,
  firstName: "",
  lastName: "",
  title: ""
};

//function to create employee objects. params id, firstName, lastName, title.
function Employee(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

//create an array with 5 employee objects

var employees = [
  new Employee(1227, "Daniel", "Flanagan", "JavaScript Developer"),
  new Employee(2345, "Addy", "Osmani", "JavaScript Developer"),
  new Employee(4563, "Evan", "Hahn", "Database Administrator"),
  new Employee(5879, "Marc", "Silver", "UI Designer"),
  new Employee(6214, "Ken", "Schwaber", "Scrum Master")
];

//output
for(i =0; i < employees.length; i++) {
  console.log((i + 1) + ' ' + employees[i].firstName + ' ' + employees[i].lastName + ' ' + employees[i].title);
}