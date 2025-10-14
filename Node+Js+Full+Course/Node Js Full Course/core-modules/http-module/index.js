import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end("The server is running....!")
})

// star the server

server.listen(3000, () => {
    console.log("The server is listening on port 3000")
})