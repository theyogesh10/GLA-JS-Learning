try {
    foo();
    console.log( "after foo called within try block" );
} catch( error ) {
    console.log( error.message );
} finally {
    console.log( "inside finally block" );
}

console.log( "after foo called" );