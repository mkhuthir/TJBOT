#!/usr/bin/env node    

/* Lab 6: Make the robot speak 

TJBot can be trained to speak phrases aloud in 13 voices in 7 languages using the Watson Text to Speech API. Just like the microphone hardware, you can use various speakers with the TJBot. See the documentation for your speaker about how to connect the speaker to the Raspberry Pi. Because of an issue with the 3.5mm audio port conflicting with the LED light, you should avoid plugging a speaker directly into the 3.5mm port. Some speakers are easier to use, including USB speakers. Using a USB speaker allows you to plug and play. You might need to locate the speaker device ID and instruct the TJBot library to use that speaker.

*/

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

