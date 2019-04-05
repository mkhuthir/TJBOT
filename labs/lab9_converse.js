#!/usr/bin/env node    

/* Lab 9:

*/

var TJBot = require('tjbot');
var config = require('./config');

// these are the hardware capabilities that our TJ needs for this recipe
var hardware = ["microphone","speaker"];

// set up TJBot's configuration
var tjConfig = config.tjConfig;

// obtain our credentials from config.js
var credentials = config.credentials;

// instantiate our TJBot!
var tj = new TJBot(hardware, tjConfig, credentials);

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
