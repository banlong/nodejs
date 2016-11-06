var https = require("https");
var fs = require("fs");

var options = {
    hostname: "en.wikipedia.org",
    port: 443,
    path: "/wiki/George_Washington",
    method: "GET"
};

var callback = function(response){
    var responseBody = "";

    console.log("Response information");
    console.log("Response Status: " + response.statusCode);
    console.log("Response Header: " + response.headers);

    //Encoding make sure Binary response transformed into string
    response.setEncoding("UTF-8");

    //log out the first chunk of data
    response.once("data", function(chunk){
        console.log(chunk);
    });

    response.on("data", function(chunk){
        responseBody += chunk;
        console.log("chunk: " + chunk.length);

    });

    response.on("end", function(){
        fs.writeFile("goerge-washington", responseBody, function(err){
            if (err){
                throw err;
            }
        });
        console.log("File downloaded");
    });
};

var req = https.request(options, callback).end();
