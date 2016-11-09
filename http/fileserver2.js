/* jshint esnext:true */
//Instruct jshint to run only on ES6

var http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs');

var mimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css"};

//Serve file in this folder
var dir = "./http/public/";
var port = 3000;

http.createServer(function(req, res) {
    console.log(`HTTP Request for ${req.url}`);

    //file path
    var filename = path.join(dir, req.url);

    //if request home page
    if (req.url ==="/") {
        filename = dir + "index.html";
    }

    fs.exists(filename, function(exists) {
        if(!exists) {
            console.log(filename + " not exists");
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('404 Not Found\n');
            res.end();
            return;
        }
        var mimeType = mimeTypes[path.extname(filename).split(".")[1]];
        res.writeHead(200, {"Content-Type": mimeType});

        var fileStream = fs.createReadStream(filename);

        //stream content to response
        fileStream.pipe(res);

    });


}).listen(port);

console.log("Web Server running on port:" + port);