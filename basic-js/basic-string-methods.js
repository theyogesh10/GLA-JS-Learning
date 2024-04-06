//a string is immutable 

var qoute = 'With great power comes great responsibility';

var pieceOfTheQoute = qoute.substring( 10, 20 );            //substring() method
console.log(pieceOfTheQoute);


var replacedString =  qoute.replace('responsibility', 'electicity bill');       //replace() method
console.log(replacedString);
console.log(qoute);



var fruits = 'apples, oranges, bananas'
var fruitsArray = fruits.split(', ');                      //split() method
console.log(fruitsArray);


var firstIndex = qoute.indexOf('great');                  //indexOf() method
console.log(firstIndex);    //5

var lastIndex = qoute.lastIndexOf('great');               //lastIndexOf() method
console.log(lastIndex);     //23


var anotherIndex = qoute.indexOf('greatest');
console.log(anotherIndex);    //-1