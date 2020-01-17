/*
============================================
; Title: Discussion 6.1
; Author: Sarah Kovar
; Date: 16 January 2020
; Description: This program utilizes object   
; properties and contains two errors.
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 6.1'));

var midnight = {
    name: 'Midnight',
    color: 'black',
    weight: 11
};

var samson = {
    name: 'Samson',
    color: 'calico',
    weight: 8
};

var mix = {
    name: 'Mix',
    color: 'tuxedo',
    weight: 15
};

var stormy = (
    name: 'Stormy',
    color: 'grey',
    weight: 7
);

mix.weight = 12;

function showCat(cat) {
    console.log(cat.name + ' is a ' + cat.color + ' cat. ' + cat[name] + ' weighs ' + cat.weight + ' lbs.');
}

showCat(midnight);
showCat(samson);
showCat(mix);
showCat(stormy);