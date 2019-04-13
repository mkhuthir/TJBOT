#!/usr/bin/env node    

/* Lab 10 :

*/

var TJBot   = require('tjbot');
var config  = require('./config');

// these are the hardware capabilities that our TJ needs for this recipe
var hardware = ["microphone","led"];

// set up TJBot's configuration
var tjConfig = config.tjConfig;

// obtain our credentials from config.js
var credentials = config.credentials;

// instantiate our TJBot!
var tj = new TJBot(hardware, tjConfig, credentials);

function processText(text) 
  {
    console.log(text);
    tj.analyzeTone(text).then(function(response) 
        {
          console.log(response);
          
          var emotions = response.document_tone.tone_categories[0].tones;
          var top = emotions[Object.keys(emotions).reduce(function(a, b)
                {
                  return emotions[a].score > emotions[b].score ? a : b
                }
              )
            ];
          console.log(top);
          
          var colors = {
            "anger": "red",
            "disgust": "green",
            "fear": "magenta",
            "joy": "yellow",
            "sadness": "blue"  
          };
          tj.shine(colors[top.tone_id]);
        }
      );
  }

tj.listen(processText);
