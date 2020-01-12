/*

============================================

; Title: Assignment 5.1

; Author: Mike Goldberg

; Date: 01/07/2020

; Modified By: Sarah Kovar

; Description: Discussion Board: Find the errors in the code below

;===========================================

*/


// start program


/*

    expected output:

    pepperoni, mushrooms, onions

*/


// variable declaration

//var vegetables = { "pepperoni", "mushrooms", "onions", "pineapple"};  //original

var vegetablesArray = ["pepperoni", "mushrooms", "onions", "pineapple"];  //sk appended Array to var vegetables as well as replaced curly braces with brackets

var pizzaToppings = vegetablesArray.filter(function(veggie) {   //sk update vegetables to reflect vegetablesArray

if (veggie !== "pineapple") {  //sk place pineapple in quotations

return veggie

}

});

// output

//console.log(pizzaToppings);  //SK this outputs as Array(3) ["pepperoni", "mushrooms", "onions"], commented this out and replaced with the following

pizzaToppings.forEach(topping => {
    console.log(topping + ", ")
});
