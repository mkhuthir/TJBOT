#!/usr/bin/env node    

/* Lab 11:

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
    
tj.see(function(objects) 
    {
      console.log(objects);
      var text = "Hamza Bot sees " + objects.map(item => item["class"]).join(", ");
      console.log(text);
      tj.speak(text);
    }
  );
