#!/bin/sh

# usage: stt "apikey":"xxxxx"
# it will convert speech of the selected file into text

curl -X POST -u $1 --header "Content-Type: audio/flac" --data-binary @speech/audio-file.flac "https://gateway-lon.watsonplatform.net/speech-to-text/api/v1/recognize?timestamps=true&max_alternatives=3"

