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

const html_file =  `<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content=
"width=device-width, initial-scale=1.0">
<title>SPA app</title>
<style>
    body {
font-family:
'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
margin: 0;
padding: 0;
background-color: #f0f0f0;
}

#app {
display: flex;
flex-direction: column;
min-height: 100vh;
}

header {
background-color: #2f8d46;
color: white;
text-align: center;
padding: 1em;
}

nav {
background-color: #4caf50;
}

nav ul {
list-style-type: none;
margin: 0;
padding: 0;
display: flex;
justify-content: center;
}

nav li {
margin: 0;
}

nav a {
text-decoration: none;
color: #fff;
padding: 1em;
display: block;
transition: background-color 0.3s ease;
}

nav a:hover {
background-color: #45a049;
}

main {
flex: 1;
padding: 1em;
}

#content {
max-width: 1000px;
margin: 0 auto;
background-color: #fff;
padding: 20px;
border-radius: 8px;
box-shadow:
0 0 10px rgba(0, 0, 0, 0.1);
}

#content h2 {
color: #2f8d46;
}

#content img {
width: 400px;
height: auto;
margin: 0 auto;
display: block;
border-radius: 10px;
box-shadow: 
2px 2px 5px rgba(0, 0, 0, 0.2);
border: 3px solid #2F8D46;
}

form {
max-width: 400px;
margin: 20px auto;
padding: 20px;
background-color: #f0f0f0;
border-radius: 8px;
box-shadow: 
0 0 10px rgba(0, 0, 0, 0.1);
}

form label {
display: block;
margin-bottom: 8px;
}

form input,
form textarea {
width: 100%;
padding: 8px;
margin-bottom: 16px;
box-sizing: border-box;
border: 1px solid #ccc;
border-radius: 4px;
}

form button {
background-color: #4caf50;
color: #fff;
padding: 10px;
border: none;
border-radius: 4px;
cursor: pointer;
transition: 
background-color 0.3s ease;
}

form button:hover {
background-color: #45a049;
}
</style>
</head>

<body>
<div id="app">
    <header>
        <h1>
            GeeksforGeeks
        </h1>
        <h1>
            Single Page Application Using
            HTML, CSS & JavaScript
        </h1>
    </header>
    <nav>
        <ul>
            <li>
                <a href="#" onclick=
                "changeContent('home')">
                    Home
                </a>
            </li>
            <li>
                <a href="#" onclick=
                "changeContent('about')">
                    About
                </a>
            </li>
            <li>
                <a href="#" onclick=
                "changeContent('contact')">
                    Contact
                </a>
            </li>
        </ul>
    </nav>
    <main>
        <div id="content">

            <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/geeksforgeeks-12.png">
            <h2>Welcome to Geeks for Geeks</h2>
            <p>
                Geeks for Geeks is a portal for computer
                science enthusiasts, providing a wide range of
                tutorials, articles, and resources.
            </p>
            <p>
                Visit the GeeksforGeeks portal
                <a href="https://www.geeksforgeeks.org/" target="_blank">
                    here
                </a>.
            </p>
        </div>
    </main>
</div>
</body>
</html>`

const server = http.createServer((req, res) => {
console.log(req.url, req.method);

if(req.url === '/home' && req.method==='GET'){
    res.writeHead(200, {
        'Content-type':'text/html'
    });
    res.end(html_file);
}
else if(req.url === '/post' && req.method==='GET'){
    res.writeHead(200, {
        "Content-type" : "application/json",
        email: "rafiq254@gmail.com"
    });
    res.end(JSON.stringify(posts));
}
else if(req.url==='/show' && req.method==='GET'){
    res.setHeader("Content-type","application/json");
    res.statusCode=200;
    res.end(JSON.stringify(posts));
}
else{
    res.end("Not found");
}

// res.end("Hello from server world");
});

server.listen(5000, "127.0.0.1", () => {
console.log("Server is listening on port 5000");
});