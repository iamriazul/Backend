const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Node.js server is running");
    res.end();
});

server.listen(5000, () => {
    console.log("Server running on port 5000");
});
