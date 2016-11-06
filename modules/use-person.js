/**
 * Created by nghiepnds on 11/4/2016.
 * Use an exported class
 */
var Person = require("./lib/Person");

//Create new Person object
var ben = new Person("Ben Franklin");

//Define the event listener
ben.on('speak', function(said) {
    console.log( ben.name + ": " + said);
});

//Emit a message
ben.emit('speak', "You may delay, but time will not.");