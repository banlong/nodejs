/**
 * Created by nghiepnds on 11/4/2016.
 */

var EventEmitter = require('events').EventEmitter;
var inherits = require('util').inherits;

//Define an object with constructor function, Person has name
var Person = function(name) {
    this.name = name;
};

//Javascript Inheritance: Add an obj to the prototype of other object,
//Person inherits the EventEmitter-->person can emit, can listen
inherits(Person, EventEmitter);

//Export this class for reuse
module.exports = Person;
