const fs = require("fs");

const readableStream = fs.createReadStream( __dirname+"/bffer-stream-read.txt", "utf-8");

const writableStream = fs.createWriteStream( __dirname+"/buffer_stram-write_2.txt");

// let count = 1;

readableStream.on("data", (data) => {
    
    // console.log(`completed in ${count}`)
    // count=count+1;

    readableStream.pipe(writableStream);

});

readableStream.on('error', (err) => {
    throw new Error(err);
})

writableStream.on("error", (err) => {
    throw new Error(err);
})

writableStream.on('finish',() => {
    console.log("Finish writting file");
})