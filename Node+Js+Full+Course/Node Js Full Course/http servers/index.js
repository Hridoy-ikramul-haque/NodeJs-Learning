import http from 'http';

// create a server
const server = http.createServer((req, res) => {

    console.log("Request Method: ",req.method)
    // set headers
    res.writeHead(200, {'content-type': 'text/plain'});

    // handle requests based on request method
    if(req.method === "GET") {
        res.end("You made a get request")
    } else if(req.method === "POST"){
        res.end("You made a post request")
    } else if(req.method === "PUT"){
        res.end("You made a put request")
    } else{
        // res.writeHead(404, {'content-type': 'text/plain'});
        res.end("404 - Not Found the request method")
    }
})

// define port
const port = 3000;

// start server
server.listen(port, () => {
    console.log(`server is running at port on: ${port}`);
})