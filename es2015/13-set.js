const primes = new Set( [ 2, 3, 5, 7, 11, 13 ] );

console.log( primes.size );

primes.add( 17 );
console.log( primes );

primes.add( 7 );  // Set only stores unique values, so adding 7 again has no effect as it's already present.
console.log( primes );

primes.delete( 5 );
console.log( primes );

console.log( primes.has( 8 ) );     // false
console.log( primes.has( 11 ) );     // true