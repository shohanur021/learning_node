const fs = require("fs");

const readableStream = fs.createReadStream( __dirname+"/bffer-stream-read.txt", "utf-8");

const writableStream = fs.createWriteStream( __dirname+"/buffer_stram-write.txt");

readableStream.on("data", (data) => {
    
    writableStream.write(data, (err) => {
        if(err){
            throw new Error("Error is found");
        }
    })

});