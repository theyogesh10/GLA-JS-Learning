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
        //sholay["box office stats"].collection = sholay["box office stats"].collection + amount;

        //sholay["box office stats"].collection += amount;

        this["box office stats"].collection += amount;      // "this" is the context of the method
    }
};
console.log(sholay);

console.log(sholay.name); 

console.log(sholay.cast[1]);

console.log(sholay["box office stats"]);
console.log(sholay["box office stats"].collection);
console.log(sholay["box office stats"]["collection"]);

sholay.addToCollection( 350000 );
console.log(sholay);
