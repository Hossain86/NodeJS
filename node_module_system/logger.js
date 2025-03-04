const EventEmitter=require('events');

var url= 'http://mylogger.io/log';

class Logger extends EventEmitter {
  log(message){
  // Send an HTTP request
  console.log(message);

  this.emit('messageLogged', {id:1, url: "http://"}); //emit means making a noise, produce - signalling that an event has happened
}
}


module.exports =log;//we can change exports variables name here