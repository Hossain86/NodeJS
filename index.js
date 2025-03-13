
const debug = require('debug')('app:startup');
const config = require('config');
const morgan = require('morgan');
const Joi = require('joi');
const helmet = require('helmet');
const logger = require("./middleware/logger");
const courses = require('./routes/courses'); 
const home = require('./routes/home');
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(helmet());
app.use('/api/courses',courses);
app.use('/',home);
app.use(morgan('tiny'));

//Configuration
console.log("Application name: " + config.get('name'));
console.log("Mail server: " + config.get('mail.host'));
console.log("Mail Password: " + config.get('mail.password'));

if(app.get('env') === 'development'){
  app.use(morgan('dev')); // logging in development mode
  console.log('Morgan Enabled...');
}


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
