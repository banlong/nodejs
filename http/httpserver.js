var http = require("http");

//Create http server
var port = 3000;
var server  = http.createServer(function(req, res) {
    //write header
    res.writeHead(200, {"Content-Type": "text/html"});

    //end response & send some data content
    res.end(`<!DOCTYPE html>
    <html>
    <head>
    <title>Web Server</title>
    </head>
    <body>
    <h1>Hello World</h1>
    </html>
   `);
});

//server start to listen
server.listen(port);
console.log("Server listening on port " + port);
