#!/usr/bin/env node

/* Lab 3: Make the robot see: take photo

TJBot can be trained to take photos and recognize objects and colors. The physical TJBot uses a Raspberry Pi camera.
The flex cable inserts into the connector situated between the Ethernet and HDMI ports, with the silver connectors 
facing the HDMI port.

This lab requires the Watson Visual Recognition service.

*/

const targetPath='./images/photo.jpg'

var TJBot = require("tjbot");

var tj = new TJBot(["camera"],{},{});

tj.takePhoto(targetPath).then(function(filePath) {
	console.log('Captured Photo Path ='+filePath);
});
