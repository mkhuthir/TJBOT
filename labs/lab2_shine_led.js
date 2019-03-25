#!/usr/bin/env node

/* Lab 2: Shine and pulse the LED light - Shine LED */

var TJBot = require("tjbot");

var tj = new TJBot(["led"],{},{});

tj.shine("red");
