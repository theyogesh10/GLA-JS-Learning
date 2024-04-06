//primitive data type --- number, boolean and string 
var x = 1, y, z=4.1415;  //y is undefined 
console.log(x);
console.log(y);


console.log(typeof(1.5));
console.log(typeof(x));
console.log(typeof(z)); //number


//boolean
var isItRaining = true, isItPouring = false;
console.log(isItRaining); // true
console.log(typeof(isItRaining)); //boolean
console.log(typeof isItPouring); //boolean


//string 
var name = "Yogesh", message = "Good Morning!";
console.log( name );
console.log(message);
console.log( typeof(name) ); //string
console.log( typeof(message) ); //string
console.log(message.length);     //for string length
console.log(message + ' ' + name); //for concatination string 