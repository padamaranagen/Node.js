# Node.js - Web Module

## What is Web Server?
Web Server is a software application which handles HTTP requests sent by the HTTP client, like web browsers, and returns web pages in response to the clients. Web servers usually delivers html documents along with images, style sheets and scripts.

Most of the web server support server side scripts using scripting language or redirect to application server which perform the specific task of getting data from database, perform complex logic etc. and then sends a result to the HTTP client through the Web server.

Apache web server is one of the most commonly used web server. It is an open source project.

# Web Application Architecture

A Web application is usually divided into four layers:
![alt tag](https://github.com/nagendramca2011/NodeJS-World/blob/master/web-module/Untitled.png)

* Client - This layer consists of web browsers, mobile browsers or applications which can make HTTP request to the web server.

* Server - This layer consists of Web server which can intercepts the request made by clients and pass them the response.

* Business - This layer consists of application server which is utilized by web server to do required processing. This layer interacts with data layer via data base or some external programs.

* Data - This layer consists of databases or any source of data.

##Creating Web Server using Node

Node.js provides http module which can be used to create either HTTP client of server. Following is a bare minimum structure of HTTP server which listens at 8081 port.

Create a js file named create-webserver-using-node.js:

var http = require('http'); </br>
var fs = require('fs');</br>
var url = require('url');</br>


// Create a server</br>
http.createServer(function (request, response) {</br>
    // Parse the request containing file name</br>
    var pathname = url.parse(request.url).pathname;</br>

    // Print the name of the file for which request is made.</br>
    console.log("Request for " + pathname + " received.");</br>

    // Read the requested file content from file system</br>
    fs.readFile(pathname.substr(1), function (err, data) {</br>
        if (err) {</br>
            console.log(err);</br>
            // HTTP Status: 404 : NOT FOUND</br>
            // Content Type: text/plain</br>
            response.writeHead(404, { 'Content-Type': 'text/html' });</br>
        } else {</br>
            //Page found	  </br>
            // HTTP Status: 200 : OK</br>
            // Content Type: text/plain</br>
            response.writeHead(200, { 'Content-Type': 'text/html' });</br>

            // Write the content of the file to response body</br>
            response.write(data.toString());</br>
        }</br>
        // Send the response body </br>
        response.end();</br>
    });</br>
}).listen(3000);</br>

// Console will print the message</br>
console.log('Server running at http://localhost:3000/');</br>

index.html</br>
```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
</head>
<body>
    Welcome to NodeJS World!!
</body>
</html>
```


Now let us run the create-webserver-using-node.js to see the result:
C:\nodejs-world\web-module>node create-webserver-using-node.js

Verify the Output</br>
Server running at http://localhost:3000/</br>

## Make a request to Node.js server

Open http://localhost:3000/index.html in any browser and see the below result.

![alt tag](https://github.com/nagendramca2011/NodeJS-World/blob/master/web-module/output1.PNG)

Verify the Output at server end.

C:\nodejs-world\web-module>node create-webserver-using-node.js</br>
Server running at http://localhost:3000/</br>
Request for /index.html received.</br>

## Creating Web client using Node

A web client can be created using http module. Let's check the following example.

client.js</br>

var http = require('http');</br>

// Options to be used by request </br>
var options = {</br>
    host: 'localhost',</br>
    port: '3000',</br>
    path: '/index.html'</br>
};</br>

// Callback function is used to deal with response</br>
var callback = function (response) {</br>
    // Continuously update stream with data</br>
    var body = '';</br>
    response.on('data', function (data) {</br>
        body += data;</br>
    });</br>

    response.on('end', function () {</br>
        // Data received completely.</br>
        console.log(body);</br>
    });</br>
}</br>
// Make a request to the server</br>
var req = http.request(options, callback);</br>
req.end();</br>

Now run the create-webclient-using-node.js from a different command terminal other than create-webserver-using-node.js to see the result:

Verify the Output at client end.

C:\nodejs-world\web-module>node create-webclient-using-node.js</br>
```html
?<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
</head>
<body>
    Welcome to NodeJS World!!
</body>
</html>
```
Verify the Output at server end.

C:\nodejs-world\web-module>node create-webserver-using-node.js</br>
Server running at http://localhost:3000/</br>
Request for /index.html received.</br>
