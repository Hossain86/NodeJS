// Import the built-in 'fs' (file system) module
const fs = require('fs');

// Specify the path to the text file
const filePath = 'example.txt';

// Read the text file with UTF-8 encoding
fs.readFile(filePath, 'utf8', (err, data) => {
    // Handle any errors that occur while reading the file
    if (err) throw err;

    // Log the text content of the file to the console
    console.log(data);
});
