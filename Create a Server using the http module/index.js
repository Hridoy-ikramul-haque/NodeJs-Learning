import http from 'http';

// create a server
const server=http.createServer((req,res)=>{
    res.writeHead(200,{
        'content-type':'text/html'
    }).end('<h1>abir bro kheltese</h1>');
});


server.listen(2000,()=>{
    console.log('started at 2000...');
})