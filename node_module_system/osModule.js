// Import the 'os' module, which provides operating system-related utility methods and properties.
const os = require('os');

// Get the total amount of system memory in bytes.
var totalMemory = os.totalmem();

// Get the amount of free system memory in bytes.
var freeMemory = os.freemem();

// Log the total memory in megabytes to the console.
console.log(`Total Memory: ${totalMemory / 1024 / 1024} MB`);

// Log the free memory in megabytes to the console.
console.log(`Free Memory: ${freeMemory / 1024 / 1024} MB`);