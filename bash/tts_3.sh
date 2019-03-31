#!/bin/sh

# Synthesize text in Spanish

if test "$#" -ne 1; then
    echo "Usage: ./"+$0+"\"yourkey\""
else

    curl -X GET -u "apikey:"+$1 \
      --output hola_mundo.wav \
      "https://gateway-lon.watsonplatform.net/text-to-speech/api/v1/synthesize?accept=audio%2Fwav&text=hola%20mundo&voice=es-ES_EnriqueVoice"
fi
