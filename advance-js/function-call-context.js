function foo(){
    console.log( this );
}
foo();

var john = {
    name : 'John',
    getName : function(){
        console.log( this )
        return this.name;
    }
};  
console.log( john.getName() );

var getName = john.getName;
getName();