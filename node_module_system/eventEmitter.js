/*
EventEmitter

is a class in Node.js that is part of the events module. It provides a way to handle asynchronous events. 
Instances of the EventEmitter class can emit named events that cause functions (listeners) to be called. Here's a brief overview of how it works:

Creating an EventEmitter instance: You create an instance of EventEmitter to start using it.
Registering event listeners: You can register functions to listen for specific events using the on or addListener methods.
Emitting events: You can emit events using the emit method, which will call all the registered listeners for that event.
 */

// Step 1: Import the 'events' module (which contains EventEmitter)
const EventEmitter = require('events');

// Step 2: Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Step 3: Define an event listener for a custom event ('greet')
myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}! Welcome to Node.js 🚀`);
});

// Step 4: Define another event listener for the same event
myEmitter.on('greet', (name) => {
    console.log(`How are you doing, ${name}? 😊`);
});

// Step 5: Emit the event 'greet' with an argument (name)
myEmitter.emit('greet', 'Luffy');

// Step 6: Emit the event again with another name
myEmitter.emit('greet', 'Zoro');

/* 
   Expected Output:
   Hello, Luffy! Welcome to Node.js 🚀
   How are you doing, Luffy? 😊
   Hello, Zoro! Welcome to Node.js 🚀
   How are you doing, Zoro? 😊
*/
/*
More EventEmitter Features:
once(event, listener) - Listens to an event only once.
removeListener(event, listener) - Removes a specific listener.
removeAllListeners(event) - Removes all listeners for an event. */

// Event that fires only once
myEmitter.once('bye', (name) => {
  console.log(`Goodbye, ${name}! See you soon! 👋`);
});

// Emitting the 'bye' event twice
myEmitter.emit('bye', 'Sanji');
myEmitter.emit('bye', 'Nami');

/*
 Expected Output:
 Goodbye, Sanji! See you soon! 👋
 (The second emit does nothing)
*/
