// john = {
//     name : 'John',
//     age : 32,
//     celebrateBirthday : function() {
//         this.age++;
//     }
// };

// Mary = {
//     name : 'Mary',
//     age : 43,
//     celebrateBirthday : function() {
//         this.age++;
//     }
// };

function Person ( name, age ) {
    this.name = name;
    this.age = age;
}
Person.prototype.celebrateBithday = function() {
        this.age++;
};

var john = new Person("John", 32);
john.celebrateBithday();
console.log( john );

var mary = new Person("Mary", 43);
mary.celebrateBithday();
console.log( mary );

console.log(john.__proto__ == Person.prototype );
console.log(mary.__proto__ == Person.prototype );