#!/bin/sh

aplay -D bluealsa:HCI=hci0,DEV=11:2C:33:A4:1E:5B,PROFILE=a2dp test.wav
