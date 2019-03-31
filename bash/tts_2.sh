#!/bin/sh

# Script will convert speech of the selected file into text

if test "$#" -ne 1; then
    echo "Usage: ./stt.sh \"apikey\":\"xxxxxxx\""
else
	curl -X POST -u $1 \
		--header "Content-Type: application/json" \
		--header "Accept: audio/wav" \
		--data "{\"text\":\"hello world\"}" \
		--output hello_world.ogg \
		"https://gateway-lon.watsonplatform.net/text-to-speech/api/v1/synthesize"
fi
