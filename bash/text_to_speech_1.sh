#!/bin/sh

# Synthesize text in US English
# Synthesize the string "hello world" and produce a WAV file that is named hello_world.wav
# Request uses the default US English voice, en-US_MichaelVoice

if test "$#" -ne 1; then
    echo "Usage: ./stt.sh \"apikey\":\"xxxxxxx\""
else
	curl -X POST -u $1 \
		--header "Content-Type: application/json" \
		--header "Accept: audio/wav" \
		--data "{\"text\":\"hello world\"}" \
		--output hello_world.wav \
		"https://gateway-lon.watsonplatform.net/text-to-speech/api/v1/synthesize"
fi
