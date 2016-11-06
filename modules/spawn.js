/**
 * Created by nghiepnds on 11/4/2016.
 */

var spawn = require("child_process").spawn;

//run always talking
var cp = spawn("node", ["alwaysTalking"]);

//display message from always talking
cp.stdout.on("data", function(data) {
    console.log("STDOUT: " + data.toString());
});

//close child process
cp.on("close", function() {
    console.log("Child Process has ended");
    process.exit();
});

//Timeout in 4s
setTimeout(function() {
    cp.stdin.write("stop");
}, 4000);