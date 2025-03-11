//postRequest.js
// Import the Joi module for data validation.
const Joi = require('joi');
// Import the 'express' module.
const express = require('express');
// Create an instance of an Express application.
const app = express();

// Use the express.json() middleware to parse JSON bodies.
app.use(express.json()); 

// Define an array of course objects.
const courses = [
  {id: 1, name: 'course1'},
  {id: 2, name: 'course2'},
  {id: 3, name: 'course3'}
];

// Define a route for '/api/courses' that sends the list of courses as the response.
app.get('/api/courses', (req, res) => {
  res.send(courses);
});

// Define a route for POST requests to '/api/courses' to add a new course.
app.post('/api/courses', (req, res) => {
  // Define a schema for validating the request body.
  const schema = {
    name: Joi.string().min(3).required()
  };

  // Validate the request body against the schema.
  const result = Joi.validate(req.body, schema);
  // If validation fails, send a 400 status and the error message.
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  // Check if the name is not provided or is less than 3 characters long.
  if (!req.body.name || req.body.name.length < 3) {
    return res.status(400).send('Name is required and should be at least 3 characters long.');
  }

  // Create a new course object with an id and name from the request body.
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  // Add the new course to the courses array.
  courses.push(course);
  // Send the new course as the response.
  res.send(course);
});

// Define the port to listen on, using the environment variable PORT or defaulting to 3000.
const port = process.env.PORT || 3000;
// Start the server and listen on the defined port, logging a message to the console.
app.listen(port, () => console.log(`Listening on port ${port}...`));

/*
This code sets up a basic Express server with the following routes:
- GET '/api/courses' which responds with a list of courses.
- POST '/api/courses' which allows adding a new course to the list. It validates the request body to ensure the 'name' field is provided and is at least 3 characters long.
The server listens on a port defined by the environment variable PORT or defaults to port 3000.
*/