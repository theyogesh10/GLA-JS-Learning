function sumAll() {
    for( var i = 0, result = 0; i < arguments.length; i++){
        result = result + arguments[i];
    }
    return result;

}
console.log(sumAll( 10, 20 ));
console.log(sumAll( 10, 20, 30 ));
console.log(sumAll( 10, 20, 30, 40, 50 ));