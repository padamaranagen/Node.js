# Code School

###1.2 Hello You
	Let's start with a simple Hello server. Follow the tasks below to create a simple Node server that outputs a greeting.
####Task
1. First, tell the response which status it should have (a successful status is 200).
2. Next, write a message to the response body in the form of "Hello, this is <your name here>".
3. To finish it up, tell the response to end so the client on the other side knows it has received all the data.
###1.3 Convert Blocking
	Not everyone knows why it's important to write non-blocking programs in Node.js. One of these unfortunate souls has written some code to read a file off the file-system using the blocking function readFileSync. Convert the code to be non-blocking using the readFile function instead.
####Task
1. Start by changing the call from readFileSync() to readFile().
2. Next, add a callback method to the readFile() call. This method should accept error and contents parameters.
3. To finish it up, remove the contents var declaration, and move the call to console.log() inside your callback.



