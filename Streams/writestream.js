import { error } from 'console';
import fs from 'fs'; 

//Create a writeable stream 
const writeStream= fs.createWriteStream('Files/write.txt');

writeStream.write("Abir the Lively guru\n");
writeStream.write("Abir the prem guru\n");
writeStream.write("Abir the best buy guru\n");

writeStream.end("Beshi pera dei Abir bro\n");


writeStream.on('finish',()=>{
    console.log('All data has been written to the file');
});

writeStream.on('error',()=>{
    console.log('Error writting to stream:',error);
})