var http = require("http");
var fs = require("fs");
var qs = require('querystring');

http.createServer(function(req, res) {
    if (req.method === "GET") {
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./http/public/form.html", "UTF-8").pipe(res);

    } else if (req.method === "POST") {
        //Get form data in chunks
        var body = "";
        req.on("data", function(chunk) {
            body += chunk;
        });

        //When receiving completed
        req.on("end", function() {
            //Parse form data
            var formData = qs.parse(body);
            console.log(`First Name: ${formData.first}`);
            console.log(`Last Name: ${formData.last}`);
            console.log(`Email    : ${formData.email}`);

            //Response with base html
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(`
				<!DOCTYPE html>
				<html>
					<head>
						<title>Form Results</title>
					</head>
					<body>
						<h1>Your Form Results</h1>
						<p>${body}</p>
					</body>
				</html>

			`);
        });
    }
}).listen(3000);

console.log("Form server listening on port 3000");
