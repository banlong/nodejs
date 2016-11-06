/**
 * Created by nghiepnds on 11/4/2016.
 */
var events = require('events');
var emitter = new events.EventEmitter();

//Listener
emitter.on('customEvent', function (message, status) {
    console.log(status + ": " + message);
});

//Emit a message
emitter.emit('customEvent',"Hello World", 200);