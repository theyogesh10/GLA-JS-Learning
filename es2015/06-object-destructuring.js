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

// const name = john.name;
// console.log( name );

const { name, age : yearsOld, address : { city : residence }, emailids : [ , secondaryEmailId ] } = john;
console.log( name, yearsOld, residence, secondaryEmailId );