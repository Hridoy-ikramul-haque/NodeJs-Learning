import http from 'http';

const server= http.createServer((req,res)=>{
    console.log(req.method);
    res.writeHead(200,{'content-type':'text/plain'})
    // .end("abir bro thivuj prem");

    if(req.method==='GET')
    {
        res.end('Get request');
    }
    else if(req.method==='POST')
    {
        res.end('Post request')
    }
    else if(req.method==='PUT')
    {
        res.end('Put request');
    }
    else{
        res.end('404 error');
    }
});

server.listen(3000,()=>{
    console.log(`server running at 3000....`);
});

