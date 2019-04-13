#!/usr/bin/env node    

/* Lab 11: Recognize objects and say them out loud

In this lab, you'll use the Watson Visual Recognition service 
to make the robot recognize objects and then use the Watson Text
to Speech service so that the robot speaks out loud what it sees.

*/

var TJBot   = require('tjbot');
var config  = require('./config');

// these are the hardware capabilities that our TJ needs for this recipe
var hardware = ["camera","speaker"];

// set up TJBot's configuration
var tjConfig = config.tjConfig;

// obtain our credentials from config.js
var credentials = config.credentials;

// instantiate our TJBot!
var tj = new TJBot(hardware, tjConfig, credentials);
    
tj.see().then(function(objects) 
    {
      //console.log(objects);
      var text = "Hamza Bot sees " + objects.map(item => item["class"]).join(", ");
      console.log(text);
      //tj.speak(text);
    }
  );
