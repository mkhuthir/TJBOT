#!/usr/bin/env node    

/* Lab 7: Make the robot chat

TJBot can be trained to recognize intents and entities in phrases by using the Watson Assistant service.
Using the training tool, you can provide Watson examples of intents (actions or questions the user might ask), 
entities (objects or things the user might mention that are specific to customizing a response), 
and responses in a dialog.

The Watson Assistant service will use these examples to determine the most appropriate response.

Important: Watson Assistant was formerly named Watson Conversation. Some of the TJBot library components still refer to Conversation, 
but all the Watson Conversation services capabilities are supported in the Watson Assistant service.

*/

var TJBot = require("tjbot");

var tj = new TJBot(  
  [],  
  {},  
  { 
    conversation: {
      username: "",      
      password: ""    
    }
  });

var workspaceId = "";
var text = "How do you use Watson Assistant?";

tj.converse(workspaceId, text, function(response) {  
  console.log(response.object.output.text.join(" "));  
});

