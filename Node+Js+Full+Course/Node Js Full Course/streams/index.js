import fs from 'fs';

// create a readable stream

const readableStream = fs.createReadStream("files/large-file.txt", {
    encoding: 'utf-8',
    highWaterMark: 1024
})


readableStream.on('data', (chunk) => {
    console.log(`Received chunk: ${chunk.length} bytes.`)
})

readableStream.on("end", () => {
    console.log("File reading finished!")
})