import http, {IncomingMessage, ServerResponse} from 'http'

const server = http.createServer(function (req: IncomingMessage, res: ServerResponse) {
    res.writeHead(200);
    res.end('Hello, World!');
});

server.listen(8090, () => {
    console.log('Server is listening on port 8090')
});
