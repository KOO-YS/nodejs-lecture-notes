// exports -> 다른 js에서 public으로 사용 가능 
exports.abs = function(number){
    return number < 0 ? -number : number;
}
exports.pow = function(x,y){
    var value = 1;

    for(var i = 0; i<y; i++){
        value *= x;
    }
    return value;
}