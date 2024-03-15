//switch case

'use strict'; //   it is not allow to create a variable without declaring its data type. 

var chocolate = "Dairy Milk", quantity;
switch( chocolate) {
    case "Dairy Milk":
        quantity = 5;
        break;
    case "Hersheys":
        quantity = 50;
        break;
    case "Toblerone":
        quantity = 1;
        break;
    default:
        quantity = 2;
}
console.log(quantity);