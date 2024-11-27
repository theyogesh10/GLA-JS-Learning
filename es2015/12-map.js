const numbers = new Map( [ [ 1,"one" ], [ 2, "two" ], [ 3, "three" ] ] );

console.log( numbers.size );
console.log( numbers.entries() );
console.log( numbers.keys() );
console.log( numbers.values() );

numbers.set( 40, "Forty" );
console.log( numbers );

console.log( numbers.get( 3 ) );

numbers.delete( 2 );
console.log( numbers );

// numbers.clear();
// console.log( numbers );

for( let [ key, value ] of numbers) {
    console.log( `${key} = ${value}` );
}
