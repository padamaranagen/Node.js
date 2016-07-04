var buffer1 = new Buffer('Welcome');
var buffer2 = new Buffer('WELCOME');
var result = buffer1.compare(buffer2);

if (result < 0) {
    console.log(buffer1 + " comes before " + buffer2);
} else if (result == 0) {
    console.log(buffer1 + " is same as " + buffer2);
} else {
    console.log(buffer1 + " comes after " + buffer2);
}


var buffer1 = new Buffer('Nagendra');
var buffer2 = new Buffer('Nagendra');
var result = buffer1.compare(buffer2);

if (result < 0) {
    console.log(buffer1 + " comes before " + buffer2);
} else if (result == 0) {
    console.log(buffer1 + " is same as " + buffer2);
} else {
    console.log(buffer1 + " comes after " + buffer2);
}