/*
1. First, tell the response which status it should have (a successful status is 200).
2. Next, write a message to the response body in the form of "Hello, this is <your name here>".
3. To finish it up, tell the response to end so the client on the other side knows it has received all the data.
*/

var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200);//Status code in header 
    response.write("Hello, this is nagendra");//Reponse body
    response.end();//Close the connection
}).listen(8080);
