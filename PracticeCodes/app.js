const EventEmitter=require('events');
const emitter=new EventEmitter();

// Register a listener
emitter.once('messageLogged', (arg)=>{
  console.log('Listener called', arg);
});

//Raise an event
emitter.emit('messageLogged', {id:1, url: "http://"}); //emit means making a noise, produce - signalling that an event has happened