//practice program 1
function f() {
    function g() {
        x = 1;
        console.log(x);
    }
    console.log(x);
    g();
}
f();

//output:   x is not defined

//practice program 2

var x = 1;
function f() {
    var x = 2;
    function g() {
        console.log(x);
    }
    g();
}
f();

// output: 2