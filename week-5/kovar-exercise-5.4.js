/*
============================================
; Title: Exercise 5.4
; Author: Sarah Kovar
; Date: 11 January 2020
; Description: This program utilizes an array   
; that contains a map() method.
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 5.4'));

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

  //return a template with composer rating and last name
let composerRating = composerArray.map((composer) => {
    return `Rating: ${composer.rating}
  Composer: ${composer.lastName}
  `
  });
  
  //return a template with genre and last name
  let composerGenre = composerArray.map((composer) => {
    return `Genre: ${composer.genre}
  Composer: ${composer.lastName}
  `
  });
  
  //output
  console.log("-- COMPOSERS BY RATING --");
  composerRating.forEach((composer)=> {
    console.log(composer)
  });
  
  console.log("-- COMPOSERS BY GENRE --");
  composerGenre.forEach((composer) => {
    console.log(composer)
  });
