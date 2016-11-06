//Import libs
var EventEmitter = require('events').EventEmitter;
var inherits = require('util').inherits;

//Define an object with constructor function, Person has name
var Person = function(name) {
    this.name = name;
};

//Javascript Inheritance: Add an obj to the prototype of other object,
//Person inherits the EventEmitter-->person can emit, can listen
inherits(Person, EventEmitter);

//Create new Person object
var ben = new Person("Ben Franklin");

//Define the event listener
ben.on('speak', function(said) {
    console.log( ben.name + ": " + said);
});

//Emit a message
ben.emit('speak', "You may delay, but time will not.");


