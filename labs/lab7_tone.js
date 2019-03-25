#!/usr/bin/env node    

/* Lab 7: Make the robot recognize tone

TJBot can be trained to understand five emotions that are present in text: anger, disgust, fear, joy, and sadness.

*/

var TJBot = require("tjbot");

var tj = new TJBot(  
  [],  
  {},  
  { 
    tone_analyzer: {
      username: "",      
      password: ""    
    }
  });

var text = "This is an amazing demo full of examples.";

tj.analyzeTone(text).then(function(response) {
  var emotions = response.document_tone.tone_categories[0].tones;
  var top = emotions[Object.keys(emotions).reduce(function(a, b) {
    return emotions[a].score > emotions[b].score ? a : b
  })];
  
  console.log("Top tone: "+top.tone_id);
});

