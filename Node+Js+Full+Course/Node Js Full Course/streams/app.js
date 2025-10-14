import fs from 'fs';

// traditionally read data from a file

fs.readFile('files/large-file.txt', 'utf-8',(err, data) => {
    if (err) throw err;
    console.log(data.length + " bytes read")
})

// streming to a file

const readableStream = fs.createReadStream('files/large-file.txt', 
    {encoding: 'utf-8',  
    highWaterMark: 1024}
)

readableStream.on('data', (chunk) => {
    console.log(`Processing: ${chunk.length} bytes`)
})