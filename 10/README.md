### Streams

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

var fs = require("fs");</br>
var data = 'Node.js is a very powerful JavaScript-based framework/platform built on Google Chrome JavaScript V8 Engine.';</br>

// Create a writable stream</br>
var writerStream = fs.createWriteStream('output.txt');</br>

// Write the data to stream with encoding to be utf8</br>
writerStream.write(data, 'UTF8');</br>

// Mark the end of file</br>
writerStream.end();</br>

// Handle stream events --> finish, and error</br>
writerStream.on('finish', function () {</br>
	console.log("Write completed.");</br>
});</br>

writerStream.on('error', function (err) {</br>
	console.log(err.stack);</br>
});</br>

console.log("Program Ended");</br>
Now run the 2. writing-to-stream.js to see the result:

C:\nodejs-world\streams>node "2. writing-to-stream.js"

Verify the Output

Program Ended
Write completed.

Now open output.txt created in your current directory and verify the following content available in output.txt file.

Node.js is a very powerful JavaScript-based framework/platform built on Google Chrome JavaScript V8 Engine.

# Piping streams

Piping is a mechanism where we provide output of one stream as the input to another stream. It is normally used to get data from one stream and to pass output of that stream to another stream. There is no limit on piping operations. Now we'll show a piping example for reading from one file and writing it to another file.

Create a js file named "3.piping-streams.js" which has the following code:

var fs = require("fs"); </br>

// Create a readable stream</br>
var readerStream = fs.createReadStream('input.txt');</br>

// Create a writable stream</br>
var writerStream = fs.createWriteStream('output.txt');</br>

// Pipe the read and write operations</br>
// read input.txt and write data to output.txt</br>
readerStream.pipe(writerStream);</br>

console.log("Program Ended");</br>

Now run the 3.piping-streams.js to see the result:
C:\nodejs-world\streams>node 3.piping-streams.js

Verify the Output
Program Ended

Open output.txt created in your current directory and verify the following content available in output.txt file.

Node.js is a very powerful JavaScript-based framework/platform built on Google Chrome's JavaScript V8 Engine. It is used to develop I/O intensive web applications like video streaming sites, single-page applications, and other web applications. Node.js is open source, completely free, and used by thousands of developers around the world.


# Chaining streams

Chanining is a mechanism to connect output of one stream to another stream and create a chain of multiple stream operations. It is normally used with piping operations. Now we'll use the piping and chaining to first compress a file and then decompress the same.

Create a js file named "4.chaining-streams" which has the following code:

var fs = require("fs");</br>
var zlib = require('zlib');</br>

// Compress the file input.txt to input.txt.gz</br>
fs.createReadStream('input.txt')</br>
  .pipe(zlib.createGzip())</br>
  .pipe(fs.createWriteStream('input.txt.gz'));</br>

console.log("File Compressed.");</br>


var fs = require("fs");</br>
var zlib = require('zlib');</br>

// Decompress the file input.txt.gz to input.txt</br>
fs.createReadStream('input.txt.gz')</br>
  .pipe(zlib.createGunzip())</br>
  .pipe(fs.createWriteStream('input.txt'));</br>

console.log("File Decompressed.");</br>

Now run the main.js to see the result:
C:\nodejs-world\streams>node 4.chaining-streams.js

Verify the Output
File Compressed.
File Decompressed.

You will find that input.txt file has been compressed and it created a file input.txt.gz in the current directory. Now let's try to decompress the same file using the following code.