/*  --- Updated by Muthanna A. Attyah Alwahash ---
    --- April 2019 ---

* User-specific configuration
* IMPORTANT NOTES:
*  Please ensure you do not interchange your username and password.
*  Your username is the longer value: 36 digits, including hyphens
*  Your password is the smaller value: 12 characters
*/

// Set this to false if your TJBot does not have a camera.
exports.hasCamera = true;

// set up TJBot's configuration
exports.tjConfig = {
    log: { 
        level: 'verbose'
    },

    robot: {    
        name:   'Hamza bot', // Changing the robot name will change the attention word
        gender: 'male'
    },
  
    speak: { 
        language: "en-US"
    },

    see: {
        confidenceThreshold: {
          object: 0.1,   // only list image tags with confidence > 0.5
          text: 0.1     // only list text tags with confidence > 0.5
        },

        camera: {
          height: 720,
          width: 960,
          verticalFlip: false, // flips the image vertically, may need to set to 'true' if the camera is installed upside-down
          horizontalFlip: false // flips the image horizontally, should not need to be overridden
        }
}
};

// ---  Create the credentials object for export  ---
exports.credentials = {};

//  --- Watson Speech to Text (STT) ---
// https://www.ibm.com/watson/services/speech-to-text/
exports.credentials.speech_to_text = {
    // username/password authentication -- if your service uses this method,
    // uncomment these two lines and comment the 'apikey' line below
    // username: '',
    // password: '',
    // IAM authentication -- fill in your API key below
    apikey: 'FILL IN YOUR API KEY HERE',
    // service URL -- change this if the URL is different in your authentication credentials
    url: 'https://gateway-lon.watsonplatform.net/speech-to-text/api'
};

//  --- Watson Text to Speech (TTS) ---
// https://www.ibm.com/watson/services/text-to-speech/
exports.credentials.text_to_speech = {
    // username/password authentication -- if your service uses this method,
    // uncomment these two lines and comment the 'apikey' line below
    // username: '',
    // password: '',
    // IAM authentication -- fill in your API key below
    apikey: 'FILL IN YOUR API KEY HERE',
    // service URL -- change this if the URL is different in your authentication credentials
    url: 'https://gateway-lon.watsonplatform.net/text-to-speech/api'
};

//  --- Watson Tone Analyzer ---
// https://www.ibm.com/watson/services/tone-analyzer/
exports.credentials.tone_analyzer = {
    // IAM authentication -- fill in your API key below
    apikey: 'FILL IN YOUR API KEY HERE',
    // service URL -- change this if the URL is different in your authentication credentials
    url: 'https://gateway-lon.watsonplatform.net/tone-analyzer/api'
};

//  --- Watson Language Translator ---
// https://www.ibm.com/watson/services/language-translator/
exports.credentials.language_translator = {
    // IAM authentication -- fill in your API key below
    apikey: 'FILL IN YOUR API KEY HERE',
    // service URL -- change this if the URL is different in your authentication credentials
    url: 'https://gateway-lon.watsonplatform.net/language-translator/api'
};

//  --- Watson Visual Recognition ---
// https://www.ibm.com/watson/services/visual-recognition/
exports.credentials.visual_recognition = {
    // username/password authentication -- if your service uses this method,
    // uncomment these two lines and comment the 'apikey' line below
    // username: '',
    // password: '',
    // IAM authentication -- fill in your API key below
    apikey: 'FILL IN YOUR API KEY HERE',
    // service URL -- change this if the URL is different in your authentication credentials
    url: 'https://gateway.watsonplatform.net/visual-recognition/api'
};

// --- Watson Assistant ---
exports.workspaceId = ''; // replace with the workspace identifier of your conversation
// https://www.ibm.com/watson/services/conversation/
exports.credentials.assistant = {
    // username/password authentication -- if your service uses this method,
    // uncomment these two lines and comment the 'apikey' line below
    // username: '',
    // password: '',
    // IAM authentication -- fill in your API key below
    apikey: 'FILL IN YOUR API KEY HERE',
    // service URL -- change this if the URL is different in your authentication credentials
    url: 'url": "https://gateway-lon.watsonplatform.net/assistant/api'
};