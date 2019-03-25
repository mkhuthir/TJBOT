#!/usr/bin/env node    

/* Lab 5: Translate language */


var TJBot = require("tjbot");

var tj = new TJBot(
  [],
  {},
  {
   language_translator: {    
    apikey: ""
   },
  }
);

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
