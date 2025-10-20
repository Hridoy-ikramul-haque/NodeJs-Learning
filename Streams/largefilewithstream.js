import fs from 'fs'; 

//Load data at a time
fs.readFile('Files/largeFiles.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data.length);
    console.log(data);
});

//Load data by chunk
const readstream=fs.createReadStream('Files/largeFiles.txt',{
    encoding:'utf-8',
    highWaterMark:1024

});

readstream.on('data',(chuck)=>{
    console.log(`${chuck.length} bytes`);
    console.log(chuck);
});

readstream.on('end',()=>console.log('no more data'));

