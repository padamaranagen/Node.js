### Express Framework

#### Express Overview

Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It facilitates a rapid development of Node based Web applications. Following are some of the core features of Express framework:

* Allows to set up middlewares to respond to HTTP Requests.

* Defines a routing table which is used to perform different action based on HTTP Method and URL.

* Allows to dynamically render HTML Pages based on passing arguments to templates.

#### Installing Express

Firstly, install the Express framework globally using npm so that it can be used to create web application using node terminal.

``` npm install express --save ```

Above command saves installation locally in node_modules directory and creates a directory express inside node_modules. There are following important modules which you should install along with express:

* body-parser - This is a node.js middleware for handling JSON, Raw, Text and URL encoded form data.

* cookie-parser - Parse Cookie header and populate req.cookies with an object keyed by the cookie names.

* multer - This is a node.js middleware for handling multipart/form-data.

```
$ npm install body-parser --save
$ npm install cookie-parser --save
$ npm install multer --save
```


#### Hello world Example

Following is a very basic Express app which starts a server and listens on port 3000 for connection. This app responds with Hello World! for requests to the homepage. For every other path, it will respond with a 404 Not Found.


server.js
```
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})

var server = app.listen(3000, function () {
    //var host = server.address().address
    //var port = server.address().port
    //console.log("Example app listening at http://%s:%s", host, port)
    console.log("Example app listening at http://localhost:3000");
})

```

Save the above code in a file named server.js and run it with the following command.

C:\nodejs-world\15>node server.js
Example app listening at http://localhost:3000

#### Request & Response
Express application makes use of a callback function whose parameters are request and response objects.

```
app.get('/', function (req, res) {
   // --
})
```


You can check further detail on both the objects:

* Request Object - The request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.

* Response Object - The response object represents the HTTP response that an Express app sends when it gets an HTTP request.

You can print req and res objects which provide lot of information related to HTTP request and response including cookies, sessions, URL etc.


#### Basic Routing

We have seen a basic application which serves HTTP request for the homepage. Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

We will extend our Hello World program to add functionality to handle more type HTTP requests.


