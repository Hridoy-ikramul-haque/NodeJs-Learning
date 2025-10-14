import http from 'http'

const server = http.createServer((req, res) => {

    const {url} = req
    console.log(url)
    // response headers
    res.writeHead(200, {'content-type': 'text/plain'})

    // basic routing
    if (url === "/"){
        res.end("Welcome to Home Page")
    } else if (url === "/about"){
        res.end("This is the About Page")
    } else if (url === "/contact"){
        res.end("This is the Contact Page")
    } else {
        res.end("404 - Not Found")
    }
})

const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`Server listening on ${port} port`)
})