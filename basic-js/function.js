// function declaration syntax
console.log(sum( 10, 20 ));  // function declaration are hoisted to the top of their scope

function sum( x, y ){
    var result = x + y; 
    return result;
}

var result = sum( 12, 13 );
console.log("Result is : ", result);


// function expression syntax (more like variable declaration and assignment)

// console.log(sum2( 10, 20 ));  // function expression aren't hoisted to the top of their scope

var sum2 = function( x, y ) {
    var result = x + y;   
    return result;
};
console.log(sum2( 25, 27 ));


var square = (function(x) {return x*x;}(5));   // anonymous functions
console.log(square);