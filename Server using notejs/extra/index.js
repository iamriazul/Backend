const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let url = req.url;
    if (url === "/"){
        fs.readFile('index.html' , (err,data) =>{
            if(err){
                res.writeHead(500, { 'Content-Type': 'text/plain'})
                res.end("Error loading html file")
            }else{
              res.writeHead(500, { 'Content-Type': 'text/html'}) 
              res.end(data);
            }
        });
    } 
});

server.listen(1000, () => {
    console.log("Server running on port 2500");
});
