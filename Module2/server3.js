const http = require("node:http");
const fs = require("fs");


const server = http.createServer((req, res) => {

    const parseURL = new URL(req.url, `http://${req.headers.host}`);
    const pathName = parseURL.pathname;

    if(pathName==='/home' && req.method==='GET'){

        fs.readFile(__dirname+"/index.html", "utf-8", (err, data) => {
            if(err){
              throw new Error('Error! Reading File!');
            }
      
            res.writeHead(200, {
                'Content-type':'text/html'
            });

            res.end(data);
        });
    }
    else if(pathName==='/post' && req.method==='GET'){

        fs.readFile(__dirname+"/posts.json", "utf-8", (err, data) => {
            if(err){
              throw new Error('Error! Reading File!');
            }
      
            res.writeHead(200, {
                'Content-type':'Application/json'
            });

            const query = parseURL.searchParams;
            const postId = query.get("id");

            const expectedData = JSON.parse(data).find((post) => post.id == postId);

            res.end(JSON.stringify(expectedData));
        });
    }
    else {
        res.end("Not Found");
    }
 
})

server.listen(5000, '127.0.0.1', () => {
    console.log("port 5000 is listening");
})