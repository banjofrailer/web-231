/*
============================================
; Title:  Assignment 4.1 
; Author: Laurie Mailloux  
; Date:   December 17 2019
; Modified By:  Sarah Kovar
; Description: arrays
;===========================================
*/

//start program

//arrays
let farmAnimals = ["Horse", "Pig", "Goat"];  //modified to farmAnimals, it was missing the i

let domesticAnimals = ["Cat", "Dog", "Hamster"];

//call farm animals
console.log("Farm Animals");
for (var x = 0; x < farmAnimals.length; x++) {
  console.log(farmAnimals[x]);
}
//new line
console.log();

//call domestic animals
console.log("Domestic Animals");
for (var x = 0; x < domesticAnimals.length; x++) {
  console.log(domesticAnimals[x]);  //modified to console.log, it was missing the period 
}
//end program