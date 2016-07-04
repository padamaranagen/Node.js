var buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++)
{
    buf[i] = i + 97;
}
console.log(buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz </br>
console.log(buf.toString('ascii', 0, 5));   // outputs: abcde </br>
console.log(buf.toString('utf8', 0, 5));    // outputs: abcde </br>
console.log(buf.toString(undefined, 0, 5)); // encoding defaults to 'utf8', outputs abcde </br>