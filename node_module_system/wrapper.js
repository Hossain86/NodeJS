// Wrap the code in an Immediately Invoked Function Expression (IIFE) to create a local scope.
(function(exports, require, module, __filename, __dirname) {
  // Import the Logger class from the 'logger' module.
  const Logger = require('./logger');
  // Create an instance of the Logger class.
  const logger = new Logger();
  
  // Register a listener for the 'messageLogged' event.
  logger.on('messageLogged', (arg) => {
    // Log a message to the console when the 'messageLogged' event is emitted.
    console.log('Listener called', arg);
  });
  
  // Call the 'log' method of the Logger instance with the message 'message'.
  logger.log('message');
});