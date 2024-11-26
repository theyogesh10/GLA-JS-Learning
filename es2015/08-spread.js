// const result = Math.max( 10, 45, 32, 78, 33, 19 );
// console.log( result );

// 1. pass item of an array as arguments when calling a function
const numbers = [ 10, 45, 32, 78, 33, 19 ];
const result = Math.max( ...numbers );
console.log( result );

const arr1 = [ 1, 2, 3 ], arr2 = [ 4, 5, 6 ];
const arr3 =[ ...arr1, ...arr2 ];   // spread out items in arrays into comma-separated values
console.log( arr3 );

// 2. Object spread
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
const johnCopy = { // a shallow copy
    ...john,  // spread out the properties of an object into comma-separated values
};
console.log( john );
console.log( johnCopy );

// primitive value change
johnCopy.name = 'Jonathan';
// console.log( john );
// console.log( johnCopy ); //This changes only johnCopy.name, as primitives are copied by value. The original john.name remains 'John'

// non-primative value change 
johnCopy.emailids.push( 'john@hotmail.com')
console.log( john );
console.log( johnCopy ); // The emailids property is a reference to the same array in both john and johnCopy. Modifying the array affects both objects