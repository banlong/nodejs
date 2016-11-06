/**
 * Created by nghiepnds on 11/4/2016.
 */
var fs = require("fs");
var path = require("path");

fs.readdir("./lib", function(err, files) {
    if(err){
        console.log(err);
        return;
    }
    files.forEach(function(fileName) {
        var file = path.join("./lib", fileName);
        console.log("file:"+ file);
        var stats = fs.statSync(file);
        console.log("stats:"+ stats);
        if(stats.isFile() && fileName !== ".DS_Store") {
            //Display file content to screen
            fs.readFile(file, "UTF-8", function(err, contents) {
                console.log(contents);
            });

        }
    });

});