#!/bin/sh

# Script will convert speech of the selected file into text


if test "$#" -ne 1; then
    	echo "Usage: ./stt_time_stamps.sh \"apikey\":\"xxxxxxx\""
else
	curl -X POST -u $1 --header "Content-Type: audio/flac" --data-binary @speech/audio-file.flac "https://gateway-lon.watsonplatform.net/speech-to-text/api/v1/recognize?timestamps=true&max_alternatives=3"
fi
