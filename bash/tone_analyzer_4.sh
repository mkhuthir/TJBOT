#!/bin/sh

# Using the customer-engagement endpoint
# POST /v3/tone_chat method to analyze the contents of the file tone-chat.json.

if test "$#" -ne 1; then
    echo "Usage: ./"+$0+"\"yourkey\""
else
    curl -X POST -u $1 \
        --header "Content-Type: application/json" \
        --data-binary @./json/tone-chat.json \
        "/v3/tone_chat?version=2017-09-21"
fi
