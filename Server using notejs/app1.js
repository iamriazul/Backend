const http = require('http');

const server = http.createServer((req, res) => {
    let url = req.url;
    if (url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>This is home page</h2>");
        res.end();
    } 
    else if (url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>This is about page</h2>");
        res.end();
    }
    else if (url === "/service") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>This is service page</h2>");
        res.end();
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h2>Page not found</h2>");
        res.end();
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
