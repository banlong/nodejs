/**
 * Created by nghiepnds on 11/5/2016.
 */

var fs = require("fs");
//If we remove a non-existing file, err occur
// but it still proceed the removing of config.js
try {
    fs.unlinkSync("./temp/config.json");
} catch (err) {
    console.log(err);
}

//Remove config.js
fs.unlink("temp/config.js", function(err) {

    if (err) {
        console.log(err);
    } else {
        console.log("config.js removed");
    }

});



