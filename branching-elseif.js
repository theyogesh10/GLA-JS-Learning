//else if

var priceOfPhone = 42000, bankBalance = 20000, creditLimit  = 60000;

if( priceOfPhone <  bankBalance ) {
    console.log("All ok, process payment"); 
} else if(priceOfPhone < creditLimit) {
    console.log("Bank payment failed, credit card will be used.");
} else{
    console.log("Sorry, you do not have sufficient funds");
}

console.log("Trasection over");


