import EventEmitter from 'node:events';

// create server

function createServer() {
    const eventEmitter = new EventEmitter();

    // connect user to server
    function connect(user) {
        console.log(`${user} is connecting....!`)
        eventEmitter.emit('userConnected', user)
    }

    // disconnect user from server
    function disconnect(user) {
        console.log(`${user} is disconnecting....!`)
        eventEmitter.emit('userDisConnected', user)
    }

    return {
        connect,
        disconnect,
        on: eventEmitter.on.bind(eventEmitter),
        emit: eventEmitter.emit.bind(eventEmitter)
    }
}



// create server instance

const chatServer = createServer();

// registering listeners
chatServer.on("userConnected", (user) =>{
    console.log(`Welcome, ${user}!`)
})

chatServer.on("userDisConnected", (user) => {
    console.log(`Goodbye, ${user}!`)
})


// simulate events
chatServer.connect("Mamun")
chatServer.disconnect("Mamun")

// Mamun is connecting....!
// Welcome, Mamun!