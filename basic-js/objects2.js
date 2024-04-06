var sholay = {
    name: 'Sholay',
    cast: [
        'Amitabh', 'Hema', 'Dharmendra', 'Jaya'
    ],
    "box office stats": {
        countries: 10,
        collection: 8873650000
    },
    addToCollection: function( amount ) {
        this["box office stats"].collection += amount; 
    }
};
console.log(sholay.name); 

console.log(sholay.cast[1]);

console.log(sholay["box office stats"]);
console.log(sholay["box office stats"]["collection"]);

sholay.addToCollection( 350000 );

sholay.villain = 'Gabbar Singh';              //add a new property to the object


sholay.addToCast = function( newMember ) {    //add a new method to the object
    this.cast[this.cast.length] = newMember;
}
sholay.addToCast( 'Sanjay' );
sholay.addToCast( 'Amjad' );

console.log(sholay);

delete sholay["box office stats"];           //delete an existing property of the object
console.log(sholay);