#!/usr/bin/env node    

/* Lab 5: Translate language 

TJBot can be trained to identify the language of text and translate text from one language to another by using the 
Watson Language Translator service.

*/

var TJBot = require('tjbot');
var config = require('./config');

// obtain our credentials from config.js
var credentials = config.credentials;

// these are the hardware capabilities that our TJ needs for this recipe
var hardware = [];

// set up TJBot's configuration
var tjConfig = {
    log: {
        level: 'verbose'
    }
};

// instantiate our TJBot!
var tj = new TJBot(hardware, tjConfig, credentials);

var text = "bonjour";

tj.identifyLanguage(text).then(function(languages) {
  var sourceLanguage = languages.languages[0].language;
  var targetLanguage = "en";
  
  tj.isTranslatable(sourceLanguage, targetLanguage).then(function(result) {
    if(result) {
      tj.translate(text, sourceLanguage, targetLanguage).then(function(translation) {
        console.log(translation.translations[0].translation);
      });
    } else {
      console.log("Unable to translate from '"+sourceLanguage+"' to '"+targetLanguage+"'");
    }
  });  
});

/*
Other methods:

identifyLanguage()
translate(text, srcLanguage, targetLanguage)
isTranslatable(srcLanguage, targetLanguage)

*/
