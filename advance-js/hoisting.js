console.log( x );
var x = 1;   // value is assigned only here though variable is created earlier
console.log( x );

// function declaration syntex
foo();
function foo(){
    console.log( 'foo called' );
}


//function expression syntex
//function expression is not hoisted, it work like as variable hoisting 
bar()
var bar = function(){
    console.log( 'bar called' );
}

