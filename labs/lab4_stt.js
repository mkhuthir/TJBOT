#!/usr/bin/env node    

/* Lab 4: Convert speech to text */

var TJBot = require("tjbot");

var tj = new TJBot(  
  ["microphone"],  
  {
    listen: {
      language: "en-US"    
    }
  },  
  { 
    speech_to_text: {
      username: "",      
      password: ""
    }
  });

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
