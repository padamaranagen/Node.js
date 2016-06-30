# NodeJS Question and Answers

#### 1 - What is Node.JS?

A - Node.js is a web server.

B - Node.js is a JavaScript based framework/platform built on Google Chrome's JavaScript V8 Engine.

C - Node.js is a java based framework.

D - None of the above.

Answer : B</br>
Explaination</br>
Node.js is a JavaScript based framework/platform built on Google Chrome's JavaScript V8 Engine.

#### 2 - Which of the following command will show all the modules installed locally.

A - $ npm ls -g

B - $ npm ls

C - $ node ls -g

D - $ node ls

Answer : B</br>
Explaination</br>
Executing $ npm ls command will show all the modules installed locally.

#### 3 - Which of the following provides in-built events.

A - events

B - callback

C - throw

D - handler

Answer : A</br>
Explaination</br>
Node has multiple in-built events available through events module.

#### 4 - Which method of fs module is used to read a file?

A - fs.open(path, flags[, mode], callback)

B - fs.openFile(path, flags[, mode], callback)

C - fs.openPath(path, flags[, mode], callback)

D - fs.read(fd, buffer, offset, length, position, callback)

Answer : D</br>
Explaination</br>
fs.read(fd, buffer, offset, length, position, callback) is the method which is used to read a file.

#### 5 - Which of the following is true about __dirname global object?

A - The __dirname represents the name of the directory that the currently executing script resides in.

B - The __dirname represents the resolved absolute path of code file.

C - Both of the above.

D - None of the above.

Answer : A </br>
Explaination</br>
The __dirname represents the name of the directory that the currently executing script resides in.

#### 6 - Which of the following module is required for operating system specific operations?

A - os module

B - fs module

C - net module

D - None of the above.

Answer : A</br>
Explaination</br>
Node.js os module provides a few basic operating-system related utility functions.

#### 7 - Which of the following is the correct way to get a normalized path?

A - path.normalize('/test/test1//2slashes/1slash/tab/..')

B - fs.normalize('/test/test1//2slashes/1slash/tab/..')

C - os.normalize('/test/test1//2slashes/1slash/tab/..')

D - None of the above.

Answer : A</br>
Explaination</br>
path.normalize(p) normalizes a string path, taking care of '..' and '.' parts.

#### 8 - net.isIP(input) returns 0 for invalid input.

A - true

B - false

Answer : A</br>
Explaination</br>
net.isIP(input) tests if input is an IP address. Returns 0 for invalid strings, returns 4 for IP version 4 addresses, and returns 6 for IP version 6 addresses.

#### 9 - Which of the following code can create a web server?

A - http.createServer(callback)

B - http.createWebServer(callback)

C - http.createHTTPServer(callback)

D - None of the above.

Answer : A</br>
Explaination</br>
http.createServer(callback) method can be used to create a web server.

#### 10 - Which of the following is true about RESTful webservices?

A - Webservices based on REST Architecture are known as RESTful web services.

B - Webservices uses HTTP methods to implement the concept of REST architecture.

C - Both of the above.

D - None of the above.

Answer : C</br>
Explaination</br>
Webservices based on REST Architecture are known as RESTful web services. These webservices uses HTTP methods to implement the concept of REST architecture.

#### 11 Which of the following statement is valid to use a Node module http in a Node based application?

A - var http = require("http");

B - var http = import("http");

C - package http;

D - import http;

Answer : A </br>
Explaination</br>
Require directive is used to load a Node module(http) and store returned its instance(http) into its variable(http).

#### 12 - By default, npm installs any dependency in the global mode.

A - true

B - false

Answer : B </br>
Explaination</br>
By default, npm installs any dependency in the local mode.

#### 13 - Which of the following code gets length of a buffer buf?

A - buf.length

B - buf.size

C - buf.length()

D - buf.size()

Answer : A </br>
Explaination </br>
buf.length returns size of a node buffer in bytes.

#### 14 - Which method of fs module is used to close a file?

A - fs.close(fd, callback)

B - fs.closeFile(fd, callback)

C - fs.closePath(fd, callback)

D - None of the above.

Answer : A </br>
Explaination </br>
fs.close(fd, callback) is the method which is used to close a file.

#### 15 - Which of the following is true about setInterval(cb, ms) global function?

A - The setInterval(cb, ms) global function is used to run callback cb repeatedly after at least ms milliseconds.

B - The setInterval(cb, ms) method returns an opaque value that represents the timer which can be used to clear the timer using the function clearInterval(t).

C - Both of the above.

D - None of the above.

Answer : C </br>
Explaination </br>
The setInterval(cb, ms) global function is used to run callback cb repeatedly after at least ms milliseconds. The actual delay depends on external factors like OS timer granularity and system load. - A timer cannot span more than 24.8 days. This function returns an opaque value that represents the timer which can be used to clear the timer using the function clearInterval(t).

