// Creates a read stream from a file, pipes it through a zip transform stream,
// and then pipes it to a writable file stream. This creates a zip file on the
// file system.
var fs = require('fs');
var gzip = require('zlib').createGzip();

var input = fs.createReadStream('cool.txt');
var out = fs.createWriteStream('cool.txt.gz');

// Pipe chain
input.pipe(gzip).pipe(out);
