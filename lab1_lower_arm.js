/* Lab 1: Move the robot's arm - Lower The Arm */

var TJBot = require("tjbot");

var tj = new TJBot(["servo"],{},{});

tj.lowerArm();
