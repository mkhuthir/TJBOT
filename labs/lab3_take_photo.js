/* Lab 3: Make the robot see: take photo */

var TJBot = require("tjbot");

var tj = new TJBot(
                    ["camera"],
                    {
                      see: {
                              confidenceThreshold: {
                                object: 0.5,   // only list image tags with confidence > 0.5
                                text: 0.1     // only list text tags with confidence > 0.5
                              },
                              
                              camera: {
                                height: 720,
                                width: 960,
                                verticalFlip: false, // flips the image vertically, may need to set to 'true' if the camera is installed upside-down
                                horizontalFlip: false // flips the image horizontally, should not need to be overridden
                              }
                      }
                    },
                    
                    {
                      visual_recognition: {
                          apikey: "xxx__paste__key__here__xxx"
                      }
                    }
                    );

tj.takePhoto(targetPath).then(function(filePath) {
    ...
});
