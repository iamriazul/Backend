const http = require('http');
const fs =  require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
  if (req.url==="/image"){
    let filePath = path.join(__dirname,'new-image-quer.png')
    fs.readFile(filePath,(err,data)=>{
     if(err){
        res.writeHead(404)
        res.end("image not found")
     } else{
        res.writeHead(200,{'Content-Type': 'image/jpeg'})
        res.end(data);
     }
    })
  }
});

server.listen(7000, () => {
    console.log("Server running on port 7000");
});