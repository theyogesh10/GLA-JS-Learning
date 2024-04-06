var a = 1;

function f() {
    var b = 2;
    console.log(a);   //1
    console.log(b);   //2
}
f();
console.log(a);      //1
console.log(b);      //not defined