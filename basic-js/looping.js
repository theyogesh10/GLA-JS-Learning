//for loop 

const { obj } = require("../advance-js/prototype");

for (var i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("after loop")


//while loop

var j = 1;
while( j <= 10 ) {
    console.log(j);
    j++;
};
console.log(Object.getPrototypeOf(obj));
