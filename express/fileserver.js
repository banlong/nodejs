var express = require("express");

//Create an application
var app = express();

//middleware to log the request
app.use(function(req, res, next) {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

//serve directory
app.use(express.static("./express/public"));

//listen port
app.listen(3000);
console.log("Express app running on port 3000");

//export app module, use app in other modules
module.exports = app;