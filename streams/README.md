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

Node.js is a very powerful JavaScript-based framework/platform built on Google Chrome's JavaScript V8 Engine. It is used to develop I/O intensive web applications like video streaming sites, single-page applications, and other web applications. Node.js is open source, completely free, and used by thousands of developers around the world.

Create a js file named 1. read-from-stream.js which has the following code:

var fs = require("fs");</br>
var data = '';</br>

// Create a readable stream</br>
var readerStream = fs.createReadStream('input.txt');</br>

// Set the encoding to be utf8. </br>
readerStream.setEncoding('UTF8');</br>

// Handle stream events --> data, end, and error</br>
readerStream.on('data', function(chunk) {</br>
   data += chunk;</br>
});</br>

readerStream.on('end',function(){</br>
   console.log(data);</br>
});</br>

readerStream.on('error', function(err){</br>
   console.log(err.stack);</br>
});</br>

console.log("Program Ended");</br>

Now run the 1. read-from-stream.js to see the result:

C:\nodejs-world\streams>node "1. read-from-stream.js"

Verify the Output

Program Ended
?Node.js is a very powerful JavaScript-based framework/platform built on Google
Chrome's JavaScript V8 Engine. It is used to develop I/O intensive web applicati
ons like video streaming sites, single-page applications, and other web applicat
ions. Node.js is open source, completely free, and used by thousands of develope
rs around the world.

# Writing to stream

Now run the 2. writing-to-stream.js to see the result:

Create a js file named 2. writing-to-stream.js which has the following code:

var fs = require("fs");
var data = 'Node.js is a very powerful JavaScript-based framework/platform built on Google Chrome JavaScript V8 Engine.';

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Write the data to stream with encoding to be utf8
writerStream.write(data, 'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function () {
	console.log("Write completed.");
});

writerStream.on('error', function (err) {
	console.log(err.stack);
});

console.log("Program Ended");
Now run the 2. writing-to-stream.js to see the result:

C:\nodejs-world\streams>node "2. writing-to-stream.js"

Verify the Output

Program Ended
Write completed.

Now open output.txt created in your current directory and verify the following content available in output.txt file.

Node.js is a very powerful JavaScript-based framework/platform built on Google Chrome JavaScript V8 Engine.
