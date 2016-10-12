(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function add (one, two) {
  return one + two;
}

module.exports = add;
},{}],2:[function(require,module,exports){
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
},{"./add":1,"./divide":3,"./multiply":5,"./subtract":6}],3:[function(require,module,exports){
"use strict";

function divide (one, two) {
  return one / two;
}

module.exports = divide;
},{}],4:[function(require,module,exports){
"use strict";

let MyCalculator = require("./calculator");
console.log("main.js");
console.log("add 9 10", MyCalculator.add(9, 10));
console.log("subtract 10 9", MyCalculator.subtract(10, 9));

console.log("MyCalculator", MyCalculator);

},{"./calculator":2}],5:[function(require,module,exports){
"use strict";

function multiply (one, two) {
  return one * two;
}

module.exports = multiply;
},{}],6:[function(require,module,exports){
"use strict";

function subtract (one, two) {
  return one - two;
}

module.exports = subtract;
},{}]},{},[4]);
