/**
 * Created by nghiepnds on 11/5/2016.
 */
var fs = require("fs");

//Delete all files in the logs
fs.readdirSync("./logs").forEach(function(fileName) {
    fs.unlinkSync("./logs/" + fileName);
});

//Delete the logs directory
fs.rmdir("./logs", function(err) {
    if (err) {
        throw err;
    }
    console.log("Logs directory removed");
});



