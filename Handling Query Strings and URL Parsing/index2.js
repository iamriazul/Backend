const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedURL = url.parse(req.url, true);
    const query = parsedURL.query;

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.write(`Name : ${query.Name}\n`);
    res.write(`Age : ${query.Age}`);

    res.end();
});

server.listen(3500, () => {
    console.log('Server running on port 1500');
});