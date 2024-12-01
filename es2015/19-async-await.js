const fetchAndAddTodos = async () => {
    try {
        const response = await fetch( 'https://jsonplaceholder.typicode.com/todos/1' );
        const todo = await response.json();
        console.log( todo );
    } catch ( error ) {
        console.error( error.message );
    }
};

fetchAndAddTodos();