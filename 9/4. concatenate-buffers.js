var buffer1 = new Buffer('Welcome to NodeJS Programming ');
var buffer2 = new Buffer('Author: Nagendra');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content: " + buffer3.toString());