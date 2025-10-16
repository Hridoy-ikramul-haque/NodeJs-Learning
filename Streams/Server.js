import http from 'http';
import fs from 'fs';

const server=http.createServer((req,res)=>{
    // res.end('server running..');
    // console.log(req.url);

    if(req.url!='/')
    {
        res.end();
    }

    //downloading big file in a bad way
    const file=fs.readFileSync('sample.txt');
    return res.end(file);


    //downloading big file in a good way (using streams)
    
});

const port=2000;
server.listen(port,()=>console.log(`Listening on port ${port}........`));
