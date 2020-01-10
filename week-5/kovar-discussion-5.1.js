/*
============================================
; Title: Discussion 5.1
; Author: Sarah Kovar
; Date: 09 January 2020
; Description: This program utilizes an array   
; that contains two errors.
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 5.1'));

const catArray = [
  {
      name: 'Midnight',
      color: 'black',
      weight: '11 lbs'
  },

  {
      name: 'Samson',
      color: 'calico',
      weight: '8 lbs'
  },

  {
      name: 'Pippi',
      color: 'tiger stripe',
      weight: '6 lbs'
  },

  {
      name: 'Mix',
      color: 'tuxedo',
      weight: '15 lbs'
  },

  [
      name: 'Stormy',
      color: 'grey',
      weight: '7 lbs'
  ]
];

//output. Display cat name, color, and weight.
catArray.forEach((cat) => {
  console.log(cat.[0] + " is a " + cat.color + " cat. "+ cat.name + " weighs " + cat.weight + ".");
})