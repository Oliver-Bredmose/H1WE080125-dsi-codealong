import http from "http"

http.createServer((request, Response) => {
    Response.writeHead(200, {'Content-type': 'text/plain' })
    Response.end('Hej Webudviklere')
    console.log('Server with Hello World');
}).listen(4000, () => {
    console.log('Server is runnig on http://localhost:4000');
})