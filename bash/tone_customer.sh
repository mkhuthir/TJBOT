#!/bin/sh

# Synthesize text in Spanish

if test "$#" -ne 1; then
    echo "Usage: ./"+$0+"\"yourkey\""
else
    curl -X POST -u "apikey:"+$1 \
      --header "Content-Type: application/json" \
      --data-binary @./json/tone_chat.json \
      "https://gateway-lon.watsonplatform.net/tone-analyzer/api/v3/tone_chat?version=2017-09-21"
fi
