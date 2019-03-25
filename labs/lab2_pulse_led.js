#!/usr/bin/env node

/* Lab 2: Shine and pulse the LED light - Pulse LED 

TJBot has an LED that can be controlled to signal the user about various conditions using a color-coded scheme.

*/

var TJBot = require("tjbot");

var tj = new TJBot(["led"],{},{});

tj.pulse("red", 1.0);
