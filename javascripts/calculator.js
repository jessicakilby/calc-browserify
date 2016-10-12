"use strict";

console.log("calculatorjs");

/*
  The functionality for adding, subtracting, multiplying, and dividing
  are broken out into individual modules. Require those into this module.
 */
const add = require("./add");
const subtract = require("./subtract");
const multiply = require("./multiply");
const divide = require("./divide");

/* 
  Now, construct an object that contains a key/value pair for each
  of those modules that we pulled into this one
*/
let Calculator = {
  add, subtract, multiply, divide
};

/*
  Every module needs to specify what its output is. Think of this as the
  return statement in a function. What are we returning for use by other
  modules in the application?
 */
module.exports = Calculator;