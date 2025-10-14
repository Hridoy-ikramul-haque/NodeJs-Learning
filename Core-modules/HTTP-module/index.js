import http from 'http'; 
// console.log(http);

const green = '\x1b[32m';
const plus = '+';

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    res.end('<h1>Abir the ultimate yo yo</h1>');
    console.log(req.url);
}); 
const port=3000;
server.listen(port,()=>{
    console.log(`${green}Server running at ${port}......`);
});