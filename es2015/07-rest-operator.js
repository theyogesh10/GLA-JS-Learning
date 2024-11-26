// 1. When declaring function's arguments
function foo( x, y, ...others ) {
    console.log( x );
    console.log( y );
    console.log( others );  
}
function sort( ...numbers ) {
    console.log( numbers );
    return numbers.sort();
}
const result = sort( 14, 78, 45, 10, 67 );
console.log( result );


// 2. When array destructuring 
const days = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri'
];
const [ first, second, ...restOfDays ] = days;
console.log( first, second, restOfDays );


// 3. When object destructuring
const john = {
    name: 'John',
    age: 32,
    emailids: [
        'john@gmail.com',
        'john@yahoo.com'
    ],
    address: {
        city: 'Bengaluru',
        pinCode: 560100
    }
}; 
// const { name, age, ...otherDetailsOfJohn } = john;
// console.log( name, age, otherDetailsOfJohn );

const { name, address: { city }, ...otherDetailsOfJohn } = john;
console.log( name, city, otherDetailsOfJohn );
