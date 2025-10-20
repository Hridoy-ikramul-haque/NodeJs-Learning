import fs from 'fs'; 

const readstream= fs.createReadStream('Files/largeFiles.txt');
const writestream= fs.createWriteStream('Files/largeFiles_copy.txt');

readstream.pipe(writestream);

readstream.on('end',()=>{
    console.log('done');
})