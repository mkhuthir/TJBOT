#!/usr/bin/env node    

/* Lab 6: Make the robot speak */

var TJBot = require("tjbot");
    
var tj = new TJBot(  
  ["speaker"],  
  {
    robot: {
      gender: "male"
    },
    speak: {
      language: "en-US"
    }
  },
  {
    text_to_speech: {
      username: "",         
      password: ""
    }
  });
    
tj.speak("Hello World");

