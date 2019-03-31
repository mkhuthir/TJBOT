#!/bin/sh

# Script will translate from English (en) to Spanish (es)

if test "$#" -ne 1; then
    echo "Usage: ./stt.sh \"apikey\":\"xxxxxxx\""
else
	curl -X POST -u $1 \
		--header "Content-Type: text/plain" \
		--data "Language Translator translates text from one language to another" \
		"https://gateway-lon.watsonplatform.net/language-translator/api/v3/identify?version=2018-05-01"
fi
