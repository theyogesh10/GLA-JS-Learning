const sum = ( x, y, callback ) => {
    setTimeout( () => {
        callback( x + y);
    }, 2000 );
    // return;
};

function printResult( result ) {
    console.log( result);
}
console.log( sum( 10, 20, printResult ) );