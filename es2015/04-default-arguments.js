function greeting( message = 'Hello', name = 'World' ) {
    return  `${message} ${name}!`;
}

console.log( greeting( 'Good morning', 'John' ));
console.log( greeting( 'Good morning' ));
console.log( greeting() );
console.log( greeting( undefined, 'Mary'));
