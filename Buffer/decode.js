import fs from 'fs';

fs.readFile('notes_encode64.txt',(err,data)=>{
    const encodedata=data.toString();
    const decodedata=Buffer.from(encodedata,'base64');
    console.log(decodedata.toString('utf-8'));
    fs.writeFile('file_decode.txt',decodedata.toString('utf-8'),(err)=>{
        if(err) throw err;
        console.log('file decode done');
    })
})