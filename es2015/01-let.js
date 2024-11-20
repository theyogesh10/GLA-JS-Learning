// let x = 1;
// console.log( x );
// let x =2;     // let --- not allow --- redeclare again
// console.log( x );


// var y = 1;
// console.log( y );
// var y = 2;     // var --- allow --- redeclare again
// console.log( y );


// let x = 1;
// console.log( x );
// var x = 2;      // we can not declare x vatiable again, because it's allready declared using let keyword
// console.log( x );


// var x = 1;
// console.log( x );
// let x = 2;      // we can not declare x vatiable again, because it's allready declared using var keyword, we can not redelare it using let 
// console.log( x );


// if( true ) {
//     let x = 1;  // block scoped variable
//     var y = 1;  // global  variable
//     // console.log( x );
//     // console.log( y );
// }
// // console.log( x );  // error
// console.log( y );  // 1 


// console.log( x );    // let variable --- hoisting --- not allowed
console.log( y );       // var variable --- hoisting --- allow
let x = 1;              // Whether we create a global or local variable, let is not a property of the window object
var y = 1;              // Whether we create a global or local variable, var is a property of the window object