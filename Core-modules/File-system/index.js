import { readFile } from 'node:fs';
import { writeFile } from 'node:fs';

//read a txt file
readFile('files/example.txt','utf8', (err,data)=>{
    if(err) throw err;
    console.log(data);
})

console.log('After file read');

//write a txt file

writeFile('files/example2.txt','Abir the best buy leader;','utf-8',(err)=>{
    if(err) throw err;
    console.log('success');
})