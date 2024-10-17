const http = require("node:http");

const posts = [
    {
        "id": 1,
        "name": "cerulean",
        "year": 2000,
        "color": "#98B2D1",
        "pantone_value": "15-4020"
    },
    {
        "id": 2,
        "name": "fuchsia rose", 
        "year": 2001, 
        "color": "#C74375",
        "pantone_value": "17-2031"
    },
    {
        "id": 3, 
        "name": "true red", 
        "year": 2002, 
        "color": "#BF1932", 
        "pantone_value": "19-1664" 
    }, 
    {
        "id": 4, 
        "name": "aqua sky",
        "year": 2003,
        "color": "#7BC4C4",
        "pantone_value": "14-4811"
    },
    { 
        "id": 5,
        "year": 2004, 
        "color": "#E2583E", 
        "pantone_value": "17-1456" 
    },
    {  
        "id": 6, 
        "name": "blue turquoise", 
        "year": 2005,            
        "color": "#53B0AE",
        "pantone_value": "15-5217"
    }
];


const server = http.createServer((req, res) => {

    // console.log(req.url, req.headers);
    
    const parseUrl = new URL(req.url, `http://${req.headers.host}`);
     // console.log(parseUrl);
    const pathName = parseUrl.pathname;

    if(pathName==='/home' && req.method==='GET'){
        res.writeHead(200, {
            'Content-type':'text/html'
        });
        res.end("This is home.");
    }
    else if(pathName==='/post' && req.method==='GET'){
        const query = parseUrl.searchParams;
        const postId = query.get("id");

        const expectedData = posts.find((post) => post.id==postId);

        res.writeHead(200, {
            "Content-type" : "application/json",
        });
        res.end(JSON.stringify(expectedData));
    }
    else{
        res.end("Not found");
    }
    

})


server.listen(5000, "127.0.0.1", () => {
console.log("Server is listening on port 5000");
});
    