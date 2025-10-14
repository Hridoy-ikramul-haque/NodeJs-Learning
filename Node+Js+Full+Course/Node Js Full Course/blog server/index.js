import http from "http"

const server = http.createServer((req, res) => {

    const {url} = req;

    res.writeHead(200, {'content-type': "text/plain"})

    if(url === '/') {
        res.end("Welcome to the Blog Home page")
    } else if(url ==="/blogs") {
        res.end("Displaying all blogs here...")
    } else if (url.startsWith("/blogs/")) {
        const postId = url.split("/")[2];
        // console.log(url.split("/")[2])
        res.end(`{"id" : ${postId}, "title" : "Post Title", "body": "error suscipit maxime adipisci consequuntur recusandae\nvoluptas eligendi et est et voluptates\nquia distinctio ab amet quaerat molestiae et vitae\nadipisci impedit sequi nesciunt quis consectetur"}`)
    } else{
        res.end("404 - Not Found")
    }
})

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})