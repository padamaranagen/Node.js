# NodeJS Question and Answers

#### 1 - What is Node.JS?

A - Node.js is a web server.

B - Node.js is a JavaScript based framework/platform built on Google Chrome's JavaScript V8 Engine.

C - Node.js is a java based framework.

D - None of the above.

Answer : B
Explaination
Node.js is a JavaScript based framework/platform built on Google Chrome's JavaScript V8 Engine.

#### 2 - Which of the following command will show all the modules installed locally.

A - $ npm ls -g

B - $ npm ls

C - $ node ls -g

D - $ node ls

Answer : B
Explaination
Executing $ npm ls command will show all the modules installed locally.

#### 3 - Which of the following provides in-built events.

A - events

B - callback

C - throw

D - handler

Answer : A
Explaination
Node has multiple in-built events available through events module.

#### 4 - Which method of fs module is used to read a file?

A - fs.open(path, flags[, mode], callback)

B - fs.openFile(path, flags[, mode], callback)

C - fs.openPath(path, flags[, mode], callback)

D - fs.read(fd, buffer, offset, length, position, callback)

Answer : D
Explaination
fs.read(fd, buffer, offset, length, position, callback) is the method which is used to read a file.

#### 5 - Which of the following is true about __dirname global object?

A - The __dirname represents the name of the directory that the currently executing script resides in.

B - The __dirname represents the resolved absolute path of code file.

C - Both of the above.

D - None of the above.

Answer : A
Explaination
The __dirname represents the name of the directory that the currently executing script resides in.

#### 6 - Which of the following module is required for operating system specific operations?

A - os module

B - fs module

C - net module

D - None of the above.

Answer : A
Explaination
Node.js os module provides a few basic operating-system related utility functions.

#### 7 - Which of the following is the correct way to get a normalized path?

A - path.normalize('/test/test1//2slashes/1slash/tab/..')

B - fs.normalize('/test/test1//2slashes/1slash/tab/..')

C - os.normalize('/test/test1//2slashes/1slash/tab/..')

D - None of the above.

Answer : A
Explaination
path.normalize(p) normalizes a string path, taking care of '..' and '.' parts.

#### 8 - net.isIP(input) returns 0 for invalid input.

A - true

B - false

Answer : A
Explaination
net.isIP(input) tests if input is an IP address. Returns 0 for invalid strings, returns 4 for IP version 4 addresses, and returns 6 for IP version 6 addresses.

#### 9 - Which of the following code can create a web server?

A - http.createServer(callback)

B - http.createWebServer(callback)

C - http.createHTTPServer(callback)

D - None of the above.

Answer : A
Explaination
http.createServer(callback) method can be used to create a web server.

#### 10 - Which of the following is true about RESTful webservices?

A - Webservices based on REST Architecture are known as RESTful web services.

B - Webservices uses HTTP methods to implement the concept of REST architecture.

C - Both of the above.

D - None of the above.

Answer : C
Explaination
Webservices based on REST Architecture are known as RESTful web services. These webservices uses HTTP methods to implement the concept of REST architecture.