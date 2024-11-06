function greet( message, name ) {
    console.log( this );
    console.log(message + ' ' + name + '!');
}

greet( 'Good morning', 'Yogesh' );


console.log( greet instanceof Object );

greet.x = 100;
console.log( greet.x );

greet.foo = function() {
    console.log( 'greet.foo was called' );
}
greet.foo();


// call method

greet.call( 'hello', 'Good evening', 'Mary' ); 

// apply() method

var args = [ 'Good evening', 'Mary' ];
greet.apply( 'hello', args );

greet.apply( null, args )


// bind() method

var greetBound = greet.bind('world' );
greetBound( 'Hello', 'Arvind' );


var greetHola = greet.bind(null, 'Hola');
greetHola( 'David' );
greetHola( 'Rita' );



