showArguments();


function showArguments() {

    console.log("Show arguments");
    for (var i=0; i <  process.argv.length; i++){
        console.log("Index: " + i);
        console.log("Value: " + process.argv[i])
    }    
}
