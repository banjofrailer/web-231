/*
============================================
; Title: Exercise 5.3
; Author: Sarah Kovar
; Date: 11 January 2020
; Description: This program utilizes an array   
; that contains key-value paired collections.
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 5.3'));

//array of composers

const composerArray = [
    {
      firstName: "Antonín",
      lastName: "Dvořák",
      genre: "romantic",
      rating: 10
    },
  
    {
      firstName: "Arnold",
      lastName: "Schoenberg",
      genre: "classical",
      rating: 7
    },
  
    {
      firstName: "George",
      lastName: "Gershwin",
      genre: "classical",
      rating: 8
    },
  
    {
      firstName: "Duke",
      lastName: "Ellington",
      genre: "jazz",
      rating: 10
    },
  
    {
      firstName: "John",
      lastName: "Cage",
      genre: "experimental",
      rating: 3
    }
  ];
  
  //output
  console.log("-- DISPLAYING A LIST OF FAMOUS COMPOSERS --");
  let index = 1;
  composerArray.forEach((composer) => {
    console.log("First Name: "+ composer.firstName + ", Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating)
    index++
  });