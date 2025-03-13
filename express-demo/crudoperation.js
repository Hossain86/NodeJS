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
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const course = { id: courses.length + 1, name: req.body.name };
  courses.push(course);
  res.send(course);
});
app.put('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('Course not found.');
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  course.name = req.body.name;
  res.send(course);
});
app.delete('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('Course not found.');
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(course);
});
function validateCourse(course) {
  const schema = Joi.object({ name: Joi.string().min(3).required() });
  return schema.validate(course);
}
const port = process.env.PORT || 3000;
// Start the server and listen on the defined port, logging a message to the console.
app.listen(port, () => console.log(`Listening on port ${port}...`));
