#!/usr/bin/env node

/* Lab 4: Convert speech to text

TJBot can be trained to listen to natural phrases spoken into the microphone. Several types of microphones are available, 
each with varying degrees of audio quality. In practice, some work much better in noisy environments. 
Others do better when pointed directly at the source of the audio. USB microphones are the easiest to use where you can plug and play.
The TJBot kit comes with a small stubby USB microphone. The microphone should face toward the front of the robot.

Depending on the way the Raspberry Pi detects the microphone, you might need to instruct the TJBot library to use a different
speaker device ID.

*/

var TJBot = require('tjbot');
var config = require('./config');

// obtain our credentials from config.js
var credentials = config.credentials;

// these are the hardware capabilities that our TJ needs for this recipe
var hardware = ['led', 'microphone'];

// set up TJBot's configuration
var tjConfig = {
    log: {
        level: 'verbose'
    }
};

// instantiate our TJBot!
var tj = new TJBot(hardware, tjConfig, credentials);


tj.listen(function(text) {
  console.log(text);
  tj.stopListening();
});

/*
Other Mic control commands:

listen(callback)
pauseListening()
resumeListening()
stopListening()

*/
