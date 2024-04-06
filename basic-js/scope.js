var global_x = 1;
console.log("outside of function global_x = ", global_x);

var z = 5;

function foo() {
    var local_foo_x = 2;
    var z = 6;
    console.log("inside foo, global_x =     ", global_x);
    console.log("inside foo, local_foo_x = ", local_foo_x);


    function bar() {
        var local_bar_x = 3;
        local_bar_y = 4;
        console.log("inside bar, global_x = ", global_x);
        console.log("inside bar, local_foo_x = ", local_foo_x);
        console.log("inside bar, local_bar_x = ", local_bar_x);
        console.log("inside bar, local_bar_y = ", local_bar_y);
        console.log("inside bar, z = ", z);    
    }
    bar();
    //console.log("inside foo/outside bar, local_bar_x = ", local_bar_x);
    console.log("inside foo, local_bar_y = ", local_bar_y);
}
foo();
//console.log("outside the function, local_foo_x = ", local_foo_x);    //you cannot access local  variable outside its scope
console.log("outside function, local_bar_y = ", local_bar_y);