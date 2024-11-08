// alert() is a blocking method

alert( "This is for your information" );
console.log( "After alert" );

// confirm dialog 
var result = confirm( "Do you really want to exit the website");
console.log( result );

// prompt dialog
var result = prompt( "Enter your favorite city name : ", "Bengaluru" );
console.log( result );