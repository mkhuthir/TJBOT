#!/bin/sh

# 

if test "$#" -ne 1; then
    echo "Usage: ./"+$0+"\"yourkey\""
else
    curl -X GET -u "apikey:"+$1 \
      "https://gateway-lon.watsonplatform.net/tone-analyzer/api/v3/tone?version=2017-09-21\
      &text=Team%2C%20I%20know%20that%20times%20are%20tough%21%20Product%20sales%20have\
      %20been%20disappointing%20for%20the%20past%20three%20quarters.%20We%20have%20a%20\
      competitive%20product%2C%20but%20we%20need%20to%20do%20a%20better%20job%20of%20\
      selling%20it%21"

fi
