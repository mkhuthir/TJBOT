#!/usr/bin/env node

/* Lab 1: Move the robot's arm - Wave the arm */

var TJBot = require("tjbot");

var tj = new TJBot(["servo"],{},{});

tj.wave();
