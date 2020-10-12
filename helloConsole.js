console.log('hello node js');

var json = { msg : 'hello node js '};
console.log('message :: %j', json);

var a = 10;
var b = 20;

console.log('a + b = %d', a+b);

console.time('timeout');
setTimeout(function(){
    console.timeEnd('out');
}, 1000);

console.log('file name : ', __filename);
console.log('directory name : ', __dirname);