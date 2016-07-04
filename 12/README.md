### Global Objects

Node.js global objects are global in nature and they are available in all modules. We do not need to include these objects in our application, rather we can use them directly. These objects are modules, functions, strings and object itself as explained below.

## __filename

The __filename represents the filename of the code being executed. This is the resolved absolute path of this code file. For a main program this is not necessarily the same filename used in the command line. The value inside a module is the path to that module file.

Example
Create a js file named __filename.js which has the following code:

// Let's try to print the value of __filename </br>

console.log(__filename);</br>

Now run the __filename.js to see the result:</br>
C:\nodejs-world\global-objects>node __filename.js</br>

Based on the location of your program, it will print main file name as follows:</br>
C:\nodejs-world\global-objects\__filename.js</br>

## __dirname

The __dirname represents the name of the directory that the currently executing script resides in.

Example
Create a js file named __dirname.js which has the following code:
// Let's try to print the value of __dirname</br>

console.log(__dirname)</br>

Now run the __dirname.js to see the result:</br>
C:\nodejs-world\global-objects>node __dirname.js</br>

Based on the location of your program, it will print current directory name as follows:</br>
C:\nodejs-world\global-objects</br>

##setTimeout(cb, ms)

The setTimeout(cb, ms) global function is used to run callback cb after at least ms milliseconds. The actual delay depends on external factors like OS timer granularity and system load. A timer cannot span more than 24.8 days.

This function returns an opaque value that represents the timer which can be used to clear the timer.

Example
Create a js file named settimeout.js which has the following code:

function printHello() {</br>
    console.log("Hello, World!");</br>
}</br>
// Now call above function after 2 seconds</br>
setTimeout(printHello, 2000);</br>

Now run the settimeout.js to see the result:</br>
C:\nodejs-world\global-objects>node settimeout.js</br>

Verify the output is printed after a little delay</br>
Hello, World!</br>

## clearTimeout(t)

The clearTimeout( t ) global function is used to stop a timer that was previously created with setTimeout(). Here t is the timer returned by setTimeout() function.

Example
Create a js file named clearTimeOut.js which has the following code:

function printHello() {</br>
    console.log("Hello, World!");</br>
}</br>
// Now call above function after 2 seconds</br>
var t = setTimeout(printHello, 2000);</br>

// Now clear the timer</br>
clearTimeout(t);</br>

Now run the clearTimeOut.js to see the result:</br>
C:\nodejs-world\global-objects>node clearTimeOut.js</br>

Verify the output where you will not find anything printed.</br>

## setInterval(cb, ms)

The setInterval(cb, ms) global function is used to run callback cb repeatedly after at least ms milliseconds. The actual delay depends on external factors like OS timer granularity and system load. A timer cannot span more than 24.8 days.

This function returns an opaque value that represents the timer which can be used to clear the timer using the function clearInterval(t).

Example
Create a js file named setInterval.js which has the following code:

function printHello() {</br>
    console.log("Hello, World!");</br>
}</br>
// Now call above function after 2 seconds</br>
setInterval(printHello, 2000);</br>

Now run the setInterval.js to see the result:</br>
C:\nodejs-world\global-objects>node setInterval.js</br>

Above program will execute function printHello() after every 2 second. Due to system limitation, this program can not be executed with Try it option so you can check it at your machine locally.

Hello, World!</br>
Hello, World!</br>
Hello, World!</br>