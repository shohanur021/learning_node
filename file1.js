const {a, b, add} = require('./file2');
console.log(a, b, add(10,20));

const {a:a2, b:b2, add:add2} = require('./file3');
console.log(a2, b2, add2(50,20,40));