//const declares a variable that must be initialized immediately and whose reference is immutable, though object contents can be modified.

const x = 1; // initialize, immutable 
// x = 2;      // be can not reassign it

const obj = {
    y: 1
};
obj.y++;       // object still the same only property value modify the object contents
console.log( obj );

// obj = { // reassign not allowed
//     y: 2 
// };
