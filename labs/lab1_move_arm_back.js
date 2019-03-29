#!/usr/bin/env node

/* Lab 1: Move the robot's arm - Move the arm back 

TJBot has a servo connected to the left arm that can be controlled to signal the user about various conditions using movement.
You can make the arm move in several ways:
Lower the arm
Raise the arm
Move the back
Wave the arm up and down

*/

import { question } from 'readline-sync';
import TJBot from 'tjbot';

var tj = new TJBot(["servo"],{},{});

tj.armBack();

// I have added the following code to ensure that servo is moved before exiting the script.
// Without this code the script will exit before servo is moved.
var answer = question('Is TJBot\'s arm in the BACKWARD position? Y/N > ');
    if (answer.toLowerCase() != 'y') {
        throw new Error('please check servo wiring');
    }
