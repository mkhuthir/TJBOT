#!/usr/bin/env node

/* Lab 3: Make the robot see: take photo

TJBot can be trained to take photos and recognize objects and colors. The physical TJBot uses a Raspberry Pi camera.
The flex cable inserts into the connector situated between the Ethernet and HDMI ports, with the silver connectors 
facing the HDMI port.

This lab requires the Watson Visual Recognition service.

*/

const targetPath='./images/photo.jpg'

// just need tjbot to think that it is capable of seeing, don't
// actually need real Watson credentials for this test

const dummyWatsonCredentials = {
    visual_recognition: {
        apikey: 'abc-def-ghi'
    }
};

var TJBot = require("tjbot");

var tj = new TJBot(['camera'], {log: {level: 'debug'}}, dummyWatsonCredentials);

tj.takePhoto(targetPath).then(function(filePath) {
	console.log('Captured Photo Path ='+filePath);
});
