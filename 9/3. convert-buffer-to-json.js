var buf = new Buffer('Welcome to NodeJS Programming! Author: Nagendra');
var json = buf.toJSON(buf);
console.log(json);