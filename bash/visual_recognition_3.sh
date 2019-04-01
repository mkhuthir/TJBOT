#!/bin/sh

curl -u "apikey:{apikey}" /
  "https://gateway.watsonplatform.net/visual-recognition/api/v3/detect_faces/
  ?url=https://watson-developer-cloud.github.io/doc-tutorial-downloads/visual-recognition/Ginni_Rometty_at_the_Fortune_MPW_Summit_in_2011.jpg/
  &version=2018-03-19"
