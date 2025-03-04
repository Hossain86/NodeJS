const EventEmitter=require('events');
//Raise an event
emitter.emit('messageLogged', {id:1, url: "http://"}); //emit means making a noise, produce - signalling that an event has happened
const Logger= require('./logger');
const logger= new Logger();

// Register a listener
logger.on('messageLogged', (arg)=>{
  console.log('Listener called', arg);
});

logger.log('message');