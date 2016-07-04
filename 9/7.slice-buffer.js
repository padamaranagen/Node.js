var buffer1 = new Buffer('Welcome to NodeJS');
//slicing a buffer
var buffer2 = buffer1.slice(0, 9);
console.log("buffer2 content: " + buffer2.toString());