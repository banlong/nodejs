var waitTime = 3000;
var currentTime = 0;
var waitInterval = 10;
var percentWaited = 0;

//Display the waiting percentage
function writeWaitingPercent(p) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write("waiting ..." + p + "%");
}

//setInterval does some activities on each time interval
var interval = setInterval(function() {
    currentTime += waitInterval;
    percentWaited = Math.floor((currentTime/waitTime) * 100);
    writeWaitingPercent(percentWaited);
}, waitInterval);

//setTimeout define the action will be do after a waiting duration
setTimeout(function() {
    //stop the interval from running
    clearInterval(interval);

    //Display percentage
    writeWaitingPercent(100);

    console.log("\n\n done \n\n");
}, waitTime);

process.stdout.write("\n\n");
writeWaitingPercent(percentWaited);
