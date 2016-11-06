/**
 * Created by nghiepnds on 11/5/2016.
 */
var fs = require("fs");

var md =
"Sample Markdown Title \n" +
"===================== \n\n"+
"Sample subtitle \n"+
"----------------\n"+
"* point\n" +
"* point\n"+
"* point";

fs.writeFile("sample.md", md.trim(), function(err) {
    console.log("File Created");
});