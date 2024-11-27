class Person {
    constructor( name, age ) {
        console.log( this );
        this.name = name;
        this.age = age;
    }
    celebrateBirthday() {
        this.age++;
    }

}

const john = new Person( 'John', 32 );
console.log( john );

john.celebrateBirthday();
console.log( john );