const sum = function( x, y, logResult ){
    var result =  x + y;
    logResult( result );
};


// function logResult( result ) {
//     console.log( result );
// }
// sum(13, 15, logResult);


// sum(20, 30, function logResult( result ) {
//         console.log( result );
// });


sum(20, 30, function( result ) {        //anonymous fuction, it use only once, one time funtion
    console.log( result );
});