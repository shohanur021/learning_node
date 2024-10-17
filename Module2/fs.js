const fs = require('fs');

//const output = fs.readFileSync(__dirname + "./read.txt");
const output = fs.readFileSync("./read.txt", "utf-8");

console.log(output);



const text = "hello level-2";

fs.writeFileSync('./write.txt',text);