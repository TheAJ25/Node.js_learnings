const logEvents = require('./logEvents');

const EventEmitter = required('events');

class MyEmitter extends EventEmitter { };

//Initialize object
 const myEmitter = new MyEmitter();

 //add listner for the log events
 myEmitter.on('log', (msg) => logEvents(msg));

 setTimeout(() => {
  //emit event
  myEmitter.emit('log', 'log event emitted!');
 }, 2000);