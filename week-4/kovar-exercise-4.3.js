/*
============================================
; Title:  kovar-exercise-4.3
; Author: Sarah Kovar
; Date:   22 December 2019
; Description: Demonstrate iterating over
; an array
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 4.3'));

//5 vehicle array
const vehicles = ["Mercedes", "Ford", "Chevy", "BMW", "Lexus"];

//function Parameters: Array, string. Output: string.
function getValue(array, string) {
  for(i = 0; i < array.length; i++){
    if(string == array[i]){
      console.log("-- SELECTED VALUE --");
      console.log(array[i] + "\n");
    }
  }
}

//iterating over array, displaying each element. Parameter: array. Output: string.
function getVehicles(array) {
  for (i = 0; i < array.length; i++ ) {
    console.log(array[i]);
  }
  console.log("\n");
}

//tests
console.log("-- DISPLAYING ARRAY ITEMS --");
getVehicles(vehicles);
getValue(vehicles, "Mercedes");
getValue(vehicles, "BMW");

//doesn't match any element in the array. Should not display anything.
getValue(vehicles, "Unicycle");