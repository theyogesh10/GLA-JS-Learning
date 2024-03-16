function foo() {
    console.log("foo is called");
}
foo();
foo('hello');
foo('hello', 'world');


function foo2(x, y ,z) {
    console.log(x, y, z);
}
foo2();                  //undefined undefined undefined
foo2('hello');           //hello undefined undefined
foo2('hello', 'world');  //hello world undefined
foo2('hello', 'world', 'good', 'morning');     //hello world good




