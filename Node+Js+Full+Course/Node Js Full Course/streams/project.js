import fs from 'fs';

// create readable and writable streams

const source = fs.createReadStream('files/large-file.txt')
const destination = fs.createWriteStream('files/copy-large-file.txt')

let totalBytes = 0;

source.on('data', (chunk) => {
    totalBytes += chunk.length;
    console.log(`Copied ${totalBytes} bytes so far.`)
})

// pipe the readable stream into writeStream
source.pipe(destination)

source.on('end' , () => {
    console.log('File copied successfully')
})