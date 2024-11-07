const strProducts = `
[
    {
        "name": "Hammer",
        "description": "A claw hammer",
        "price": 120,
        "rating": {
            "min": 2,
            "max": 5    
        }  
    },
    {
        "name": "Video Game Controller",
        "description": "A controller for playing video games",
        "price": 15000
    }
]
`;

var products = JSON.parse( strProducts );
console.log( products );

var newProduct = {
    name: "Biscuits",
    "description": "Whole weat biscuits",
    price: 30
};
products.push( newProduct );
console.log( products );

var strProductsSendBack = JSON.stringify( products );
console.log( strProductsSendBack );