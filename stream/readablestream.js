/**
 * Created by nghiepnds on 11/5/2016.
 */

var fs = require("fs");

var stream = fs.createReadStream("./chat.log", "UTF-8");

var data = "";

//Event occur one time when data first arrive
stream.once("data", function() {
    console.log("\n\n\n");
    console.log("Started Reading File");
    console.log("\n\n\n");
});

//When a chunk is available
stream.on("data", function(chunk) {
    process.stdout.write("chunk: " + chunk.length + "|");
    data += chunk;
});

//When end of file
stream.on("end", function() {
    console.log("\n\n\n");
    console.log("Finished Reading File " + data.length);
    console.log("\n\n\n");
});
