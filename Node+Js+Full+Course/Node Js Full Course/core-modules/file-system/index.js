import { readFile } from 'node:fs';
import { writeFile } from 'node:fs';

readFile('files/example.txt','utf-8' ,(err, data) => {
    if(err) throw err;
    console.log(data)
})


// write text into file
const content = 'Hello, I am Mark!'
writeFile("files/message.txt", content, 'utf-8', (err) => {
    if(err) throw err;

    console.log("File created done!")
})