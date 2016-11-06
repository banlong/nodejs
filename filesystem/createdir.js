/**
 * Created by nghiepnds on 11/5/2016.
 */
var fs = require("fs");

if (fs.existsSync("lib")) {
    console.log("Directory already there");
} else {
    //create lib if it does not exist
    fs.mkdir("lib", function(err) {

        if (err) {
            console.log(err);
        } else {
            console.log("Directory Created");
        }

    });
}