
const express = require('express');
const router = express.Router();

const courses = [
  {id: 1, name: 'course1'},
  {id: 2, name: 'course2'},
  {id: 3, name: 'course3'}
];

router.get('/', (req, res) => {
  res.send(courses);
});
// Define a route for POST requests to '' to add a new course.
router.post('/', (req, res) => {
  const result = validateCourse(req.body);
  const { error } = validateCourse(req.body);
  // If validation fails, send a 400 status and the error message.
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  if (!req.body.name || req.body.name.length < 3) {
    return res.status(400).send('Name is required and should be at least 3 characters long.');
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});
router.put('/:id', (req, res) => {
  // Find the course with the given ID.
  const course = courses.find(c => c.id === parseInt(req.params.id));
  // If the course is not found, send a 404 status and an error message.
  if (!course) {
    res.status(404).send('The course with the given ID was not found.');
    return;
  }
  const result = validateCourse(req.body);
  const { error } = validateCourse(req.body);
  // If validation fails, send a 400 status and the error message.
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  // Update the course with the new name.
  course.name = req.body.name;
  // Send the updated course as the response.
  res.send(course);
});
router.delete('/:id', (req, res)=>{
  const result = validateCourse(req.body);
  const { error } = validateCourse(req.body);
  // If validation fails, send a 400 status and the error message.
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  const course = courses.find(c => c.id === parseInt(req.params.id))[0];
  if(!course) return res.status(404). send("The course with the given ID not found");
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(course);
})
function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required()
  };
  return Joi.validate(course, schema);
}

module.exports = router;