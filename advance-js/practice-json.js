// Given the following JSON-formatted string, write a snippet of code using JSON and array methods, to change the score in Physics to 97, remove the item for Chemistry and add an item for Biology with score 78, and another item for Geography with score 88 in its place.
 

var scores = `
    [
        { "subject": "Math", "score": 89 },
        { "subject": "Programming", "score": 100 },
        { "subject": "Physics", "score": 95 },
        { "subject": "Chemistry", "score": 75 },
        { "subject": "History", "score": 59 }
    ]
`;

var scoresArray = JSON.parse( scores );
console.log( scoresArray );

var physics = scoresArray.find( function( item ) {
    return item.subject === "Physics";
});
if(physics){
    physics.score = 97;
}
// console.log( scoresArray );

scoresArray = scoresArray.filter( function( item ) {
    return item.subject !== "Chemistry";
});
// console.log( scoresArray );

scoresArray.push( { subject: "Biology", score: 78 } );
scoresArray.push( { subject: "Geography", score: 88 } );

// console.log( scoresArray );

var updatedScore = JSON.stringify( scoresArray );
console.log( updatedScore );