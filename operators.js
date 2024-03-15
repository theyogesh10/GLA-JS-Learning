// arithmetic operators
var x = 12, y = 13;
console.log(10.5+20.35);
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);

var name  = "Yogesh", message  = "Good Morning!";
console.log(name + " " + message); //string concat

console.log(0.1+0.2);

// relational operators

var isBefore = "hello" < "hi";   //it's check alphabetical order
console.log(isBefore);  //true

var isBefore = "hello" > "hi"; 
console.log(isBefore);  //false

var isGreater = 10 > 9;
console.log(isGreater);  //true

console.log( x <= y );  //true
console.log( x >= y );  //false
console.log( x == y );  //false
console.log( x != y );  //true


console.log( 1 == "1"); // true      //type unsafe equality operator
console.log( 1 === "1") ; // false   // strict equality (both value and type)
console.log( 1 === 1) ; // true
console.log( 1 !== 1) ; // false


// logical operators

var isRaining  = true, goingByWalk = true, goingByCar = false;
var takeUmbrella = isRaining &&  goingByWalk;    //&& means AND
                               //if both side are TRUE then it will be TRUE
console.log(takeUmbrella);     // true

var priceOfPhone = 42000, bankBalance = 60000, amIInterested  = true;
var willIBuyPhone = priceOfPhone < bankBalance && amIInterested;
console.log(willIBuyPhone);       // true


var priceOfPhone2 = 42000, yourBankBalance2 = 20000, friendBankBalance2 = 50000, amIInterested2  = true;
var willIBuyPhone2 = priceOfPhone2 < yourBankBalance2 || friendBankBalance2
console.log(willIBuyPhone);            // true

console.log( !true )    //false

console.log(!isRaining); //false   

// miscellaneous

console.log( typeof isRaining);         //boolean

var city = "Bengaluru";
var isTrafficHuge = city  === "Bengaluru" ? "Yes" : "No";
console.log(isTrafficHuge);             // Yes

console.log( 1 + 2 + 3 * 4 );           //1+2+12    //3+12      //15