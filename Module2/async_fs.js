const  fs = require("fs");

console.log('I am number 1');

fs.readFile(__dirname+"/read.txt", "utf-8", (err, data) => {
      if(err){
        throw new Error('Error! Reading File!');
      }

      console.log(data);
});


console.log('I am number 2');


fs.writeFile(__dirname+"/Write_async.txt","Hello Developers", 
    (err) => {
        if (err) {
            throw new Error('Error');
        }
    }
);