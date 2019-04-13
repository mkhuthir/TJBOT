#!/usr/bin/env node

/* Lab 3: Make the robot see

TJBot can be trained to take photos and recognize objects and colors. The physical TJBot uses a Raspberry Pi camera.
The flex cable inserts into the connector situated between the Ethernet and HDMI ports, with the silver connectors 
facing the HDMI port.

This lab requires the Watson Visual Recognition service.

*/

var TJBot   = require("tjbot");
var config  = require('./config');

// these are the hardware capabilities that our TJ needs for this recipe
var hardware = ["camera"];

// set up TJBot's configuration
var tjConfig = config.tjConfig;

// obtain our credentials from config.js
var credentials = config.credentials;

// instantiate our TJBot!
var tj = new TJBot(hardware, tjConfig, credentials);

tj.see().then(function(objects)
  {
    console.log(objects.map(i => i.class).join(", "));
  }
);
