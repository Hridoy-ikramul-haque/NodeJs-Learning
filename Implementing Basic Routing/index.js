import http from 'http'; 

const server=http.createServer((req,res)=>{
    // console.log(typeof(req.url));
    const {url}=req;
    console.log(url);

    
    res.writeHead(200,{"content-type":"text/plain"});

    if(url=='/')
    {
        res.end('Welcome to Abir page ');
    }
    else if(url==='/abir')
    {
        res.end('abir toh geya');
    }
    else if(url==='/abirpro')
    {
        res.end('no he is no pro');
    }
    else{
        res.end('404');
    }
});

server.listen(2000);
