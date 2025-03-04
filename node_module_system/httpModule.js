// Import the 'http' module to create an HTTP server.
const http = require('http');

// Create an HTTP server that listens for requests and sends responses.
const server = http.createServer((req, res) => {
  // Check if the request URL is the root URL ('/').
  if (req.url === '/') {
    // Write 'Hello World' to the response.
    res.write('Hello World');
    // End the response.
    res.end();
  }

  // Check if the request URL is '/api/courses'.
  if (req.url === '/api/courses') {
    // Write a JSON stringified array of numbers to the response.
    res.write(JSON.stringify([1, 2, 3]));
    // End the response.
    res.end();
  }
});

// Uncomment the following lines to log a message when a new connection is made.
// server.on('connection', (socket) => {
//   console.log('New connection...');
// });

// Make the server listen on port 3000.
server.listen(3000);

// Log a message to the console indicating that the server is listening on port 3000.
console.log('Listening on port 3000...');