// Custom Errors
function sum( x, y ) { 
    if( typeof x ==="number" && typeof y === "number" ){
        return x + y;
    }
    throw new Error( "only numbers are allowed as an arguments" );
}
try{
    console.log( sum( 12,"me" ) );
} catch(error){
    console.log( error.message );
}