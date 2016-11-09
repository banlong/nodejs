var express = require("express");
var cors = require("cors"); //cross origin request serve

//Create an application
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

//middleware to log the request
app.use(function(req, res, next) {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

//serve directory, express.static is actually a middleware
app.use(express.static("./express/public"));

//Allow cross origin request
app.use(cors());

//GET routes definition
app.get("/dictionary-api", function(req, res){
    //return array of json
    res.json(skierTerms);
});

//listen port
app.listen(3000);
console.log("Express app running on port 3000");

//export app module, use app in other modules
module.exports = app;