var today = new Date();
console.log(today);

var milleniumStart = new Date( 2000, 0, 1);
console.log(milleniumStart);

today.setDate( today.getDate() + 1);
console.log(today);

var July31 = new Date( 2024, 6, 31, 5, 30, 0, 0 );
console.log(July31);
July31.setDate(July31.getDate() + 1);
console.log(July31);


// getters
console.log(July31.getMonth() );
console.log(July31.getDay() );
console.log(July31.getFullYear() );


//setters
var today = new Date();
console.log(today);
today.setDate( 9 );
console.log(today);
today.setFullYear( 2023 );
console.log(today);

console.log( today.toTimeString());