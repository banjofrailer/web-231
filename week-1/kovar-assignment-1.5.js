/*
============================================
; Title: Assignment 1.5
; Author: Sarah Kovar
; Date: 1 December 2019
; Description: This program demonstrates the
; different variable types and values.
;===========================================
*/

//variables for first employee
var firstName1;
var lastName1;
var address1;
var payRate1;
var hireDate1;

firstName1 = "Daniel";
lastName1 = "Skeptisch";
address1 = "456 Oak Drive, Anytown ME 13579";
payRate1 = 52000;
hireDate1 = new Date(2012, 7, 16);

//display first employee data
console.log("First Employee:");
console.log("--------------------");
console.log("Full Name: " + firstName1 + " " + lastName1);
console.log("Address: " + address1);
console.log("Current Salary: " + payRate1.toFixed(1));
console.log("Start Date: " + hireDate1.toLocaleDateString());

//variables for second employee
var firstName2;
var lastName2;
var address2;
var payRate2;
var hireDate2;

firstName2 = "Amanda";
lastName2 = "Jones";
address2 = "3987 Maple Street, Somewhereton KS 78855";
payRate2 = 65000;
hireDate2 = new Date(2013, 11, 1);

//display second employee data
console.log("Second Employee:");
console.log("--------------------");
console.log("Full Name: " + firstName2 + " " + lastName2);
console.log("Address: " + address2);
console.log("Current Salary: " + payRate2.toFixed(1));
console.log("Start Date: " + hireDate2.toLocaleDateString());

//variables for third employee
var firstName3;
var lastName3;
var address3;
var payRate3;
var hireDate3;

firstName3 = "Thomas";
lastName3 = "Baker";
address3 = "418 Ash Avenue, Pleasantville NE 68805";
payRate3 = 72000;
hireDate3 = new Date(2009, 5, 13);

//display third employee data
console.log("Third Employee:");
console.log("--------------------");
console.log("Full Name: " + firstName3 + " " + lastName3);
console.log("Address: " + address3);
console.log("Current Salary: " + payRate3.toFixed(1));
console.log("Start Date: " + hireDate3.toLocaleDateString());