# Streams

Streams are objects that let you read data from a source or write data to a destination in continous fashion. In Node.js, there are four types of streams.

* Readable - Stream which is used for read operation.

* Writable - Stream which is used for write operation.

* Duplex - Stream which can be used for both read and write operation.

* Transform - A type of duplex stream where the output is computed based on input.

Each type of Stream is an EventEmitter instance and throws several events at different instance of times. For example, some of the commonly used events are:

* data - This event is fired when there is data is available to read.

* end - This event is fired when there is no more data to read.

* error - This event is fired when there is any error receiving or writing data.

* finish - This event is fired when all data has been flushed to underlying system

# Reading from stream

Create a text file named input.txt having following content
-
Node.js is a very powerful JavaScript-based framework/platform built on Google Chrome's JavaScript V8 Engine. It is used to develop I/O intensive web applications like video streaming sites, single-page applications, and other web applications. Node.js is open source, completely free, and used by thousands of developers around the world.
-

Create a js file named main.js which has the following code:
-
var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");
-
Now run the main.js to see the result:
-
C:\nodejs-world\streams>node "1. read-from-stream.js"
-
Verify the Output
-
Program Ended
?Node.js is a very powerful JavaScript-based framework/platform built on Google
Chrome's JavaScript V8 Engine. It is used to develop I/O intensive web applicati
ons like video streaming sites, single-page applications, and other web applicat
ions. Node.js is open source, completely free, and used by thousands of develope
rs around the world.

-