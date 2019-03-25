#!/usr/bin/env node

/* Lab 1: Move the robot's arm - Raise the arm 

TJBot has a servo connected to the left arm that can be controlled to signal the user about various conditions using movement.
You can make the arm move in several ways:
Lower the arm
Raise the arm
Move the back
Wave the arm up and down

*/

var TJBot = require("tjbot");

var tj = new TJBot(["servo"],{},{});

tj.raiseArm();
