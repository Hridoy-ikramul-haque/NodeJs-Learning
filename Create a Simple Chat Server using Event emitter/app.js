import EventEmitter from 'node:events';

const eventEmitter = new EventEmitter();

//eventEmitter has 2  main method (on,emit)



//declare an event 
eventEmitter.on('showName',(name)=>{console.log(`My name is ${name}`);});

//emit an event
eventEmitter.emit('showName','hridoy'); 
eventEmitter.emit('showName','rafa'); 

