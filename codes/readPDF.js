// Import the built-in 'fs' (file system) module
const fs = require('fs');

// Import the 'pdf-parse' library for parsing PDF files
const pdf = require('pdf-parse');

// Specify the path to the PDF file
const filePath= '../Introduction to Node Note-01.pdf';

// Read the PDF file as a buffer
fs.readFile(filePath, (err, data) => {
    // Handle any errors that occur while reading the file
    if(err) throw err;

    // Parse the PDF data
    pdf(data).then(pdfData => {
        // Log the text content of the PDF to the console
        console.log(pdfData.text);
    }).catch(error => {
        // Handle any errors that occur while parsing the PDF
        console.error("Error reading file", error);
    });
});
