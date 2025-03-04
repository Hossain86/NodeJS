//npm install mammoth
// Import the built-in 'fs' (file system) module
const fs = require('fs');

// Import the 'mammoth' library for parsing DOCX files
const mammoth = require('mammoth');

// Specify the path to the DOCX file
const filePath = '../Introduction to Node Note.docx';

// Read the DOCX file as a buffer
fs.readFile(filePath, (err, data) => {
    // Handle any errors that occur while reading the file
    if (err) throw err;

    // Parse the DOCX data to extract raw text
    mammoth.extractRawText({ buffer: data })
        .then(result => {
            // Log the text content of the DOCX to the console
            console.log(result.value);
        })
        .catch(error => {
            // Handle any errors that occur while parsing the DOCX
            console.error("Error reading file", error);
        });
});
