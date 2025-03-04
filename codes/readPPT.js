//npm install pptx2json
// Import the built-in 'fs' (file system) module
const fs = require('fs');

// Import the 'pptx2json' library for parsing PPTX files
const pptx2json = require('pptx2json');

// Specify the path to the PPTX file
const filePath = 'example.pptx';

// Parse the PPTX data to extract content
pptx2json(filePath).then(result => {
    // Log the parsed data from the PPTX file to the console
    console.log(result);
}).catch(error => {
    // Handle any errors that occur while parsing the PPTX
    console.error("Error reading file", error);
});
