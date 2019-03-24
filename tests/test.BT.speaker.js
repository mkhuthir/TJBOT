#!/usr/bin/env node

var soundplayer = require("sound-player")
var options = {
filename: "test.wav",
gain: 10,
debug: true,
player: 'aplay',
device: 'bluealsa:HCI=hci0,DEV=11:2C:33:A4:1E:5B,PROFILE=a2dp'
}

var player = new soundplayer(options)
player.play();

player.on('error', function(err) {
console.log('Error occurred:', err);
});
