import { Duplex } from 'stream'

const duplexStream = new Duplex({
    write(chunk, encoding, callback) {
        console.log(`Writing: ${chunk.toString()}`)
        callback()
    },

    read() {
        this.push("Hello from duplex! \n")
        this.push("This is 2nd chunk. \n")
        this.push(null)
    }
})

duplexStream.on('data', (chunk) => {
    console.log(`Reading: ${chunk.toString()}`)
} )

duplexStream.write("This is a test writing....")
duplexStream.end("Writing end!");

