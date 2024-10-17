const http = require("node:http");
const fs = require("fs");


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://acc:acc02106@cluster0.zcosf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const localURI = "mongodb://localhost:27017";

const client = new MongoClient(localURI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    await client.connect();
 
    const database = client.db("acc");
    const postCollection = database.collection('posts');
    
   
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
        else if(pathName==="create-post" && method==="POST"){
            let body = "";
            req.on("data", (buffer) => {
                body += buffer.toString();
            });

            res.on("end", async () => {
                const postData = JSON.parse(body);
                const result = await postCollection.insertOne(postData);
                res.setHeader("Content-type","application/json");
                res.statusCode=200;
                res.end(JSON.stringify({ message: "post created succesfully !", data: result}));
            });
        }
        else {
            res.end("Not Found");
        }
     
    })
    
    server.listen(5000, '127.0.0.1', () => {
        console.log("port 5000 is listening");
    })
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);


