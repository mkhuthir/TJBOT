#!/usr/bin/env node

/* Lab 2: Shine and pulse the LED light - Pulse LED */

var TJBot = require("tjbot");

var tj = new TJBot(["led"],{},{});

tj.pulse("red", 1.0);
