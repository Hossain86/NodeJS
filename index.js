
const debug = require('debug')('app:startup');
const config = require('config');
const morgan = require('morgan');
const Joi = require('joi');
const helmets = require('helmet');
const courses = require('./courses'); 
const express = require('express');
const app = express();

app.use(express.json());


app.get('/', (req, res) => {
  res.render('index', {title: "My Express App", message: "Hello!"});
});

const port = process.env.PORT || 3000;
// Start the server and listen on the defined port, logging a message to the console.
app.listen(port, () => console.log(`Listening on port ${port}...`));
