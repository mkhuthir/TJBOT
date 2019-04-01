#!/bin/sh

# Classify with the Food model

curl -u "apikey:{$1}" /
    -F "classifier_ids=food" /
    "https://gateway.watsonplatform.net/visual-recognition/api/v3/classify/
    ?url=https://watson-developer-cloud.github.io/doc-tutorial-downloads/visual-recognition/fruitbowl.jpg/
    &version=2018-03-19"
