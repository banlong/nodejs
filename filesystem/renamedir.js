/**
 * Created by nghiepnds on 11/5/2016.
 */
var fs = require("fs");

//Rename directory
fs.renameSync("./temp", "./logs");

console.log("Directory renamed");

//Rename & Move file
fs.rename("./temp", "./logs", function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Directory renamed");
    }

});