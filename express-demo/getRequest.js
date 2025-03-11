// Import the 'express' module.
const express = require('express');
// Create an instance of an Express application.
const app = express();

// Define an array of course objects.
const courses = [
  {id: 1, name: 'course1'},
  {id: 2, name: 'course2'},
  {id: 3, name: 'course3'}
];

// Define a route for the root URL ('/') that sends 'Hello World' as the response.
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Define a route for '/api/courses' that sends the list of courses as the response.
app.get('/api/courses', (req, res) => {
  res.send(courses);
});

// Define a route for '/api/courses/:id' that sends the course with the given ID as the response.
app.get('/api/courses/:id', (req, res) => {
  // Find the course with the given ID.
  const course = courses.find(c => c.id === parseInt(req.params.id));
  // If the course is not found, send a 404 status and an error message.
  if (!course) res.status(404).send('The course with the given ID was not found.');
  // Send the course as the response.
  res.send(course);
});

// Define a route for '/api/posts/:year/:month' that sends the request parameters as the response.
app.get('/api/posts/:year/:month', (req, res) => {
  res.send(req.params);
});

// Define the port to listen on, using the environment variable PORT or defaulting to 3000.
const port = process.env.PORT || 3000;
// Start the server and listen on the defined port, logging a message to the console.
app.listen(port, () => console.log(`Listening on port ${port}...`));

/*
This code sets up a basic Express server with the following routes:
- GET '/' which responds with 'Hello World'.
- GET '/api/courses' which responds with a list of courses.
- GET '/api/courses/:id' which responds with a specific course based on the provided ID.
- GET '/api/posts/:year/:month' which responds with the request parameters (year and month).
The server listens on a port defined by the environment variable PORT or defaults to port 3000.
*/