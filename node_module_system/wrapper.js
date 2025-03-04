(function(exports, require, module, __filename, __dirname) {
  // Import the Logger class
  const Logger = require('./logger');
  const logger = new Logger();
  
  // Log a message to the console
  logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
  });
  
  logger.log('message');
});