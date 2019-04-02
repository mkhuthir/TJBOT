#!/usr/bin/env node    

/* Lab 11:

*/

var TJBot = require("tjbot");

var tj = new TJBot(
  ["camera","speaker"], 
  {
    robot: {
      gender: "male" 
    },
    speak: {
      language: "en-US"
    }
  }, 
  {
    visual_recognition: {
      apikey: ""
    },
    text_to_speech: {
      username: "",
      password: ""
    }
  });
    
tj.see(function(objects) {
  console.log(objects);
  
  var text = "T J Bot sees " + objects.map(item => item["class"]).join(", ");
  console.log(text);
  
  tj.speak(text);
});
