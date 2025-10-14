import EventEmitter from 'node:events';

const eventEmitter = new EventEmitter()


//define
eventEmitter.on('start', (num1, num2) => {
    const result = num1 * num2;
    console.log(`The result is: ${result}`)
})

// call
eventEmitter.emit("start", 10, 5)