const sum = ( x, y, callback ) => {
    setTimeout( () => {
        callback( x + y );
    }, 2000 );
    return;
};

console.log( sum( 10, 20, function( result ) {
    console.log( result );

    sum( result, 30, function( result ) {
        console.log( result );
    })
}));
