// forEach()

var days = [
    { day: 'Sunday', hours: 2 },
    { day: 'Monday', hours: 8 },
    { day: 'Tuesday', hours: 7 },
    { day: 'Wednesday', hours : 10 }
]

days.forEach( function( item ) {
    console.log( item );
});

// filter()

var resultDays = days.filter( function( item ) {
    return item.hours >= 8;
});
console.log( resultDays );

// map()

var numbers = [1, 2, 3, 4, 5];
var resultArray = numbers.map( function ( item ) {
    return item * item;
});
console.log( resultArray );

var hoursSpent = days.map( function( item ) {
    return item.hours ;
});
console.log( hoursSpent );