// GET data
fetch( 'https://jsonplaceholder.typicode.com/todos/1' )
.then( response => response.json() )
.then( value => console.log( value ) )
.catch( error => console.error( error.message ) );


// Data for POST 
const newTodo = {
    "userId": 1,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  };

// POST data
fetch( 'https://jsonplaceholder.typicode.com/todos', 
    {
        method: 'POST',
        body: JSON.stringify( newTodo )
    },
    {
        headers: {
            'Content-Type': 'application/json',
        }
    }
)
.then( response => response.json() )
.then( value => console.log( value ) );
