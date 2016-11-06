/**
 * Created by nghiepnds on 11/4/2016.
 */
var fs = require("fs");

//Using readdir - list files, folders
fs.readdir('./lib', function(err, files) {
    if (err) {
        throw err;
    }

    console.log(files);
});

console.log("Reading Files...");
