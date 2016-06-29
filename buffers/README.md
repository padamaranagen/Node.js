# NodeJs-Buffers

Buffer class is a global class and can be accessed in application without importing buffer module.

* Method 1
Following is the syntax to create an uninitiated Buffer of 10 octets:

var buf = new Buffer(10);

* Method 2
Following is the syntax to create a Buffer from a given array:

var buf = new Buffer([10, 20, 30, 40, 50]);

* Method 3
Following is the syntax to create a Buffer from a given string and optionally encoding type:

var buf = new Buffer("Simply Easy Learning", "utf-8");


# Writing to Buffers

Following is the syntax of the method to write into a Node Buffer:

buf.write(string[, offset][, length][, encoding])
Parameters
Here is the description of the parameters used:

string - This is string data to be written to buffer.

offset - This is the index of the buffer to start writing at. Default value is 0.

length - This is the number of bytes to write. Defaults to buffer.length

encoding - Encoding to use. 'utf8' is the default encoding

Return Value
This method returns number of octets written. 
If there is not enough space in the buffer to fit the entire string, it will write a part of the string.

Example
var buffer = new Buffer(256);
len = buffer.write("Welcome to NodeJS Programming!")
console.log("Lenght is:" + len); //Output Length is : 30

When above program is executed, it produces following result:
C:\nodejs-world\buffers>node 1.writing-to-buffers.js
Lenght is:30


# Reading from Buffers

Following is the syntax of the method to read data from a Node Buffer:

buf.toString([encoding][, start][, end])
Parameters
Here is the description of the parameters used:

* encoding - Encoding to use. 'utf8' is the default encoding

* start - Beginning index to start reading, defaults to 0.

* end - End index to end reading, defaults is complete buffer.

Return Value
This method decodes and returns a string from buffer data encoded using the specified character set encoding.

Example </br>
var buf = new Buffer(26);<br>
for (var i = 0 ; i < 26 ; i++)</br>
{</br>
    buf[i] = i + 97;</br>
}</br>
console.log(buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz </br>
console.log(buf.toString('ascii', 0, 5));   // outputs: abcde </br>
console.log(buf.toString('utf8', 0, 5));    // outputs: abcde </br>
console.log(buf.toString(undefined, 0, 5)); // encoding defaults to 'utf8', outputs abcde </br>

When above program in executed, it produces following result:
C:\nodejs-world\buffers>node "2. reading-from-buffers.js"</br>
abcdefghijklmnopqrstuvwxyz</br>
abcde</br>
abcde</br>
abcde</br>

# Convert Buffer to JSON
Following is the syntax of the method to convert a Node Buffer into JSON object:
buf.toJSON()
Return Value
This method returns a JSON-representation of the Buffer instance.

Example
var buf = new Buffer('Simply Easy Learning');</br>
var json = buf.toJSON(buf);</br>
console.log(json);</br>

When above program is executed, it produces following result:

C:\nodejs-world\buffers>node 3.convert-buffer-to-json
{ type: 'Buffer',
  data:
   [ 87,
     101,
     108,
     99,
     111,
     109,
     101,
     32,
     116,
     111,
     32,
     78,
     111,
     100,
     101,
     74,
     83,
     32,
     80,
     114,
     111,
     103,
     114,
     97,
     109,
     109,
     105,
     110,
     103,
     33,
     32,
     65,
     117,
     116,
     104,
     111,
     114,
     58,
     32,
     78,
     97,
     103,
     101,
     110,
     100,
     114,
     97 ] }

#Concatenate Buffers

Following is the syntax of the method to concatenate Node buffers to a single Node Buffer:

Buffer.concat(list[, totalLength])
Parameters
* Here is the description of the parameters used:

* list - Array List of Buffer objects to be concatenated

* totalLength - This is the total length of the buffers when concatenated

Return Value
This method returns a Buffer instance.

Example
var buffer1 = new Buffer('TutorialsPoint ');</br>
var buffer2 = new Buffer('Simply Easy Learning');</br>
var buffer3 = Buffer.concat([buffer1,buffer2]);</br>
console.log("buffer3 content: " + buffer3.toString());</br>
When above program is executed, it produces following result:

C:\nodejs-world\buffers>node "4. concatenate-buffers"</br>
buffer3 content: Welcome to NodeJS Programming Author: Nagendra</br>

# Compare Buffers

Following is the syntax of the method to compare two Node buffers:

buf.compare(otherBuffer);
Parameters
Here is the description of the parameters used:

* otherBuffer - This is the other buffer which will be compared with buf

Return Value
Returns a number indicating whether this comes before or after or is the same as the otherBuffer in sort order.

Example
var buffer1 = new Buffer('Welcome');</br>
var buffer2 = new Buffer('WELCOME');</br>
var result = buffer1.compare(buffer2);</br>

if (result < 0) {</br>
    console.log(buffer1 + " comes before " + buffer2);</br>
} else if (result == 0) {</br>
    console.log(buffer1 + " is same as " + buffer2);</br>
} else {</br>
    console.log(buffer1 + " comes after " + buffer2);</br>
}</br>


var buffer1 = new Buffer('Nagendra');</br>
var buffer2 = new Buffer('Nagendra');</br>
var result = buffer1.compare(buffer2);</br>

if (result < 0) {</br>
    console.log(buffer1 + " comes before " + buffer2);</br>
} else if (result == 0) {</br>
    console.log(buffer1 + " is same as " + buffer2);</br>
} else {</br>
    console.log(buffer1 + " comes after " + buffer2);</br>
}</br>
When above program is executed, it produces following result:

C:\nodejs-world\buffers>node 5.compare-buffers.js</br>
Welcome comes after WELCOME</br>
Nagendra is same as Nagendra</br>

# Copy Buffer

Following is the syntax of the method to copy a node buffer:

buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])
Parameters
Here is the description of the parameters used:

