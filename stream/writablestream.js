/**
 * Created by nghiepnds on 11/5/2016.
 */
//Collecting information with Readline
//Read input from the command line
var readline = require('readline');
var fs = require("fs");

//define interface that readline will work with
var readlineObj = readline.createInterface(process.stdin, process.stdout);

var realPerson = {
    name: '',
    sayings: []
};

//create question
readlineObj.question("What is the name of a real person? ", function(answer) {
    //get the name
    realPerson.name = answer;

    //Create stream and put name into it
    var stream = fs.createWriteStream(realPerson.name + ".md");
    var firstStr =  realPerson.name + "\n===========================\n\n";
    stream.write(firstStr);

    //set the promt message
    readlineObj.setPrompt("What would " + realPerson.name + " say?");

    //display the prompt
    readlineObj.prompt();

    //event listerner to get answer
    readlineObj.on('line', function(saying) {

        //save answer
        realPerson.sayings.push(saying.trim());

        //append data to file
        stream.write(saying.trim()+"\n");

        //exit
        if (saying.toLowerCase().trim() === 'exit') {
            readlineObj.close();
        } else {
            readlineObj.setPrompt("What else would " + realPerson.name + " say? ('exit' to leave)");
            readlineObj.prompt();
        }

    });

});

//Event listerner on 'close'
readlineObj.on('close', function() {
    console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
    process.exit();

});
