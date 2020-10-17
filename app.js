// js 파일 안의 exports를 가져와 사용할 수 있다
var math = require('./math');

console.log('math.abs(%d) = %d', -100, math.abs(-100));
console.log('math.pow(%d) = %d ', 2, 3, math.pow(2, 3));


setTimeout( foo, 3000);

function foo(){
    console.log("2");
}
console.log("1");