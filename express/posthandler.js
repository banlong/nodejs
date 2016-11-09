//Express framework
var express = require("express");

//Allow Cross Origin Request
var cors = require("cors");

//Parse the body of the POST request
var bodyParser = require("body-parser");

//Create an app
var app = express();

//Sample data
var skierTerms = [
    {
        term: "Rip",
        defined: "To move at a high rate of speed"
    },
    {
        term: "Huck",
        defined: "To throw your body off of something, usually a natural feature like a cliff"
    },
    {
        term: "Chowder",
        defined: "Powder after it has been sufficiently skied"
    }
];

//Use middleware - parse JSON data
app.use(bodyParser.json());
//Ensure the body url is encoded
app.use(bodyParser.urlencoded({ extended: false }));
//extended = true if we have a large amount of nested data to parse

//Log middleware
app.use(function(req, res, next) {
    console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
    next();
});

//Static fileserver middleware
app.use(express.static("./express/public"));

//CORS
app.use(cors());

//GET handler
app.get("/dictionary-api", function(req, res) {
    res.json(skierTerms);
});

//POST handler
app.post("/dictionary-api", function(req, res) {
    skierTerms.push(req.body);
    res.json(skierTerms);
});

//DELETE handler
app.delete("/dictionary-api/:term", function(req, res) {
    skierTerms = skierTerms.filter(function(definition) {
        return definition.term.toLowerCase() !== req.params.term.toLowerCase();
    });
    res.json(skierTerms);
});

//Start app
app.listen(3000);
console.log("Express app running on port 3000");

//Export app
module.exports = app;
