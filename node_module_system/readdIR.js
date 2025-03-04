// Import the 'fs' module to interact with the file system.
const fs = require('fs');

// Synchronously read the contents of the current directory.
const files = fs.readdirSync('./');

// Log the list of files read synchronously to the console.
console.log('Sync ', files);

// Asynchronously read the contents of the current directory.
fs.readdir('./', function(err, files) {
  // If an error occurs, log the error to the console.
  if (err) console.log('Error', err);
  // Otherwise, log the list of files read asynchronously to the console.
  else console.log('Result', files);
});