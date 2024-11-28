const sum = ( x, y ) => {
    const promise = new Promise(( resolve, reject ) => {
        if( typeof x !== 'number' || typeof y !== 'number') {
            return reject( new Error( 'Both arguments must be numbers' ) );
        }
        setTimeout( () => {
            resolve( x + y );
        }, 2000 );
    });

    return promise;
};

const promise = sum( 10, 20 );

promise
    .then( ( result ) => {
        console.log( result );
        return sum( result, 30 );
    })
    .then( ( result ) => console.log( result ))
    .catch( error => console.log( error.message ) );