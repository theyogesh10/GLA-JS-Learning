//Immediately Invoked Function Expression (IIFE)
// callBack - anonymous function

(function(){
    var x = 100;
    const sum = function( x, y, callBack ){
        var result =  x + y;
        callBack( result );
    };

    sum(20, 30, function( result ) {
        console.log( result );
    });
})();
//either })();  or }());