* targetBuffer - Buffer object where buffer will be copied.

* targetStart - Number, Optional, Default: 0

* sourceStart - Number, Optional, Default: 0

* sourceEnd - Number, Optional, Default: buffer.length

Return Value
No return value. Copies data from a region of this buffer to a region in the target buffer even if the target memory region overlaps with the source. If undefined the targetStart and sourceStart parameters default to 0 while sourceEnd defaults to buffer.length.

Example
var buffer1 = new Buffer('ABC');</br>
//copy a buffer</br>
var buffer2 = new Buffer(3);</br>
buffer1.copy(buffer2);</br>
console.log("buffer2 content: " + buffer2.toString());</br>
When above program is executed, it produces following result:
C:\nodejs-world\buffers>node 6.copy-buffer.js</br>
buffer2 content: Nag


# Slice Buffer

Following is the syntax of the method to get a sub-buffer of a node buffer:

buf.slice([start][, end])
Parameters
Here is the description of the parameters used:

* start - Number, Optional, Default: 0

* end - Number, Optional, Default: buffer.length

Return Value
Returns a new buffer which references the same memory as the old, but offset and cropped by the start (defaults to 0) and end (defaults to buffer.length) indexes. Negative indexes start from the end of the buffer.

Example
var buffer1 = new Buffer('TutorialsPoint');</br>
//slicing a buffer</br>
var buffer2 = buffer1.slice(0,9);</br>
console.log("buffer2 content: " + buffer2.toString());</br>
When above program is executed, it produces following result:
C:\nodejs-world\buffers>node 7.slice-buffer.js</br>
buffer2 content: Welcome t</br>

#Buffer Length

Following is the syntax of the method to get a size of a node buffer in bytes:

buf.length;
Return Value
Returns a size of buffer in bytes.

Example
var buffer = new Buffer('TutorialsPoint');</br>
//length of the buffer</br>
console.log("buffer length: " + buffer.length);</br>
When above program is executed, it produces following result:
var buffer = new Buffer('TutorialsPoint');</br>
//length of the buffer</br>
console.log("buffer length: " + buffer.length);</br>