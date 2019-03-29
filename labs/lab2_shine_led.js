#!/usr/bin/env node

/* Lab 2: Shine and pulse the LED light - Shine LED 

   TJBot has an LED that can be controlled to signal the user about various conditions using a color-coded scheme.
*/

const TJBot = require("tjbot");

var tj = new TJBot(["led"],{},{});

tj.shine("red");
