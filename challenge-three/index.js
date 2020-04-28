"use strict";
exports.__esModule = true;
var person_1 = require("./person");
console.log(person_1.person);
var person_2 = require("./person");
exports.salutations = person_2.greet(person_1.person.firstName);
