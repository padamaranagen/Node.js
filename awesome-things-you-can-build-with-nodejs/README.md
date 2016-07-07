## Awesome things you can build with nodejs

1. Gif Chat Room

Node.js is built for making chat applications. Here’s a novel twist. Chrome and Firefox have an API to access a computer’s camera. Images from the camera get processed around the submission of a chat message and a gif is sent to the room.

2. Remote Control for a Car

When I took apart a remote control car and was able to programmatically control it, I knew I had to put a web interface on it and I built it in Node.js.

When you mouse over the arrows on screen in the browser or press the arrows on your keyboard, the commands get sent over WebSockets to the Node.js server and then that server sends those instructions in real-time over USB to a small computer called Arduino. The Arduino sends the key presses programmatically to the remote control to control the car.

I also used JavaScript APIs to detect gyroscope sensors in mobile devices. So you can open up your iPhone and you steer it in the browser! And not to discriminate against devices, you can use the Wii U’s gamepad to control it like a steering wheel!

3. We Play Pokémon

This is more of a proof of concept than anything else, but a cool one at that. Node.js is able to stream the out put of applications in real-time to web browsers and take input, over web sockets.

This means you can stream your favorite Gameboy games and play them in the browser. Which is fun by yourself, but insanely fun (and frustrating) when everyone else who visits the site at the same time controls it too!

4. Remote Control a Computer

Building things in Node.js doesn’t always have to be for recreation, there’s utility in it too. In this example you can take control of another computer over the internet.

5. Build your Own Hangouts

With other modern Web APIs like WebRTC being supported by more and more browsers, Google Hangout-like applications are going to get more common. Talky.io is one of those.

6. Collaborative Drawing Tool

I showed Treehouse students how to build a simple drawing application in jQuery in the course jQuery Basics.

I extended the functionality with Node.js so that multiple people can draw on the same canvas!

7. Desktop RSS Reader

With Node.js you could build cross-platform applications to run on your desktop. Here’s an example of an app called Sputnik. It’s an RSS reader.