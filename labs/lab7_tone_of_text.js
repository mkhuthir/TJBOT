#!/usr/bin/env node    

/* Lab 7: Make the robot recognize tone

TJBot can be trained to understand five emotions that are present in text: anger, disgust, fear, joy, and sadness.

*/

var TJBot   = require('tjbot');
var config  = require('./config');

// these are the hardware capabilities that our TJ needs for this recipe
var hardware = [];

// set up TJBot's configuration
var tjConfig = config.tjConfig;

// obtain our credentials from config.js
var credentials = config.credentials;

// instantiate our TJBot!
var tj = new TJBot(hardware, tjConfig, credentials);

var text = "This is an amazing demo full of examples.";

tj.analyzeTone(text).then(function(response) 
    {
      var emotions = response.document_tone.tone_categories[0].tones;
      var top = emotions[Object.keys(emotions).reduce(function(a, b) 
            {
              return emotions[a].score > emotions[b].score ? a : b
            }
          )
        ];
    
      console.log("Top tone: "+top.tone_id);
    }
  );

