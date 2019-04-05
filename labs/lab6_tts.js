#!/usr/bin/env node    

/* Lab 6: Make the robot speak 

TJBot can be trained to speak phrases aloud in 13 voices in 7 languages using the Watson Text to Speech API.
Just like the microphone hardware, you can use various speakers with the TJBot. 
See the documentation for your speaker about how to connect the speaker to the Raspberry Pi.
Because of an issue with the 3.5mm audio port conflicting with the LED light, you should avoid plugging 
a speaker directly into the 3.5mm port. Some speakers are easier to use, including USB speakers. 
Using a USB speaker allows you to plug and play. You might need to locate the speaker device ID and 
instruct the TJBot library to use that speaker.

*/

var TJBot = require('tjbot');
var config = require('./config');

// these are the hardware capabilities that our TJ needs for this recipe
var hardware = ["speaker"];

// set up TJBot's configuration
var tjConfig = config.tjConfig;

// obtain our credentials from config.js
var credentials = config.credentials;

// instantiate our TJBot!
var tj = new TJBot(hardware, tjConfig, credentials);
    
tj.speak("Hello World");

