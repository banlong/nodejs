/**
 * Created by nghiepnds on 11/5/2016.
 */
var fs = require("fs");

//Rename file
fs.renameSync("./temp/config.js", "./temp/config.json");

console.log("Config json file renamed");

//Rename & Move file
fs.rename("./temp/config.json", "./config.js", function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("config.json was renamed to config.js & moved to ./ successfully");
    }

});