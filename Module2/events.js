const EventEmitter = require('node:events');

class MyBirthday extends EventEmitter {}

const myBirthday1 = new MyBirthday();

myBirthday1.on('birthday', () => {
    console.log("happy birthday");
})

myBirthday1.on('birthday', (gift) => {
    console.log(`I will send a ${gift}`);
})


myBirthday1.emit('birthday',"bike");