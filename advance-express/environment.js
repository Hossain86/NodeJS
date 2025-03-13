const config = require('config');
const helmet = require('helmet'); 
const morgan = require('morgan');
const express = require('express' );
const app = express();

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(`app: ${app.get('env')}`);
console.log(`Mail server: ${config.get('mail.host')}`);
console.log(`Mail password: ${config.get('mail.password')}`); 

app.use(express.json());//returns a middleware function set req.body 
app.use(express.urlencoded({extended:true}));
app.use(express.static('public')); 
app.use(helmet());
app.use(morgan('tiny'));

//Configuration
console.log("Application name: " + config.get('name'));
console.log("Mail server: " + config.get('mail.host'));
console.log("Mail Password: " + config.get('mail.password'));

if(app.get('env') === 'development'){
  app.use(morgan('dev')); // logging in development mode
  console.log('Morgan Enabled...');
}

 
app.use(function(req, res, next){ 
  console.log('Authenticating...');
  next(); // pass control to the next middleware or
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`You can do It Mikat\nListening on port ${port}...`));
/*/Web Code/NodeJs/
│-- node_modules/
│-- config/
│   │-- default.json{
            "name": "My Express Application"
          }
│   │-- development.json  {
              "name": "My Express Application- Development",
              "mail":{
                "host": "dev-mail-server"
              }
            }
│   │-- custom-environment-variables.json {
              "mail":{
                "password":"APP_PASSWORD"
              }
            }
│-- index.js
│-- package.json
 */