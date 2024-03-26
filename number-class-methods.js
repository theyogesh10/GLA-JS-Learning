console.log(Number.parseInt( "3.56", 10 ));
console.log(Number.parseInt( "1100", 2 ));
console.log(Number.parseInt( "abcdef", 16 ));


console.log(Number.parseFloat( "3.56", 10 ));

//useful for currency values
var wrappedNumber = new Number (3.5678 );
console.log( wrappedNumber.toFixed( 2 ));
console.log( 3.56789.toFixed( 3 ));


var x = 1 / 'hello'; //NaN
console.log( Number.NaN );
console.log( NaN );
console.log( x );
console.log( NaN === 1 );  //false
console.log( NaN === NaN );  //false

console.log( isNaN(1 / 'hello' ));
console.log( Number.isNaN(1 / 'hello' ));

