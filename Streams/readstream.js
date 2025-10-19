import fs from 'fs'; 

// Create a readable stream from file 
const readableStream=fs.createReadStream('Files/largeFile.txt',{
    encoding:'utf-8',
    highWaterMark:1024
});

// Events for readable streams
readableStream.on('data',(chunk)=>{
    console.log(`Received ${chunk.length} bytes of data`);
    console.log(chunk);
});

readableStream.on('end',()=>{
    console.log('Files Reading finished');
});

readableStream.on('error',(err)=>{
    console.log('error reading from stream:',err);
})