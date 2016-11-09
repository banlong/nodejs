/* jshint esnext:true */
//Instruct jshint to run only on ES6

var http = require("http");
var url = require('url');
var fs = require("fs");
var path = require("path");


http.createServer(function(req, res) {
    console.log(`HTTP Request for ${req.url}`);
    if (req.url ==="/") {
        fs.readFile("./http/public/index.html", "UTF-8", function (err, html) {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });

    }else if(req.url.match(/.css$/)){
        var cssPath = path.join(__dirname, "public", req.url);
        fs.exists(cssPath, function(exists) {
            console.log("exist - " + cssPath);
        });
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type":"text/css"});

        //stream the file content to response
        fileStream.pipe(res);

    }else if(req.url.match(/.jpg$/)){
        var imgPath = path.join(__dirname, "public", req.url);
        fs.exists(imgPath, function(exists) {
            console.log("exist - " + imgPath );
        });
        console.log(imgPath);
        var imageStream = fs.createReadStream(imgPath);  //-->this is binary stream, no encoding include

        res.writeHead(200, {"Content-Type":"image/jpeg"});

        //stream the file content to response
        imageStream.pipe(res);
    }else{
        res.writeHead(404, {"Content-Type":"text/plain"});
        res.end("404 - file not found");
    }
}).listen(3000);
console.log("Web Server running on port:3000");
