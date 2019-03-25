#!/usr/bin/env node    

/* Lab 9:

*/

var TJBot = require("tjbot");

var tj = new TJBot(
  ["microphone","speaker"],
  {
    robot: {
      gender: "male"
    },
    speak: {
      language: "en-US"
    }
  },
  {
    speech_to_text: {
      username: "",
      password: ""
    },
    conversation: {
      username: "",
      password: ""
    },
    text_to_speech: {
      username: "",
      password: ""
    }    
  }
);

var workspaceId = "";

function processText(text) {
  console.log(text);
  tj.stopListening();

  tj.converse(workspaceId, text, function(response) {
    console.log(response);

    tj.speak(response.object.output.text.join(" ")).then(function(){
      tj.listen(processText);
    });
  });
}

tj.listen(processText);