#### 16 - Which of the following is true about process global object?

A - The process object is an instance of EventEmitter.

B - process emits exit event when process is about to exit.

C - process emits uncaughtException when when an exception bubbles all the way back to the event loop.

D - All of the above.

Answer : D </br>
Explaination </br>
The process object is an instance of EventEmitter and emits the above mentioned events.

#### 17 - Which of the following API creates a server?

A - net.createServer([options][, connectionListener])

B - net.connect(options[, connectionListener])

C - net.createConnection(port[, host][, connectListener])

D - None of the above.

Answer : A </br>
Explaination </br>
net.createServer([options][, connectionListener]) creates a new TCP server. The connectionListener argument is automatically set as a listener for the 'connection' event.

#### 18 - net.isIP(input) tests if input is an IP address or not.

A - true

B - false

Answer : A </br>
Explaination </br>
net.isIP(input) tests if input is an IP address. Returns 0 for invalid strings, returns 4 for IP version 4 addresses, and returns 6 for IP version 6 addresses.

#### 19 - Which of the following is true about fork methd of child_process module.

A - The fork() method method is a special case of the spawn() to create Node processes.

B - The fork method returns object with a built-in communication channel in addition to having all the methods in a normal ChildProcess instance.

C - Both of the above.

D - None of the above.

Answer : C </br>
Explaination </br>
The fork() method method is a special case of the spawn() to create Node processes. It returns object with a built-in communication channel in addition to having all the methods in a normal ChildProcess instance.

#### 20 - Transform stream is a type of duplex stream.

A - true

B - false

Answer : A </br>
Explaination </br>
Transform stream is a duplex stream where the output is computed based on input.


#### 21 REPL stands for.

A - Research Eval Program Learn

B - Read Eval Print Loop

C - Read Earn Point Learn

D - Read Eval Point Loop

Answer : B </br>
Explaination </br>
REPL stands for Read Eval Print Loop and it represents a computer environment like a window console or Unix/Linux shell where a command is entered and system responds with an output in interactive mode.

#### 22 - What is Callback?

A - Callback is an asynchronous equivalent for a function.

B - Callback is a technique in which a method call back the caller method.

C - Both of the above.

D - None of the above.

Answer : A </br>
Explaination </br>
Callback is an asynchronous equivalent for a function.

#### 23 - Which of the following is true about writable stream?

A - writable stream is used for write operation.

B - Output of readable stream can be input to a writable stream.

C - Both of the above.

D - None of the above.

Answer : C </br> 
Explaination </br>
Writable stream is used for write operation and it can take output of readable stream as input.

#### 24 - Which of the following is true about Chaining streams?

A - Chanining is a mechanism to connect output of one stream to another stream and create a chain of multiple stream operations.

B - Chanining is normally used with piping operations.

C - Both of the above.

D - None of the above.

Answer : C </br>
Explaination </br>
Chanining is a mechanism to connect output of one stream to another stream and create a chain of multiple stream operations. It is normally used with piping operations.

#### 25 - Which method of fs module is used to delete a file?

A - fs.delete(fd, len, callback)

B - fs.remove(fd, len, callback)

C - fs.unlink(path, callback)

D - None of the above. 

Answer : C </br>
Explaination </br>
fs.unlink(path, callback) is the method which is used to delete a file.

#### 26 - Which of the following code print the endianness of operating system?

A - console.log('endianness : ' + os.endianness);

B - console.log('endianness : ' + os.endianness());

C - console.log('endianness : ' + os.getEndianness());

D - None of the above.

Answer : B </br>
Explaination </br>
os.endianness() returns the endianness of the CPU. Possible values are "BE" or "LE".

#### 27 - Which of the following module is required for path specific operations?

A - os module

B - fs module

C - path module

D - None of the above.

Answer : C </br>
Explaination </br>
Node.js path module is used for handling and transforming file paths.

#### 28 - Which of the following is true about internal binding with respect to domain module?

A - Error emmitter is executing its code within run method of a domain.

B - Error emmitter is added explicitly to a domain using its add method.

C - Both of the above.

D - None of the above.

Answer : A </br>
Explaination </br>
Error emmitter is executing its code within run method of a domain in case of internal binding.

#### 29 - Which of the following is true about fork methd of child_process module.

A - The fork() method method is a special case of the spawn() to create Node processes.

B - The fork method returns object with a built-in communication channel in addition to having all the methods in a normal ChildProcess instance.

C - Both of the above.

D - None of the above.

Answer : C </br>
Explaination </br>
The fork() method method is a special case of the spawn() to create Node processes. It returns object with a built-in communication channel in addition to having all the methods in a normal ChildProcess instance.

#### 30 - A stream fires end event when there is no more data to read.

A - true

B - false

Answer : A </br>
Explaination </br>
A stream fires end event when there is no more data to read.
