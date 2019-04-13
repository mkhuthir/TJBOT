#!/usr/bin/env node

// Test speaker using sound-player

var soundplayer = require("sound-player")
var options = {
    filename: "sounds/test.wav",
    gain: 10,
    debug: true,
    player: 'aplay',
    device: 'bluealsa:HCI=hci0,DEV=11:2C:33:A4:1E:5B,PROFILE=a2dp' //  add your bluetooth device mac address
    //device: "plughw:0,0" // plugged-in USB card 1, device 0; see aplay -l for a list of playback devices
}

var player = new soundplayer(options)
player.play();

player.on('error', function(err) {
    console.log('Error occurred:', err);
});
