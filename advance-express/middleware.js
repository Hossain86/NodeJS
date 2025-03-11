/*
  Middleware in Express.js is a function that is executed between the request and the response. 
  It has access to the request object (req), the response object (res), and the next middleware function
  in the application's request-response cycle. They sit between the incoming request and the final response and allow you to perform operations like request processing, authentication, data validation, or even error handling.
Middleware in Express.js refers to functions that execute during the lifecycle of an HTTP request. They sit between the incoming request and the final response and allow you to perform operations like request processing, authentication, data validation, or even error handling.
### **Types of Middleware in Express.js**
1. **Application-Level Middleware**: Defined at the app level and commonly used for logging, authentication, or parsing request bodies.
   const express = require('express');
   const app = express();
   // Application-level middleware
   app.use((req, res, next) => {
       console.log(`${req.method} request made to ${req.url}`);
       next(); // Pass control to the next middleware
   });
   app.get('/', (req, res) => {
       res.send('Hello, World!');
   });
   app.listen(3000, () => console.log('Server running on port 3000'));
   ```
2. **Router-Level Middleware**: Works on specific routes. These are defined using `Router()`.
   const router = express.Router();
   // Router-level middleware
   router.use((req, res, next) => {
       console.log('Middleware for this router');
       next();
   });
   router.get('/about', (req, res) => {
       res.send('About Page');
   });
   app.use(router); // Attach router to the app
   ```
3. **Built-in Middleware**: Predefined middleware functions provided by Express.js.
   - `express.json()`: Parses incoming JSON requests.
   - `express.urlencoded()`: Parses URL-encoded payloads.
   app.use(express.json());
   app.post('/data', (req, res) => {
       res.send(req.body); // Access parsed JSON data
   });
Middleware for Authentication
Let's create middleware to verify if a user is authenticated before accessing certain routes.
javascript
const express = require('express');
const app = express();
// Sample middleware for authentication
function authenticateUser(req, res, next) {
    const token = req.headers['authorization']; // Check for a token in the request headers
    if (token === 'my-secret-token') {
        console.log('User authenticated successfully');
        next(); // Pass control to the next middleware or route handler
    } else {
        res.status(401).send('Unauthorized: Invalid token');
    }
}
// Public route (no authentication needed)
app.get('/public', (req, res) => {
    res.send('This is a public route.');
});
// Protected route (requires authentication)
app.get('/protected', authenticateUser, (req, res) => {
    res.send('This is a protected route. You are authenticated!');
});
// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
How It Works:
Middleware Function (authenticateUser): Checks the authorization header for a token.
If the token is valid (e.g., 'my-secret-token'), it calls next() to proceed to the next middleware or route handler.
If the token is invalid or missing, it sends a 401 Unauthorized response to the client.
Routes:
/public: Can be accessed by anyone without authentication.
/protected: Uses the middleware to ensure only authenticated users can access it.
Testing It Out:
Send a request to /public: You'll receive "This is a public route."
Send a request to /protected:
If you include the header Authorization: my-secret-token, you'll get "This is a protected route. You are authenticated!"
If you omit the header or use an invalid token, you'll get "Unauthorized: Invalid token."
  In the provided code snippet, the middleware function is defined using the `app.use()` method. 
  The `express.json()` middleware is used to parse incoming requests with JSON payloads. This middleware is added to the middleware stack, and it will be executed for every incoming request.
  The middleware function in the `app.get('/', (req, res) => {...})` route does not have access to the 
  next middleware function. It simply sends a response with the text "Hello World" when a GET request is
  made to the root ("/") route.
  The middleware function in the `app.get('/api/courses', (req, res) => {...})` route also does not have
  access to the next middleware function. It sends a response with the JSON representation of the 
  `courses` array when a GET request is made to the "/api/courses" route.
  In summary, middleware in Express.js is a powerful feature that allows developers to add custom 
  functionality to the request-response cycle. It can be used for various purposes, such as 
  authentication, logging, error handling, and more. In the provided code snippet, the `express.json()` 
  middleware is used to parse incoming JSON payloads.
*/
const express = require('express' );
const logger = require('./logger');
const app = express();
app.use(express.json());//returns a middleware function set req.body 
app.use(express.urlencoded());

app.use(logger);

app.use(function(req, res, next){
  console.log('Authenticating...');
  next(); // pass control to the next middleware or
});

const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' },
]
app.get('/', (req, res) => {
  res. send('Hello World');
});
app.get('/api/courses', (req, res) => {
  res.send(courses);
});
