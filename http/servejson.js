var http = require("http");

//Import json data file
var data = require("../http/data/inventory.json");
// Note the "../" is because the location of servejson.js is in ./http/servejson.js
// Path forming: path from servejson to the root -->path to the root to the inventory.json:
// Example: If we put the servejson.js at'./', then path to data file should be:
// "./http/data/inventory.json"

http.createServer(function(req, res) {
    //Serve whole json filr
    if (req.url === "/") {
        res.writeHead(200, {"Content-Type": "text/json"});
        res.end(JSON.stringify(data));


        //Show in-stock items
    } else if (req.url === "/instock") {
        listInStock(res);

        //show on-order items
    } else if (req.url === "/onorder") {
        listOnBackOrder(res);

        //cannot find
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("Whoops... Data not found");
    }
}).listen(3000);

console.log("Server listening on port 3000");

//Filter show in-stock only items
function listInStock(res) {
    var inStock = data.filter(function(item) {
        return item.avail === "In stock";
    });

    //stringify the object before sending
    res.end(JSON.stringify(inStock));

}

//Filter show on-order items
function listOnBackOrder(res) {
    var onOrder = data.filter(function(item) {
        return item.avail === "On back order";
    });

    //stringify the object before sending
    res.end(JSON.stringify(onOrder));

}
